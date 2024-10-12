<template>
  <q-layout view="hHh Lpr lff" container style="height: 100vh" class="bg-grey-3">
    <q-header class="bg-white text-primary">
      <q-toolbar>
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
            <q-btn class="mr-2" v-if="userAuthStore.userData?.roles.some(e=>e.slug=='superAdmin')" :to="'/admin'" outline>
              <span class="hide-md-screen">
                <q-icon name="admin_panel_settings" />
              </span>
              <span class="show-md-screen">
                Admin
              </span>
            </q-btn>
            
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
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script setup>
import { onMounted } from 'vue';
import { useUserAuthStore } from '@/stores/userAuthStore';
const userAuthStore = useUserAuthStore();
onMounted(()=>{
  userAuthStore.getUserDataFromSessionStorage()
})
</script>
<style>
.q-item .q-item__section--avatar {
  min-width: 32px;
  padding-right: 0px;
}

.active-link {}

</style>
