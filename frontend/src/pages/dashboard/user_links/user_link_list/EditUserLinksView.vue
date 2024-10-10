<template>
  <q-page padding>
    <div class="pb-6">
      <h6 class="text-h6">Create/Edit Links For User</h6>
    </div>
    <div class="flex -m-1 ">
      <div class="w-3/5 p-1">
        <q-card class="bg-grey-2 mb-2" flat bordered>
          <q-card-section>
            <div class="mb-6">
              <q-select label="Select a link type *" placeholder="Link type" v-model="newLinkType"
                :options="validLinkOption" outlined dense use-chips />
              <div v-if="newLinkFormErrors?.linkType" class="text-red-8 text-xs q-pl-sm">
                <span>{{ newLinkFormErrors?.linkType }}</span>
              </div>
            </div>
            <div class="mb-6">
              <q-input label="Enter your valid link here" placeholder="Valid Link" v-model="newLink" outlined dense />
              <div v-if="newLinkFormErrors?.link" class="text-red-8 text-xs q-pl-sm">
                <span>{{ newLinkFormErrors?.link }}</span>
              </div>
            </div>
            <q-btn :label="editLinkIndex == 'null' || editLinkIndex == null ? 'Add New Link' : 'Update Link'"
              color="orange" @click="addToLinkList" />
          </q-card-section>
        </q-card>
        <q-card class="bg-grey-2" flat bordered>
          <q-card-section>
            <div class="mb-6">
              <q-select label="Select an option for User *" placeholder="Value" v-model="formDataLists.user"
                :options="[...usersList]" outlined dense use-chips />
              <div v-if="formErrors?.user" class="text-red-8 text-xs q-pl-sm">
                <span>{{ formErrors?.user }}</span>
              </div>
            </div>
            <q-btn :label="$route.params.id === 'create'
              ? 'Create User links'
              : 'Update User links'
              " color="green" @click="updateUserLinks" />
          </q-card-section>
        </q-card>
      </div>
      <div class="w-2/5 p-1">

        <q-card class="bg-grey-2" flat bordered>
          <q-card-section>

            <!-- Custom Drag-and-Drop List -->
            <q-markup-table>
              <thead>
                <tr>
                  <th class="text-left">Type</th>
                  <th class="text-left">Link</th>
                  <th class="text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                <template v-if="formDataLists.links.length > 0" class="w-full">
                  <tr v-for="(item, index) in formDataLists.links" :key="index"
                    class="" draggable="true"
                    @dragstart="handleDragStart(index)" @dragover.prevent @drop="handleDrop(index)">
                    <td class="text-left">
                      <q-icon name="drag_indicator" class="drag-handle q-mr-sm" />
                      {{ item?.linkType }}
                    </td>
                    <td class="text-left">
                      <div class="w-[150px] overflow-hidden text-ellipsis">{{ item?.link }}</div>
                    </td>
                    <td class="text-right">
                      <q-btn icon="edit" size="sm" color="green" dense @click="() => editLink(index)"></q-btn>
                      <q-btn class="ml-1" icon="delete" size="sm" color="red" dense
                        @click="() => removeLink(index)"></q-btn>
                    </td>
                  </tr>
                </template>
              </tbody>
            </q-markup-table>
          </q-card-section>
        </q-card>
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
import Draggable from "vue3-draggable";
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
const newLinkFormErrors = ref({});
const formErrors = ref({});
const usersList = ref([]);
const itemsD = ref([
  {
    title: 'item1'
  },
  {
    title: 'item2'
  },
]);
const newLink = ref(null);
const newLinkType = ref(null);
const editLinkIndex = ref(null);
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

// Function to check if the link is valid for the specified platform
function checkValidLink(link, validateFor) {
  // Find the platform's validation rule based on the "validateFor" parameter
  const platform = validLinkOption.find(option => option.value === validateFor.toLowerCase());

  if (!platform) {
    // If the platform is not found, return false
    return false;
  }

  // Use the regex to test if the link matches the platform's domain pattern
  return platform.domain.test(link);
}
const formDataLinks = ref([])
const formDataLists = reactive({
  links: [],
  user: null,
});
const formDataListsPrev = reactive({
  links: [],
  user: null,
});

