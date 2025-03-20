<template>
    <div class=" bg-green-400">
        <div 
        @click="loginWithLINE"
        class="flex py-12 items-center">
            <div class="px-4 flex-none">
                <a-avatar 
                    :size="56" 
                    :src="user_picture || defaultAvatar" 
                    style="cursor: pointer;"
                >
                    <template #icon><UserOutlined /></template>
                </a-avatar>
            </div>
            <div class="flex flex-col flex-1">
                <p>{{  userStore.user_name || $t('profile.nickname') }}</p>
                <div class="flex">
                            <!-- <div class="flex-none">
                                <button class="flex items-center rounded-x-3xl rounded-l-3xl text-slate-50 text-sm bg-green-300 p-1 "
                                @click="navigateToEdit">
                                <img src="/assets/icons/EditProfile.png" alt="Edit" class="mr-1 w-4 h-4 "/>
                                    {{ $t('profile.editProfile') }}
                                </button>
                            </div> -->
                </div>
            </div>
        </div>
        <div class="bg-gray-100 rounded-t-3xl shadow h-screen">
            <div class="flex p-4 justify-between">
               <button
               v-for="status in BookingStatus"::key="status.name"
               @click="selectStatus(status.name,status.route)"
               class=" flex flex-col items-center mx-auto text-sm"
               >
                <img :src="status.icon" :alt="status.name" class="w-6 h-6"/>
                {{ $t(`bookingStatus.${status.name}`) }}
               </button>
            </div>

            <div class="flex flex-col p-1 bg-white rounded-lg mx-4">
                <div class="border-b flex p-2 items-center "
                    v-for="settings in ProfileSettings"::key="settings.name"
                    @click="selectStatus(settings.name,settings.route)"
                >
                    <div class="flex flex-1 ">
                        <div class="flex flex-1 text-sm ">
                            <img :src="settings.icon" :alt="settings.name" class="w-5 h-5 mr-2"/>
                            {{ $t('profileSettings.' + settings.name) }}
                        </div>
                        <img src="/assets/icons/GreaterThan.png" alt="More" class="w-4 h-4 "/>
                    </div>
                </div>
                <div>
                    <div class=" flex p-3 items-center  ">
                            <div class="flex flex-1 text-sm -400 justify-center">
                                <img src="/assets/icons/Logout.png" alt="Logout" class="w-5 h-5 mr-2"/>
                                <p>{{ $t('profile.logout') }}</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import ToPayIcon from '@/assets/icons/ToPay.png';
import NotTraveledIcon from '@/assets/icons/NotTraveled.png';
import RefundIcon from '@/assets/icons/Refund.png';
import PasswordIcon from '@/assets/icons/Password.png';
import SettingsIcon from '@/assets/icons/Settings.png';
import ContactIcon from '@/assets/icons/Contact.png';
import ReviewIcon from '@/assets/icons/Review.png';
import passengerIcon from '@/assets/icons/passengericon.png';
import orderIcon from '@/assets/icons/orderIcon.png';
import { defineProps } from 'vue';

import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
const defaultAvatar = 'https://example.com/default-avatar.jpg'; 
const user_picture = ref<string | null>(null); 
const localPath = useLocalePath();

// 定義導航項目
const BookingStatus = [
  { name: 'toPay', icon: ToPayIcon, route: '/toPay' },
  { name: 'notTraveled', icon: NotTraveledIcon, route: '/notTraveled' },
  { name: 'refunded', icon: RefundIcon, route: '/refunded' },
  { name: 'all', icon: orderIcon, route: '/allBookingStatus' },
];

const ProfileSettings = [
  { name: 'passenger', icon: passengerIcon, route: '/passengerPages' },
  { name: 'changePassword', icon: PasswordIcon, route: '/profile' },
//   { name: 'systemSettings', icon: SettingsIcon, route: '/profile' },
  { name: 'contactSupport', icon: ContactIcon, route: '/profile' },
  { name: 'feedback', icon: ReviewIcon, route: '/profile' },
];

// 切換選中的導航按鈕
const selectStatus = (statusName: string, route: string) => {
  navigateTo(route); // 使用 Nuxt 的 `navigateTo` 方法進行導航
};

const router = useRouter();

// const navigateToEdit = () => {
//     const path = localPath('/editProfile');
//     router.push(path);
// };

const loginWithLINE = async () => {
  userStore.loadUser(); // 先尝试从 localStorage 读取数据
  
  if (!userStore.user_id) { // 如果 localStorage 没有用户信息，则执行登录
    await userStore.loginWithLINE();
}
    if (userStore.user_id && userStore.user_name) {
        try {
        const response = await $fetch('/api/LoginCustomer/createUser', {
        method: 'POST',
        body: { 
            id: userStore.user_id, 
            full_name: userStore.user_name,

        }
        });
        if (response.success) {
            console.log('LINE 用户信息存入数据库成功');
        }
        } catch (error) {
        console.error('API 请求错误:', error);
        }
    }
};
</script>