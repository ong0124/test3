
<template>
    <footer class="border-t bg-white fixed inset-x-0 bottom-0">
        <div class="flex justify-between">
            <button
             v-for="page in pages"
             :key="page.name"
             @click="selectPage(page.name, page.route)"
             class="flex flex-col items-center mx-auto text-sm">
                <Icon
                :name="page.icon"
                class="h-5 w-5"
                :class="selectedPage === page.name ? 'text-green-500' : 'text-gray-400'"
                />
                <span
                :class="selectedPage === page.name ? 'text-green-500 font-bold' : 'text-gray-500'"
                >
                {{ $t(`footer.${page.name}`) }}
                </span>
            </button>
        </div>
    </footer>
</template>


<script setup lang="ts">
import { ref } from "vue";
const localPath = useLocalePath();
// 定義當前選中的導航按鈕
const selectedPage = ref("shuttle");
const user_id = ref();

import { useRouter } from 'vue-router';
const router = useRouter();
// 這裡可以是從後端獲取的 ID
import liff from '@line/liff';
import { LIFF_ID } from '@/utils/liff.config'; 

import { useUserStore } from "@/stores/user";
const userStore = useUserStore();


// 定義導航項目
const pages = [
  { name: "shuttle", icon: "material-symbols-directions-car", route: "/" },
  { name: "reschedule", icon: "jam-write", route: "/reschedulePage/" },
  { name: "myTrip", icon: "streamline-baggage", route: "/myTrip/" },
  { name: "profile", icon: "material-symbols-person-2-outline", route: "/profile/profile" },
];

const selectPage = async (pageName: string, route: string) => {
  selectedPage.value = pageName;

  if (pageName === "myTrip" || "reschedule"){
    let user_id = userStore.user_id;
    
    if(!user_id){
      await userStore.loginWithLINE();
    }

    
  }
  
  if (pageName === "myTrip" && user_id) {
    route = `/myTrip/${user_id}`;
  }


  if (pageName === "reschedule" && user_id) {
    route = `/reschedulePage/${user_id}`;
  }

  const selectedRoute = localPath(route);
  navigateTo(selectedRoute);
};

  // 如果 user_id 为空，则尝试通过 LINE 登录获取
  // if (!user_id) {
  //   try {
  //     if (import.meta.server) return;
      
  //     await liff.init({ liffId: LIFF_ID });

  //     if (!liff.isLoggedIn()) {
  //       //liff.login({ redirectUri: window.location.href });
  //       return;
  //     }

  //     const profile = await liff.getProfile();
  //     user_id = profile.userId;

  //     // 更新 Pinia Store
  //     userStore.$patch({
  //       user_id,
  //       user_name: profile.displayName,
  //       user_picture: profile.pictureUrl ?? null,
  //     });

  //     // 存储到 localStorage
  //     localStorage.setItem("user_id", user_id);
  //     localStorage.setItem("user_name", profile.displayName);
  //     localStorage.setItem("user_picture", profile.pictureUrl ?? "");
  //   } catch (error) {
  //     console.error("LINE 登录失败：", error);
  //     router.back();
  //     return;
  //   }
  // }
  

  // 如果是 'myTrip' 或 'reschedulePage'，拼接 user_id


</script>