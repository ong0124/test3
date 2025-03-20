<template>
    <header class="py-4 border-b bg-green-400 flex items-center">
      <div>
        <BackBtn />
      </div>
      <h1 class="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold capitalize">
        {{ $t('footer.myTrip') }}
      </h1>
    </header>
  
    <div class="pb-12">  
      <div class="pl-2 pt-4">
        <div
            v-for="index in notTraveled"
            :key="index.id"
            class="mb-4"
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
                  <NuxtLink :to="'/reschedulePage/details/' + index.id">{{ $t('forReschedule') }}/{{ $t('cancelOrder') }}</NuxtLink>
                </div>
            </div>
          </div>
        </div>
          <div v-if="index.trip_type === 'roundTrip'">
            <div class="flex p-4 bg-lime-50 rounded-lg">
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
      <div class="pl-2 pb-4">
        <div
            v-for="index in complete"
            :key="index.id"
            class=" mb-4 text-gray-500"
        >
        <div class="flex p-4 bg-white rounded-lg">
          <div class="flex text-normal pl-2 flex-1">
            <div class="flex flex-1">
                <div class=" flex flex-col">
                    <div class=" flex border-b-2 border-dashed border-gray-400 mb-2">
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
                    <p class="text-gray-400 ">{{ $t('bookingStatus.complete') }}</p>
                </div>
                <div class="flex justify-end pt-4 underline text-yellow-500 text-sm">
                  <nuxt-link :to="'/refund/' + index.id">{{ $t('applyRefund') }}</nuxt-link>
                </div>
            </div>
          </div>
        </div>
          <div v-if="index.trip_type === 'roundTrip'">
            <div class="flex p-4 bg-sky-50 rounded-lg text-gray-400">
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
              <div class="text-gray-500 ">
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
import { useRoute } from 'vue-router'
import dayjs from "dayjs";

const { t } = useI18n();
const route = useRoute();
const user_id = route.params.id;

const data = ref<BookingModel[]>([]);
const fetchData = async () => {
  try {
    const result = await $fetch(`/api/myTrip/${user_id}`);
    data.value = result.data as BookingModel[];
    console.log("最終的 data.value:", data.value);
    }catch (err) {
    console.error('Error fetching booking:', err);
    alert('Get blog detail error');
  }
};
const notTraveled = computed(() => data.value.filter(b => b.status === "notTraveled"));
const complete = computed(() => data.value.filter(b => b.status === "complete"));

const formatDate = (date: string | null) => {
    return date ? dayjs(date).format("YYYY-MM-DD") : "N/A";
};
onMounted(fetchData); 
</script>