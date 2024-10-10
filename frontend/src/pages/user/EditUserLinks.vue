<template>
  <q-page padding>
    <div class="flex -m-1 ">
      <div class="md:w-2/5 w-full p-1 show-md-screen">
        <q-card class="bg-white" flat>
          <q-card-section>
            <div class="flex justify-center py-14">
              <div class="phone-view relative">
                <div class="absolute left-0 top-0 w-full h-full p-4 pl-3 pt-8 overflow-y-auto overflow-x-hidden">
                  <div class="  p-4">
                    <div class="">
                      <div class="flex justify-center mb-2">
                        <q-skeleton type="circle" animation="none" />
                      </div>
                      <div class="mb-2">
                        <q-skeleton type="QToolbar" animation="none" />
                      </div>
                      <div class="mb-2">
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
                      <div>
                        <q-skeleton type="QToolbar" animation="none" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="md:w-3/5 w-full p-1">

        <q-card class="bg-white mb-2" flat>
          <q-card-section>
            <div>
              <h6 class="text-h6">Customize your links</h6>
              <p class="text-p">Add/Edit/Remove your links and then share your all profiles with world!</p>
            </div>
            <div class="full-width mb-2">
              <q-btn class="full-width" label="Add Link +" color="primary" no-caps @click="addToLinkList" />
            </div>
            <!-- Custom Drag-and-Drop List -->
            <div v-if="formDataLists.links.length > 0" class="w-full">
              <div v-for="(item, index) in formDataLists.links" :key="index"
                class="flex justify-between items-center mb-3 draggable-item" draggable="true"
                @dragstart="handleDragStart(index)" @dragover.prevent @drop="handleDrop(index)">
                <div class=" w-full">
                  <!-- Drag Handle -->
                  <div class="flex justify-between mb-2">
                    <div>
                      <q-icon name="drag_indicator" class="drag-handle" />
                      Link#{{ index + 1 }}
                    </div>
                    <div><q-btn class="ml-1 bg-transparent text-primary" flat label="Remove" size="md" dense
                        @click="() => removeLink(index)" no-caps></q-btn></div>
                  </div>
                  <div>
                    <div class="mb-2">
                      <q-select label="Select a link type *" placeholder="Link type"
                        v-model="formDataLists.links[index].linkType" :options="validLinkOption" outlined dense />
                      <div v-if="newLinkFormErrors[index]?.linkType" class="text-red-8 text-xs q-pl-sm">
                        <span>{{ newLinkFormErrors[index]?.linkType }}</span>
                      </div>
                    </div>
                    <div>
                      <q-input label="Enter your valid link here" placeholder="Valid Link"
                        v-model="formDataLists.links[index].link" outlined dense />
                      <div v-if="newLinkFormErrors[index]?.link" class="text-red-8 text-xs q-pl-sm">
                        <span>{{ newLinkFormErrors[index]?.link }}</span>
                      </div>
                    </div>
                    <!-- <div>{{ item.linkType }}</div>
                    <div class="text-sm text-grey">{{ item.link }}</div> -->
                  </div>
                </div>
              </div>
            </div>

          </q-card-section>
        </q-card>

        <q-card class="bg-white" flat>
          <q-card-section class="flex justify-end">
            <q-btn label="Save" class="bg-primary text-white" @click="updateUserLinks" no-caps />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue';
import { api } from '@/boot/axios';
import { useRoute, useRouter } from 'vue-router';
import { getToken } from '@/utils/token';
import { useUserAuthStore } from '@/stores/userAuthStore.js';
import { useQuasar } from 'quasar';
const $q = useQuasar();
const userAuthStore = useUserAuthStore();
const route = useRoute();
const router = useRouter();
const newLinkFormErrors = ref([]);
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
  id: null,
});
const formDataListsPrev = reactive({
  links: [],
  user: null,
});

const addToLinkList = () => {
  const linkObj = {
    link: "",
    linkType: null,
  }
  formDataLists.links.push(linkObj)
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
    formDataLinks.value = response.data.links;
    formDataListsPrev.links = response.data.links;
    formDataLists.user = response.data.user;
    formDataLists.id = response.data._id;
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
  }
};
onMounted(() => {
  getUserLinks();
});

const validateLinkList = () => {
  newLinkFormErrors.value = []
  let hasError = false
  for (let index = 0; index < formDataLists.links.length; index++) {
    newLinkFormErrors.value.push({
    })
    const element = formDataLists.links[index];
    if (String(element.linkType?.value) == null || String(element.linkType?.value) == 'null') {
      newLinkFormErrors.value[index].linkType = "Please Select A Link Type"
      hasError = true
    }
    if (element.link == null || element.link == 'null' || String(element.link).trim() == '') {
      newLinkFormErrors.value[index].link = "Please Enter A Link"
      hasError = true
    }
    // console.log(element.linkType?.value)
    if (!checkValidLink(String(element.link), String(element.linkType?.value))) {
      newLinkFormErrors.value[index].link = "Link is not valid for " + String(element.linkType?.value)
      hasError = true
    }
  }
  console.log(formDataLists.links)
  return hasError
}
// update userLinks data
// content type form data
const updateUserLinks = async (e) => {
  // userAuthStore.checkLogin()
  e.preventDefault();
  formErrors.value = {};
  if (validateLinkList()) {
    return;
  }
  const data = {};
  if (formDataLists.links && formDataLists.links.length > 0) {
    console.log(JSON.stringify(formDataLists.links))
    data.links = JSON.stringify(formDataLists.links.map(e => {
      return {
        ...e,
        linkType: e.linkType.value
      }
    }));
  } else {
    formErrors.value = "Atleast One link is required."
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
  config.url = 'api/user_links/user_link_lists/' + formDataLists.id;
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
.drag-handle {
  cursor: grab;
}

.draggable-item {
  padding: 8px;
  border-radius: 4px;
  background-color: #f9f9f9;
  margin-bottom: 5px;
}

.draggable-item:hover {
  background-color: #ececec;
}
</style>