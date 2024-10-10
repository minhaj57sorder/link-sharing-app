<template>
  <q-page padding>
    <div class="pb-6">
      <h6 class="text-h6">Create/Edit User</h6>
    </div>
    <div>
      <div class="mb-6">
        <q-input label="Full name " type="text" placeholder="Full name" v-model="formDataLists.fullName" outlined
          dense />
      </div>
      <div class="mb-6">
        <q-input label="User name " type="text" placeholder="User name" v-model="formDataLists.userName" outlined
          dense />
        <div v-if="formErrors?.userName" class="text-red-8 text-xs q-pl-sm">
          <span>{{ formErrors?.userName }}</span>
        </div>
      </div>
      <div class="mb-6">
        <q-input label="Email *" type="email" placeholder="name@example.com" v-model="formDataLists.email" outlined
          dense />
        <div v-if="formErrors?.email" class="text-red-8 text-xs q-pl-sm">
          <span>{{ formErrors?.email }}</span>
        </div>
      </div>
      <div class="mb-6">
        <q-input label="Password *" type="text" placeholder="Password" v-model="formDataLists.password" outlined
          dense />
        <div v-if="formErrors?.password" class="text-red-8 text-xs q-pl-sm">
          <span>{{ formErrors?.password }}</span>
        </div>
      </div>
      <div class="mb-6">
        <div class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Previous File
        </div>
        <img class="w-64" :src="backendUrlLink + '/' + formDataListsPrev.profilePicture" alt="" />
        <div class="py-6"></div>
        <q-file outlined dense v-model="formDataLists.profilePicture" label="Upload Profile picture file ">
          <template v-slot:prepend>
            <q-icon name="attach_file" />
          </template>
        </q-file>
      </div>
      <div class="mb-6">
        <q-select label="Select an option for Permission *" placeholder="Value" v-model="formDataLists.permissions"
          :options="[...permissionsList]" outlined dense multiple use-chips />
        <div v-if="formErrors?.permissions" class="text-red-8 text-xs q-pl-sm">
          <span>{{ formErrors?.permissions }}</span>
        </div>
      </div>
      <div class="mb-6">
        <q-select label="Select an option for Permission *" placeholder="Value" v-model="formDataLists.roles"
          :options="[...rolesList]" outlined dense multiple use-chips />
        <div v-if="formErrors?.roles" class="text-red-8 text-xs q-pl-sm">
          <span>{{ formErrors?.roles }}</span>
        </div>
      </div>
      <q-btn :label="$route.params.id === 'create' ? 'Create User' : 'Update User'" color="green" @click="updateUser" />
    </div>
  </q-page>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue';
