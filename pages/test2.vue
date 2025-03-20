<template>
  <div>
    <div v-if="userStore.user_id">
      <p>歡迎，{{ userStore.user_name }}</p>
      <img :src="userStore.user_picture" class="w-16 h-16 rounded-full" />
      <button @click="userStore.logout()" class="bg-red-500 text-white px-4 py-2 rounded">
        登出
      </button>
    </div>
    <div v-else>
      <button @click="userStore.loginWithLINE()" class="bg-green-500 text-white px-4 py-2 rounded">
        使用 LINE 登入
      </button>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
userStore.loadUser(); // 頁面刷新時自動載入登入狀態
</script>
