<template>
  <HeaderNavigator />
    <div class="flex flex-col pb-16">
        <div class="shadow mt-6 mx-10 rounded-lg bg-gray-50">
            <div class="flex">
                <div :class="{ 'bg-green-300 rounded-tr-lg': activeTab === 2 }" class="flex-1 flex justify-center rounded-tr-lg">
                    <button @click="showContent(1)" :class="{ ' text-green-300 font-bold': activeTab === 1 }">{{ $t('HomePage.oneWay') }}</button>
                </div>
                <div :class="{ 'bg-green-300 rounded-tr-lg': activeTab === 1 }" class="flex-1 flex justify-center rounded-tr-lg">
                    <button @click="showContent(2)" :class="{ ' text-green-300 font-bold': activeTab === 2 }">{{ $t('HomePage.roundTrip') }}</button>
                </div>
            </div>
            <div v-if="activeTab === 1">
              <OneWayTicket/>
            </div>
            <div v-if="activeTab === 2">
                <RoundedWayTicket/>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { ref } from 'vue';
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';


export default defineComponent({
   
  setup() {
    const isChecked = ref(false); // 定義復選框狀態
    const activeTab = ref(1);
    const showContent = (tab: number) => {
      activeTab.value = tab;
    };

    // 打开通知
    const { t } = useI18n();
   
    return {
      t,
      activeTab,
      isChecked,
      showContent,
      };
  },
});
</script>
