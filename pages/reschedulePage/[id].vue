<template>
    <header class="py-4 border-b bg-green-400 flex items-center">
      <div>
        <BackBtn />
      </div>
      <h1 class="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold capitalize">
        {{ $t('ReschedulePage.selectRescheduleTrip') }}
      </h1>
    </header>
  
    <div class="pb-12">  
      <div class="pl-2 pt-4">
        <div
            v-for="index in data"
            :key="index.id"
            class="mb-4"
            @click="goToDetail(index.id)"
        >
        <div class="flex p-4 bg-white rounded-lg">
          <div class="flex text-normal pl-2 flex-1">
            <div class="flex flex-1">
                <div class=" flex flex-col">
                    <div class=" flex border-b-2 border-dashed border-green-200 mb-2">
                        <p>{{ t(index.departure_loc) }}</p>
                        <Icon
                        name="material-symbols-arrow-right-alt"
                        class="mx-2 w-6 h-6"
                        ></Icon>
                        <p>{{ t(index.destination_loc) }}</p>
                    </div>
                    <p class="text-sm">{{ $t('Booking.adultTicket') }} X {{index.adult_num}}</p>
                    <p class="text-sm">{{ $t('Booking.childTicket') }} X {{ index.child_num }}</p>
                  </div>
              </div>
            <div class="flex flex-col ">
              <div class="text-gray-500">
                  <p class="flex justify-end">{{ $t('Booking.shuttleBusTime') }}</p>
                  <div class="flex">
                    <p>
                      {{ formatDate(index.shuttle_date) }} 
                    </p>
                    <p class="pl-2">
                       {{ index.shuttle_time }}     
                    </p>
                  </div>
                </div>
                <div class="flex justify-end">
                    <p class="text-red-500 ">{{ $t('bookingStatus.notTraveled') }}</p>
                </div>
                <div class="flex justify-end pt-4 px-2 underline text-blue-500 text-sm">
                  <nuxt-link to="/reschedulePage">{{ $t('forReschedule') }}/{{ $t('cancelOrder') }}</nuxt-link>
                </div>
            </div>
          </div>
        </div>
          <div v-if="index.trip_type === 'roundTrip'">
            <div class="flex p-4 bg-amber-50 rounded-lg">
              <div class="flex text-normal pl-2 flex-1">
                <div class="flex flex-1">
                  <div class=" flex flex-col">
                    <div class="border-l-4 border-orange-300">
                      <p class="font-bold pl-2">{{ $t('Booking.return') }}</p>
                    </div>
                    <div class=" flex mb-2">
                        <p>{{ t(index.return_departure) }}</p>
                        <Icon
                        name="material-symbols-arrow-right-alt"
                        class="mx-2 w-6 h-6"
                        ></Icon>
                        <p>{{ t(index.return_destination) }}</p>
                    </div>
                   
                    
                  </div>
              </div>
            <div class="flex flex-col ">
              <div class="text-gray-500">
                        <p class="flex justify-end">{{ $t('Booking.shuttleBusTime') }}</p>
                        <div class="flex">
                          <p>
                            {{ formatDate(index.return_shuttle_date) }} 
                          </p>
                          <p class="pl-2">
                             {{ index.return_shuttle_time }}     
                          </p>
                        </div>
                      </div>
            </div>
          </div>
        </div>
          </div>
          
        </div>
      </div>
      </div>
      <div>
  </div>

    
  </template>
  

<script setup lang="ts">
import type { BookingModel } from '~/server/models/booking';
import { useRoute,useRouter } from 'vue-router'
import dayjs from "dayjs";

const { t } = useI18n();
const route = useRoute();
const router = useRouter();
const user_id = route.params.id;

const data = ref<BookingModel[]>([]);
const fetchData = async () => {
  try {
    const result = await $fetch(`/api/reschedulePage/${user_id}`);
    data.value = result.data as BookingModel[];
    console.log("最終的 data.value:", data.value);
    }catch (err) {
    console.error('Error fetching booking:', err);
    alert('Get blog detail error');
  }
};

const formatDate = (date: string | null) => {
    return date ? dayjs(date).format("YYYY-MM-DD") : "N/A";
};

const goToDetail = (id: number) => {
  router.push(`/reschedulePage/details/${id}`);
};
onMounted(fetchData); 
</script>