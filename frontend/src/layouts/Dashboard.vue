<template>
  <q-layout view="hHh Lpr lff" container style="height: 100vh" class="shadow-2">
    <q-header class="bg-white text-primary" elevated="">
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
   
        <div class="w-full flex justify-between md:hidden">
          <div class="flex gap-1 items-center">
            <div>
              <q-btn to="/" flat icon="link" dense class="text-white bg-primary rounded-md">
              </q-btn>
            </div>
            <router-link  to="/" class="show-md-screen text-black font-bold text-h6">
              Devlinks
            </router-link>
          </div>
          <div>
            <q-btn :class="!($route.query?.t && $route.query?.t == 'profile-details') ? '!bg-violet-200' : ''"
              :to="'/myprofile/' + userAuthStore.userData?.userName" flat no-caps>
              <span class="hide-md-screen">
                <q-icon name="link" />
              </span>
              <span class="show-md-screen">
                Links
              </span>
            </q-btn>
            <q-btn :class="$route.query?.t && $route.query?.t == 'profile-details' ? '!bg-violet-200' : ''"
              :to="'/myprofile/' + userAuthStore.userData?.userName + '?t=profile-details'" flat no-caps>
              <span class="hide-md-screen">
                <q-icon name="account_circle" />
              </span>
              <span class="show-md-screen">
                Profile Details
              </span>
            </q-btn>
          </div>
          <div>
            <q-btn :to="'/profile/' + userAuthStore.userData?.userName" outline>
              <span class="hide-md-screen">
                <q-icon name="visibility" />
              </span>
              <span class="show-md-screen">
                Preview
              </span>
            </q-btn>
          </div>
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="!drawer || miniState"
      @click.capture="drawerClick"
      :width="265"
      :breakpoint="500"
      bordered
      :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
    >
      <q-scroll-area
        :horizontal-thumb-style="{ opacity: 0 }"
        style="
          height: calc(100% - 68px);
          margin-top: 68px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list :bordered="false">
          <template v-for="(menu, index) in menus" :key="index">
            <template v-if="checkMenuShowPermission(menu)">
              <div v-if="menu?.content" class="q-pa-none border-bottom-1">
                <span v-show="!miniState" style="padding-left: 18px">{{
                  menu.content
                }}</span>
              </div>
              <q-item
                v-if="!menu?.sub && !menu?.content"
                class="q-pa-none border-bottom-1"
              >
                <q-btn
                  :icon="menu.icon"
                  flat
                  :to="menu?.link || '#'"
                  class="full-width text-weight-bold"
                  align="left"
                  no-caps
                >
                  <span v-show="!miniState" style="padding-left: 8px">{{
                    menu.title
                  }}</span>
                </q-btn>
              </q-item>
              <q-expansion-item
                v-if="menu?.sub && !menu?.content"
                class="border-bottom-1 text-weight-bold"
                group="somegroup"
                expand-separator
                :icon="menu?.icon"
                :label="menu?.title"
              >
                <q-list :bordered="false" class="border-top-1">
                  <template
                    v-for="(sub, subIndex) in menu.sub"
                    :key="String(index) + String(subIndex)"
                  >
                    <template v-if="checkSubMenuShowPermission(sub)">
                      <q-item class="q-pa-none border-bottom-1">
                        <q-btn
                          flat
                          :to="sub?.link || '#'"
                          :label="sub?.title"
                          class="full-width text-weight-regular"
                          align="left"
                          no-caps
                          style="padding-left: 48px"
                        ></q-btn>
                      </q-item>
                    </template>
                  </template>
                </q-list>
              </q-expansion-item>
            </template>
          </template>
          <q-item
            class="q-pa-none border-bottom-1"
            v-if="userAuthStore?.userData"
          >
            <q-btn
              flat
              class="full-width text-weight-bold"
              align="left"
              no-caps
              icon="logout"
              @click="userAuthStore.signOut"
            >
              <span v-show="!miniState" style="padding-left: 8px"
                >Sign out</span
              >
            </q-btn>
          </q-item>
        </q-list>
      </q-scroll-area>
      <!--
            in this case, we use a button (can be anything)
            so that user can switch back
            to mini-mode
          -->
      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 68px"
      >
        <div class="absolute-bottom bg-transparent">
          <div class="flex justify-between items-center">
            <div v-show="!miniState">
              <div class="text-weight-bold">Menus</div>
              <div>Developed By Minhaj Sordar</div>
            </div>
            <div v-show="miniState">
              <q-btn
                dense
                round
                unelevated
                color="transparent"
                icon="keyboard_double_arrow_right"
                @click="miniState = true"
              />
            </div>
            <div class="q-mini-drawer-hide">
              <q-btn
                dense
                round
                unelevated
                color="transparent"
                icon="keyboard_double_arrow_left"
                @click="miniState = true"
              />
            </div>
          </div>
        </div>
      </q-img>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useUserAuthStore } from '@/stores/userAuthStore.js';
const userAuthStore = useUserAuthStore();
onMounted(()=>{
  userAuthStore.getUserDataFromSessionStorage()
})
const route = useRoute();
const miniState = ref(false);
const drawer = ref(true);
const menus = [
  {
    title: 'Dashboard',
    icon: 'user',
    link: '/admin',
    permissionSlug: 'viewDashboard',
  },
  {
    title: 'User',
    icon: 'person',
    sub: [
      {
        title: 'Create User',
        link: '/admin/user/user_list/create',
        permissionSlug: 'createUser',
      },      
      {
        title: 'User list',
        link: '/admin/user/user_list',
        permissionSlug: 'viewUser',
      },      
      {
        title: 'Create Role',
        link: '/admin/role/role_list/create',
        permissionSlug: 'createRole',
      },
      {
        title: 'Role list',
        link: '/admin/role/role_list',
        permissionSlug: 'viewRole',
      },
    ],
  },
  {
    title: 'User links',
    icon: 'link',
    sub: [
      {
        title: 'Create User link list',
        link: '/admin/user_links/user_link_list/create',
        permissionSlug: 'createUserLinks',
      },
      {
        title: 'User link list',
        link: '/admin/user_links/user_link_list',
        permissionSlug: 'viewUserLinks',
      },
    ],
  },
];
function drawerClick(e) {
  // console.log("clicked")
  // if in "mini" state and user
  // click on drawer, we switch it to "normal" mode
  if (miniState.value) {
    miniState.value = false;
    // notice we have registered an event with capture flag;
    // we need to stop further propagation as this click is
    // intended for switching drawer to "normal" mode only
    e.stopPropagation();
  }
}
function checkMenuShowPermission(menu) {
  let hasPermission = false;
  if (!menu.sub) {
    if (
      userAuthStore?.userData?.permissions?.includes(`${menu?.permissionSlug}`)
    )
      hasPermission = true;
  }
  if (menu.sub) {
    for (let i = 0; i < menu.sub.length; i++) {
      if (
        userAuthStore?.userData?.permissions?.includes(
          `${menu.sub[i]?.permissionSlug}`,
        )
      )
        hasPermission = true;
    }
  }
  return hasPermission;
}
function checkSubMenuShowPermission(sub) {
  let hasPermission = false;
  if (sub) {
    if (
      userAuthStore?.userData?.permissions?.includes(`${sub?.permissionSlug}`)
    )
      hasPermission = true;
  }
  return hasPermission;
}
onMounted(() => {
  userAuthStore.getUserDataFromSessionStorage();
});
</script>
<style>
.q-item .q-item__section--avatar {
  min-width: 32px;
  padding-right: 0px;
}
</style>