import { api, backendUrlLink } from '@/boot/axios';
import { useRoute, useRouter } from 'vue-router';
import { getToken } from '@/utils/token';
import { useUserAuthStore } from '@/stores/userAuthStore.js';
import StringArrayInput from '@/components/StringArrayInput.vue';
import { useQuasar } from 'quasar';
import {
  emptyValidator,
  stringValidator,
  numberValidator,
  emailValidator,
  isValidEmail,
  isValidNumber,
} from '@/utils/validationHelper';
const $q = useQuasar();
const userAuthStore = useUserAuthStore();
const route = useRoute();
const router = useRouter();
const permissionsList = ref([]);
const rolesList = ref([]);
const formErrors = ref({});
const formDataLists = reactive({
  fullName: '',
  userName: '',
  email: '',
  password: '',
  profilePicture: null,
  permissions: [],
  roles: [],
});
const formDataListsPrev = reactive({
  fullName: '',
  userName: '',
  email: '',
  password: '',
  profilePicture: '',
  permissions: [],
  roles: [],
});
const getUser = async () => {
  if (route.params.id == 'create') {
    getPermissions();
    getRoles();
    return;
  }
  // userAuthStore.checkLogin()
  const config = {
    method: 'GET',
    url: 'api/user/user_lists/' + route.params.id,
    headers: {
      Authorization: `Bearer ${getToken('token')}`,
    },
  };
  try {
    $q.loading.show();
    const response = await api.request(config);
    $q.loading.hide();
    formDataLists.fullName = response.data.fullName;
    formDataListsPrev.fullName = response.data.fullName;
    formDataLists.userName = response.data.userName;
    formDataListsPrev.userName = response.data.userName;
    formDataLists.email = response.data.email;
    formDataListsPrev.email = response.data.email;
    formDataLists.password = response.data.password;
    formDataListsPrev.password = response.data.password;
    formDataListsPrev.profilePicture = response.data.profilePicture;
    formDataLists.roles = response.data.roles;
    formDataListsPrev.roles = response.data.roles;
    formDataLists.permissions = response.data.permissions;
    formDataListsPrev.permissions = response.data.permissions;
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
    $q.loading.hide();
    console.error(error);
  } finally {
    getPermissions();
    getRoles();
  }
};
onMounted(() => {
  getUser();
});
// assign file to formDataLists.profilePicture
const selectedFileProfilePicture = (e) => {
  formDataLists.profilePicture = e.target.files[0];
};
const getPermissions = async () => {
  // userAuthStore.checkLogin();
  const config = {
    method: 'GET',
    url: 'api/permissions/',
    headers: {
      Authorization: `Bearer ${getToken('token')}`,
    },
  };
  try {
    $q.loading.show();
    const response = await api.request(config);
    $q.loading.hide();
    permissionsList.value = response.data.permissions.map((e) => {
      e.label = e.name;
      e.value = e._id;
      return e;
    });
    console.log('Form data permission: ', formDataLists.permissions);
    formDataLists.permissions = formDataLists.permissions.map((e) => {
      const ob = response.data.permissions.find((a) => a._id == e);
      console.log('ob ', ob);
      ob.label = ob.name;
      ob.value = ob._id;
      return ob;
    });
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
    $q.loading.hide();
    console.error(error);
  } finally {
  }
};
const getRoles = async () => {
  // userAuthStore.checkLogin();
  const config = {
    method: 'GET',
    url: 'api/roles/',
    headers: {
      Authorization: `Bearer ${getToken('token')}`,
    },
  };
  try {
    $q.loading.show();
    const response = await api.request(config);
    $q.loading.hide();
    rolesList.value = response.data.roles.map((e) => {
      e.label = e.name;
      e.value = e._id;
      return e;
    });
    console.log('Form data roles: ', formDataLists.roles);
    formDataLists.roles = formDataLists.roles.map((e) => {
      const ob = response.data.roles.find((a) => a._id == e);
      console.log('ob ', ob);
      ob.label = ob.name;
      ob.value = ob._id;
      return ob;
    });
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
    $q.loading.hide();
    console.error(error);
  } finally {
  }
};
function validateUsername(username) {
  // Regular expression to check if the username contains only alphanumeric characters
  const usernameRegex = /^[a-zA-Z0-9]+$/;

  // Test the username against the regular expression
  if (usernameRegex.test(username)) {
    return true; // Username is valid
  } else {
    return false; // Username is invalid
  }
}
function convertToUsername(str) {
  // Use regular expression to replace non-alphanumeric characters with an empty string
  const convertedUsername = str.replace(/[^a-zA-Z0-9]/g, '');

  return convertedUsername;
}

// update user data
// content type form data
const updateUser = async (e) => {
  // userAuthStore.checkLogin()
  e.preventDefault();
  formErrors.value = {};
  const data = {};
  if (formDataLists.userName) {
    data.userName = formDataLists.userName;
    if (!validateUsername(formDataLists.userName)) {
      formErrors.value.userName = 'Username Not Valid. Your username should be like this ' + convertToUsername(formDataLists.userName);
    }
  }
  if (!emptyValidator(formDataLists.userName)) {
    formErrors.value.userName = 'Required feild';
  }
  if (formDataLists.fullName) {
    data.fullName = formDataLists.fullName;
  }
  if (formDataLists.email) {
    data.email = formDataLists.email;
  }
  if (!emptyValidator(formDataLists.email)) {
    formErrors.value.email = 'Required feild';
  }
  if (formDataLists.password) {
    data.password = formDataLists.password;
  }
  if (!emptyValidator(formDataLists.password)) {
    formErrors.value.password = 'Required feild';
  }
  if (
    formDataLists.profilePicture &&
    formDataLists.profilePicture.name &&
    formDataLists.profilePicture.lastModified
  ) {
    data.profilePicture = formDataLists.profilePicture;
  }
  data.roles = JSON.stringify(formDataLists.roles.map((e) => e._id));
  data.permissions = JSON.stringify(
    formDataLists.permissions.map((e) => e._id),
  );
  if (Object.keys(formErrors.value).length !== 0) {
    return;
  }
  if (Object.keys(data).length <= 0) {
    $q.notify({
      message: 'Empty Form Submission Not Allowed',
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
    return;
  }
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${getToken('token')}`,
    },
    // bodyObject
    data,
  };
  if (route.params.id == 'create') {
    config.method = 'post';
    config.url = 'api/user/user_lists';
  } else {
    config.method = 'put';
    config.url = 'api/user/user_lists/' + route.params.id;
  }
  try {
    const response = await api.request(config);
    router.push('/admin/user/user_list');
    $q.notify({
      message: 'Updated Successfully!',
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
  }
};
</script>
<style scoped></style>
