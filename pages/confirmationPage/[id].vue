<template>
<div class="h-screen bg-gray-200"> 
    <div class="h-1/3 bg-gradient-to-b from-green-400 ">
    <header class="flex items-center py-4">
        <BackBtn/>
        <h1 class="absolute left-1/2 transform -translate-x-1/2 text-base font-bold capitalize text-white ">
            {{ $t('confirmationPage.title') }}
        </h1>
     </header>
    <div class="mx-3 pt-4 pb-8 rounded-lg bg-white">
        <div class="px-4">
            <div class="px-2">
                <p class="border-l-4 border-orange-400 pl-2">
                    {{ t('confirmationPage.tripInfo') }}
                </p>
                <p class="my-2">{{ formatDate(form.shuttle_date) }} {{ form.shuttle_time}}</p>
                <div class="flex justify-between">
                    <div class="flex ">
                        <p>{{ departure_loc }}</p>
                        <Icon name="material-symbols-arrow-right-alt" class="mx-2 w-6 h-6"></Icon>
                        <p>{{ destination_loc }}</p>
                    </div>
                    <div>
                        <p>{{ isSwapped ? $t('Booking.ferryTime') : $t('Booking.flightTime') }} : {{ isSwapped ?  form.ferry_time : form.flight_time }}</p>
                    </div>
                </div>
            </div>
           <DashLine/>  
           <div v-if="form.trip_type === 'roundTrip'">
            <div class="px-2">
                <p class="border-l-4 border-orange-400 pl-2">
                    {{ $t('confirmationPage.returnTripInfo') }}
                </p>
                <p class="my-2">{{ formatDate(form.return_shuttle_date) }} {{ form.return_shuttle_time }}</p>
                <div class="flex justify-between">
                    <div class="flex ">
                        <p>{{ return_departure }}</p>
                        <Icon name="material-symbols-arrow-right-alt" class="mx-2 w-6 h-6"></Icon>
                        <p>{{ return_destination }}</p>
                    </div>
                    <div>
                        <p>{{ isSwapped ? $t('Booking.flightTime') : $t('Booking.ferryTime') }} : {{ isSwapped ?  form.flight_time : form.ferry_time}}</p>
                    </div>
                </div>
            </div>
                <DashLine/>   
            </div>
                <div class="px-2">
                    <p>{{form.contact_phone}}</p>
                    <p>{{form.contact_name}}</p>
                    <div class="flex py-2">
                        <p class="border-l-4 border-orange-400 pl-2 flex-1">
                            {{ $t('confirmationPage.OrderTotal') }}
                        </p>
                        <a href="#" class="text-sm text-gray-600 ml-1">{{ $t('confirmationPage.refundPolicy') }}</a>
                        </div>
                     <div class="flex">
                     <p class="flex-1">{{ $t('confirmationPage.adultTicket') }} {{ form.adult_num }}</p>           
                     <p>NT$ &nbsp; {{ form.totalprice }}</p>
                        </div>
                    <div class="flex">
                    <p class="flex-1">{{ $t('confirmationPage.infantTicket') }} {{ form.child_num }}</p>
                    <p>NT$ &nbsp;0.00</p>
                    </div>
                </div>
           </div>
    </div>
    <div class="text-xs p-6 text-gray-700">
        <p>{{ $t('reminder.notice') }}</p>
        <p>{{ $t('reminder.tips1') }}</p>
        <p>{{ $t('reminder.tips2') }}</p>
        <p>{{ $t('reminder.tips3') }}</p>
        <p>{{ $t('reminder.tips4') }}</p>
        <p>{{ $t('reminder.tips5') }}</p>
    </div>

    <footer class="border-t bg-white fixed inset-x-0 bottom-6">
        <div class="py-6 mx-6 flex">
            <div class="flex flex-1">
                <p>{{ $t('confirmationPage.total') }} &nbsp;  &nbsp;</p>
                <p class="text-red-500">NT$ &nbsp;{{ form.totalprice }}</p>
            </div>
            <NuxtLink :to="localPath('/payment')" class="bg-red-500 text-white rounded px-2 py-1">{{ $t('confirmationPage.submitOrder') }}</NuxtLink>
        </div>
    </footer>
</div>
</div>
</template>