const addToLinkList = () => {
  newLinkFormErrors.value = {}
  console.log(newLinkType.value, newLink.value)
  if (newLinkType.value == null || newLinkType.value == 'null') {
    newLinkFormErrors.value.linkType = "Please Select A Link Type"
  }
  if (newLink.value == null || newLink.value == 'null' || String(newLink.value).trim() == '') {
    newLinkFormErrors.value.link = "Please Enter A Link"
  }
  if (Object.keys(newLinkFormErrors.value).length == 0 && !checkValidLink(newLink.value, newLinkType.value?.value)) {
    newLinkFormErrors.value.link = "Link is not valid for " + newLinkType.value.label
  }
  if (Object.keys(newLinkFormErrors.value).length !== 0) {
    return;
  }
  const linkObj = {
    link: String(newLink.value),
    linkType: String(newLinkType.value.value),
  }
  if (editLinkIndex.value == null || editLinkIndex.value == 'null') {
    const alreadyExistSame = formDataLists.links.some(e => e.linkType == linkObj.linkType)
    if (alreadyExistSame) {
      newLinkFormErrors.value.linkType = "Link Type Already Exist. Remove existing one or click edit."
      return;
    } else {
      formDataLists.links.push(linkObj)
    }
  } else {
    const list = JSON.parse(JSON.stringify(formDataLists.links))
    const linkOption = list.splice(editLinkIndex.value, 1, linkObj);
    formDataLists.links = list
  }
  editLinkIndex.value = null
  newLink.value = null
  newLinkType.value = null
}
const editLink = (index) => {
  editLinkIndex.value = index;
  const linkOption = formDataLists.links[index];
  newLink.value = linkOption.link
  const linkFromOption = validLinkOption.find(e => e.value == linkOption.linkType)
  newLinkType.value = {
    ...linkFromOption
  }
}
const removeLink = (index) => {
  const list = JSON.parse(JSON.stringify(formDataLists.links))
  const linkOption = list.splice(index, 1);
  formDataLists.links = list
}


let draggedItemIndex = null; // To track the index of the dragged item

// Handle the drag start event
const handleDragStart = (index) => {
  draggedItemIndex = index;
};

// Handle the drop event
const handleDrop = (dropIndex) => {
  if (draggedItemIndex !== null) {
    const draggedItem = formDataLists.links[draggedItemIndex];
    formDataLists.links.splice(draggedItemIndex, 1); // Remove the item from the original position
    formDataLists.links.splice(dropIndex, 0, draggedItem); // Insert the item at the new position
    draggedItemIndex = null; // Reset the dragged item index
  }
};

const getUserLinks = async () => {
  if (route.params.id == 'create') {
    getUsers()
    return;
  }
  // userAuthStore.checkLogin()
  const config = {
    method: 'GET',
    url: 'api/user_links/user_link_lists/' + route.params.id,
    headers: {
      Authorization: `Bearer ${getToken('token')}`,
    },
  };
  try {
    $q.loading.show();
    const response = await api.request(config);
    $q.loading.hide();
    formDataLists.links = response.data.links;
    formDataLinks.value = response.data.links;
    formDataListsPrev.links = response.data.links;
    formDataLists.user = response.data.user;
    formDataListsPrev.user = response.data.user;
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
    getUsers()
  }
};
onMounted(() => {
  getUserLinks();
});

const getUsers = async () => {
  // userAuthStore.checkLogin();
  const config = {
    method: 'GET',
    url: '/api/user/user_lists?pageNumber=1&pageSize=10000&descending=true&sortBy=createdAt&select=+userName+email',
    headers: {
      Authorization: `Bearer ${getToken('token')}`,
    },
  };
  try {
    $q.loading.show();
    const response = await api.request(config);
    $q.loading.hide();
    usersList.value = response.data.users.map((e) => {
      e.label = e.userName;
      e.value = e._id;
      if (formDataLists.user == e._id) {
        formDataLists.user = e
      }
      return e;
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
// update userLinks data
// content type form data
const updateUserLinks = async (e) => {
  // userAuthStore.checkLogin()
  e.preventDefault();
  formErrors.value = {};
  const data = {};
  if (formDataLists.links && formDataLists.links.length > 0) {
    data.links = JSON.stringify(formDataLists.links);
  } else {
    formErrors.value = "Atleast One link is required."
  }
  if (formDataLists.user?._id) {
    data.user = formDataLists.user._id
  } else {
    formErrors.value = "User is required. Select a user."
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
  if (route.params.id == 'create') {
    config.method = 'post';
    config.url = 'api/user_links/user_link_lists';
  } else {
    config.method = 'put';
    config.url = 'api/user_links/user_link_lists/' + route.params.id;
  }
  try {
    const response = await api.request(config);
    router.push('/admin/user_links/user_link_list');
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
.drag-handle {
  cursor: grab;
}

.draggable-item {
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 4px;
  background-color: #f9f9f9;
  margin-bottom: 5px;
}

.draggable-item:hover {
  background-color: #ececec;
}
</style>