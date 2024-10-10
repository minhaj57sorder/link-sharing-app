<template>
  <div class="flex justify-center items-center h-screen w-screen">
    <div>
      <div class="q-gutter-y-md" style="max-width: 600px">
        <q-card>
          <q-tabs v-model="tab" dense class="text-grey" active-color="primary" indicator-color="primary" align="justify"
            narrow-indicator>
            <q-tab name="signin" label="Login" />
            <q-tab name="register" label="Register" />
          </q-tabs>
          <q-separator />
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="signin">
              <form class="w-72" @submit="loginSubmit">
                <div class="mb-3">
                  <q-input label="UserName or Email address" v-model="formDataLists.email" required outlined dense />
                </div>
                <div class="mb-3">
                  <q-input label="Password" v-model="formDataLists.password" required outlined dense
                    placeholder="•••••••••" />
                </div>
                <div className="w-full flex justify-center">
                  <q-btn type="submit" color="green"> Submit </q-btn>
                </div>
              </form>
            </q-tab-panel>
            <q-tab-panel name="register">
              <form class="w-72" @submit="registerSubmit">

                <div v-if="formErrors?.headerMessage" class="text-red-8 text-md font-bold">
                  <span>{{ formErrors?.headerMessage }}</span>
                </div>
                <div class="mb-3">
                  <q-input label="First Name" v-model="formDataLists.firstName" outlined dense />
                </div>
                <div class="mb-3">
                  <q-input label="Last Name" v-model="formDataLists.lastName" outlined dense />
                </div>
                <div class="mb-3">
                  <q-input label="User Name" v-model="formDataLists.userName" outlined dense
                  placeholder="username without white space or special charecter" required  />
                  <div v-if="formErrors?.userName" class="text-red-8 text-xs q-pl-sm">
                    <span>{{ formErrors?.userName }}</span>
                  </div>
                </div>
                <div class="mb-3">
                  <q-input label="Email address" v-model="formDataLists.email" required outlined dense />
                  <div v-if="formErrors?.email" class="text-red-8 text-xs q-pl-sm">
                    <span>{{ formErrors?.email }}</span>
                  </div>
                </div>
                <div class="mb-3">
                  <q-input label="Password" v-model="formDataLists.password" required outlined dense
                  placeholder="•••••••••" />
                  <div v-if="formErrors?.password" class="text-red-8 text-xs q-pl-sm">
                    <span>{{ formErrors?.password }}</span>
                  </div>
                </div>
                <div class="mb-3">
                  <q-input label="Confirm Password" v-model="formDataLists.confirmpassword" required outlined dense
                  placeholder="•••••••••" />
                  <div v-if="formErrors?.confirmpassword" class="text-red-8 text-xs q-pl-sm">
                    <span>{{ formErrors?.confirmpassword }}</span>
                  </div>
                </div>
                <div className="w-full flex justify-center">
                  <q-btn type="submit" color="green"> Submit </q-btn>
                </div>
              </form>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue';
import { api } from '@/boot/axios';
import { setToken } from '@/utils/token';
import { isValidEmail } from '@/utils/validationHelper.js';
import { useRouter } from 'vue-router';
import { useUserAuthStore } from '@/stores/userAuthStore.js';
import { useQuasar } from 'quasar';
import { convertToUsername, validateUsername } from '@/utils/validationHelper';
const $q = useQuasar();
const userAuthStore = useUserAuthStore();
const router = useRouter();
const formErrors = ref({})
const formDataLists = reactive({
  userName: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmpassword: '',
});
const loading = ref(false);
const login = ref(true);
const tab = ref('signin');
const loginSubmit = async (e) => {
  e.preventDefault();
  const config = {
    method: 'POST',
    url: 'api/user/auth',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      email: formDataLists.email,
      password: formDataLists.password,
    },
  };
  loading.value = true;
  try {
    const response = await api.request(config);
    loading.value = false;
    setToken('token', response.data.token);
    sessionStorage.setItem('auth-user', JSON.stringify(response.data));
    userAuthStore.userData = response.data;
    router.push('/myprofile/' + response.data.userName);
    $q.notify({
      message: 'welcome back',
      color: 'primary',
      position: 'top',
      actions: [
        {
          icon: 'close',
          color: 'white',
          handler: () => {
            /* ... */
          },
        },
      ],
    });
    formDataLists.email = '';
    formDataLists.password = '';
    formDataLists.confirmpassword = '';
  } catch (error) {
    if (error?.response?.status == 401) {
      $q.notify({
        message: error.response.data.message + '. Login to try again.',
        color: 'red',
        position: 'top',
        actions: [
          {
            icon: 'close',
            color: 'white',
            handler: () => {
              /* ... */
            },
          },
        ],
      });
    } else {
      $q.notify({
        message: error.message,
        color: 'red',
        position: 'top',
        actions: [
          {
            icon: 'close',
            color: 'white',
            handler: () => {
              /* ... */
            },
          },
        ],
      });
    }
    console.error(error);
    loading.value = false;
  }
};
const registerSubmit = async (e) => {
  e.preventDefault();
  formErrors.value = {}
  if (!validateUsername(String(formDataLists.userName))) {
    formErrors.value.userName = "User Name should not contains any whitespace or special charecter. For example " + convertToUsername(String(formDataLists.userName))
  }
  if (!(String(formDataLists.userName))) {
    formErrors.value.userName = "User Name required"
  }
  if (!formDataLists.email) {
    formErrors.value.email = "User Email Required"
  }
  if (!formDataLists.password) {
    formErrors.value.password = "User Password Required"
  }
  if (!formDataLists.confirmpassword) {
    formErrors.value.confirmpassword = "User Confirm Password Required"
  }
  if (formDataLists.password !== formDataLists.confirmpassword) {
    formErrors.value.confirmpassword = "Password and confirm password not matched."
  }
  if (Object.keys(formErrors.value).length !== 0) {
    return;
  }
  const config = {
    method: 'POST',
    url: 'api/user/auth/register',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      userName: formDataLists.userName,
      firstName: formDataLists.firstName,
      lastName: formDataLists.lastName,
      email: formDataLists.email,
      password: formDataLists.password,
    },
  };
  loading.value = true;
  try {
    const response = await api.request(config);
    loading.value = false;
    login.value = true;
    console.log(response.data);

    setToken('token', response.data.token);
    sessionStorage.setItem('auth-user', JSON.stringify(response.data));
    userAuthStore.userData = response.data;
    router.push('/myprofile/' + response.data.userName);

    $q.notify({
      message: 'Registration Successfully!',
      color: 'primary',
      position: 'top',
      actions: [
        {
          icon: 'close',
          color: 'white',
          handler: () => {
            /* ... */
          },
        },
      ],
    });
    formDataLists.email = '';
    formDataLists.password = '';
    formDataLists.confirmpassword = '';
  } catch (error) {
    console.error(error);
    if (error?.response?.status == 403) {

      formErrors.value.headerMessage = "User name or email already exist. Try different username."
      $q.notify({
        message: 'User Already exist with the username or email, Try different username or email',
        color: 'red',
        position: 'top',
        actions: [
          {
            icon: 'close',
            color: 'white',
            handler: () => {
              /* ... */
            },
          },
        ],
      });
    } else {
      formErrors.value.headerMessage = "Something went wrong. Try again later"

      $q.notify({
        message: error.message,
        color: 'red',
        position: 'top',
        actions: [
          {
            icon: 'close',
            color: 'white',
            handler: () => {
              /* ... */
            },
          },
        ],
      });
    }
    loading.value = false;
  }
};
</script>
<style scoped></style>