<script setup lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import dayjs from "dayjs";
import type { BookingModel } from '~/server/models/booking';
    const localPath = useLocalePath();
    const route = useRoute();
    const { t } = useI18n();
    const bookingId = route.params.id;

    const formatDate = (date: string | null) => {
    return date ? dayjs(date).format("YYYY-MM-DD") : "N/A";
    };
    const isSwapped = computed(() => route.query.isSwapped === 'true')
    
    // const tab = (route.query.tab || '未提供');
    // const adult = route.query.adult || '0';
    // const child = route.query.child || '0';
    // const totalPrice = route.query.totalPrice || '0';
    // const DateArrivalShip = route.query.DateArrivalShip || '未提供';
    // const DateShuttle = route.query.DateShuttle || '未提供';
    // const TimeArrivalShip = route.query.TimeArrivalShip || '未提供';
    // const TimeShuttle = route.query.TimeShuttle || '未提供';
    // const phone = route.query.phone || '未提供';
    // const contact = route.query.contact || '未提供';
    // const p2 = route.query.p2;
    // const p3 = route.query.p3;
    // const p4 =route.query.p4;
    // const p5 =route.query.p5;
    
    // const translatedp3 = computed(() => t(p3 as string|| 'defaultKey'));
    // const translatedp4 = computed(() => t(p4 as string|| 'defaultKey'));
    // const translatedp5 = computed(() => t(p5 as string|| 'defaultKey'));
    
    // const DateArrivalShipReturn = route.query.DateArrivalShipReturn || '未提供';
    // const DateShuttleReturn = route.query.DateShuttleReturn || '未提供';
    // const TimeArrivalShipReturn = route.query.TimeArrivalShipReturn || '未提供';
    // const TimeShuttleReturn = route.query.TimeShuttleReturn || '未提供';
    
    // const flightNumber = route.query.flightNumber || '未提供';
    // const flightTime = route.query.flightTime || '未提供';
    // const ferryTime = route.query.ferryTime || '未提供';
    // const flightTimeReturn = route.query.flightTimeReturn || '未提供';
    // const ferryTimeReturn = route.query.ferryTimeReturn || '未提供';
    
    //const data = ref<BookingModel[]>([]);
    const form = reactive({
        trip_type: '',
        user_id:'',
        adult_num: '',
        child_num: '',
        contact_phone: '',
        totalprice: '',
        contact_name: '',
        departure_loc: '',
        destination_loc: '',
        return_departure: '',
        return_destination: '',
        arrivalpoint_date: '', 
        arrivalpoint_time: '',
        flight_num: '',
        ferry_time: '',
        flight_time: '',
        shuttle_date: '',
        shuttle_time: '',
        return_shuttle_date: '' , 
        return_shuttle_time: '', 
    });  
    const departure_loc = computed(() => t(form.departure_loc as string|| 'defaultKey'));
    const destination_loc = computed(() => t(form.destination_loc as string|| 'defaultKey'));
    const return_departure = computed(() => t(form.return_departure as string|| 'defaultKey'));
    const return_destination = computed(() => t(form.return_destination as string|| 'defaultKey'));
 
const fetchData = async () => {
  try {
    const result = await $fetch(`/api/confirmationPage/${bookingId}`);
    const data = result.data as BookingModel;

      Object.assign(form, 
      {
        trip_type: data.trip_type,
        user_id: data.user_id,
        adult_num: data.adult_num,
        child_num: data.child_num,
        contact_phone: data.contact_phone,
        totalprice: data.totalprice,
        contact_name: data.contact_name,
        departure_loc: data.departure_loc,
        destination_loc: data.destination_loc,
        return_departure: data.return_departure,
        return_destination: data.return_destination,
        arrivalpoint_date: data.arrivalpoint_date, 
        arrivalpoint_time: data.arrivalpoint_time,
        flight_num: data.flight_num,
        ferry_time: data.ferry_time,
        flight_time: data.flight_time,
        shuttle_date: data.shuttle_date,
        shuttle_time: data.shuttle_time,
        return_shuttle_date: data.return_shuttle_date, 
        return_shuttle_time: data.return_shuttle_time, 
      }
    );
    console.log('form:', form); // 將 API 返回的數據賦值給 form
    }catch (err) {
    console.error('Error fetching booking:', err);
    alert('Get blog detail error');
  }
};

onMounted(fetchData); 
</script>
