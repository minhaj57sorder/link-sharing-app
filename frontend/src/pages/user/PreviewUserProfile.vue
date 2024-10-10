<template>
  <q-page class="">
    <div class="p-1">
      <div class="flex justify-center -m-1 relative">
        <div
          class="md:opacity-100 opacity-0 absolute top-0 left-0 bg-[#4a21fb] w-full h-[150px] rounded-bl-3xl rounded-br-3xl">
        </div>
        <div class="relative z-1 w-[250px] p-1 md:pt-16 pt-10">
          <div class="bg-white !rounded-lg  md:shadow-lg shadow-none">
            <div>
              <div class="p-4">
                <div class="">
                  <div class="flex justify-center mb-2">
                    <div class="border-4 border-violet-600 rounded-full">
                      <img v-if="formDataLists.profilePicture" class="w-[5rem] rounded-full overflow-hidden"
                        :src="tempPictureUrl" alt="" />
                      <img v-else class="w-[5rem] rounded-full overflow-hidden"
                        :src="backendUrlLink + '/' + formDataListsPrev.profilePicture" alt="" />
                    </div>
                  </div>
                  <div class="text-center mb-4">
                    <h6 class=" text-h6 p-0 m-0 font-bold">{{ formDataLists.firstName }} {{ formDataLists.lastName }}
                    </h6>
                    <p class="p-0 m-0 text-xs">{{ formDataLists.email }}</p>
                  </div>
                  <div class="">
                    <div class="-m-1 flex flex-col">
                      <div class="p-1" v-for="item in formDataLists.links" :key="item._id">
                        <q-btn :href="item.link" target="_blank" class="full-width text-left" size="md"
                          :color="getColor(item.linkType?.value)" unelevated no-caps="">
                          <template v-slot:default="">
                            <div class="w-full flex items-center justify-between">
                              <q-icon :name="getIcon(item.linkType?.value)" size="xs" />
                              <span>{{ item.linkType?.label }}</span>
                              <q-icon name="trending_flat" size="xs" />
                            </div>
                          </template>
                        </q-btn>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
const tempPictureUrl = ref(null);
const rolesList = ref([]);
const formErrors = ref({});
const formDataLists = reactive({
  id: null,
  firstName: '',
  lastName: '',
  userName: '',
  email: '',
  password: '',
  profilePicture: null,
  permissions: [],
  roles: [],
  links: [],
});
const formDataListsPrev = reactive({
  firstName: '',
  lastName: '',
  userName: '',
  email: '',
  password: '',
  profilePicture: '',
  permissions: [],
  roles: [],
});
const validLinkOption = [
  {
    label: "Youtube",
    value: 'youtube',
    domain: /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/,
  },
  {
    label: "Github",
    value: 'github',
    domain: /^(https?:\/\/)?(www\.)?github\.com\/.+$/,
  },
  {
    label: "Linkedin",
    value: 'linkedin',
    domain: /^(https?:\/\/)?(www\.)?linkedin\.com\/.+$/,
  },
  {
    label: "Facebook",
    value: 'facebook',
    domain: /^(https?:\/\/)?(www\.)?facebook\.com\/.+$/,
  },
  {
    label: "Instagram",
    value: 'instagram',
    domain: /^(https?:\/\/)?(www\.)?instagram\.com\/.+$/,
  },
];

function getIcon(type) {
  // Return a corresponding icon for each link type.
  const icons = {
    youtube: 'mdi-youtube',
    github: 'mdi-github',
    linkedin: 'mdi-linkedin',
    facebook: 'mdi-facebook',
    instagram: 'mdi-instagram',
  };
  return icons[type] || 'mdi-web';  // Default icon for unknown types
}
function getColor(type) {
  // Map a specific color to each link type
  const colors = {
    youtube: 'red-8',
    github: 'black',
    linkedin: 'blue-9',
    facebook: 'blue-7',
    instagram: 'orange-5',
  };
  return colors[type] || 'primary';  // Default color if the type is unknown
}
const getUser = async () => {
  if (route.params.id == 'create') {
    return;
  }
  // userAuthStore.checkLogin()
  const config = {
    method: 'GET',
    url: 'api/user/user_lists/userprofile/' + route.params.userName,
    headers: {
      Authorization: `Bearer ${getToken('token')}`,
    },
  };
  try {
    $q.loading.show();
    const response = await api.request(config);
    $q.loading.hide();
    formDataLists.id = response.data._id;
    formDataLists.firstName = response.data.firstName;
    formDataListsPrev.firstName = response.data.firstName;
    formDataLists.lastName = response.data.lastName;
    formDataListsPrev.lastName = response.data.lastName;
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
  }
};
onMounted(() => {
  getUser();
});

const getUserLinks = async () => {
  if (route.params.id == 'create') {
    return;
  }
  // userAuthStore.checkLogin()
  const config = {
    method: 'GET',
    url: 'api/user_links/user_link_lists/userlinks/' + route.params.userName,
    headers: {
      Authorization: `Bearer ${getToken('token')}`,
    },
  };
  try {
    $q.loading.show();
    const response = await api.request(config);
    $q.loading.hide();
    formDataLists.links = response.data.links.map(e => {
      const linkOption = validLinkOption.find(a => a.value == e.linkType)
      if (linkOption) {
        const n = {
          ...e,
          linkType: linkOption
        }
        return n
      } else {
        return e
      }
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
  }
};
onMounted(() => {
  getUserLinks();
});

// assign file to formDataLists.profilePicture
const createTempPic = (file) => {
  if (file && file instanceof File) {
    tempPictureUrl.value = URL.createObjectURL(file);
  } else {
    console.error('Invalid file input');
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
  if (formDataLists.firstName) {
    data.firstName = formDataLists.firstName;
  }
  if (formDataLists.lastName) {
    data.lastName = formDataLists.lastName;
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
  config.method = 'post';
  config.url = 'api/user/user_lists/' + formDataLists.id;
  try {
    const response = await api.request(config);
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
<style scoped>
.hover-effect-image-upload .image-overlap {
  background-color: black;
  opacity: 0;
}

.hover-effect-image-upload:hover .image-overlap {
  background-color: black;
  opacity: 0.4;
}
</style>
