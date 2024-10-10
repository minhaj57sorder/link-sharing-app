<template>
  <q-layout view="hhh Lpr lff" container style="height: 100vh" class="bg-white overflow-x-hidden">
    <q-header class="md:!bg-[#4a21fb] bg-[#fff] text-primary md:p-4 p-0">
      <q-toolbar class="bg-white md:rounded-md rounded-none">
        <div class="w-full flex justify-between">
          <div :class="[userAuthStore?.userData ? '' : 'hidden']">
            <q-btn :to="'/myprofile/' + userAuthStore.userData?.userName" outline no-caps>Back To Editor</q-btn>
          </div>
          <div :class="[userAuthStore?.userData ? 'hidden' : '']">
          </div>
          <div>
            <q-btn color="primary" no-caps @click="copyToClipboard">Share Link</q-btn>
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

import { useQuasar } from 'quasar';

import { useUserAuthStore } from '@/stores/userAuthStore.js';
import { onMounted } from 'vue';
const userAuthStore = useUserAuthStore();
onMounted(() => {
  userAuthStore.getUserDataFromSessionStorage()
})
const $q = useQuasar();
function copyToClipboard() {
  const text = location.href
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Text copied to clipboard!');
        $q.notify({
          message: "Link copied to clipboard",
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
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  } else {
    // Fallback if Clipboard API is not available
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';  // Prevent scrolling to bottom
    textarea.style.opacity = '0';       // Hide the textarea
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      console.log('Text copied to clipboard!');
      $q.notify({
        message: "Link copied to clipboard",
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
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
    document.body.removeChild(textarea);
  }
}
</script>
<style>
.q-item .q-item__section--avatar {
  min-width: 32px;
  padding-right: 0px;
}

.active-link {}
</style>
