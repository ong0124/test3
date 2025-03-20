<template>
      <header class="py-4 border-b bg-green-400 flex items-center">
      <div>
        <BackBtn />
      </div>
      <h1 class="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold capitalize">
        {{ $t('RefundPage.title') }}
      </h1>
    </header>

    <div class="px-6 pt-4 pb-4">
      <div class="bg-white p-4 rounded-lg flex flex-col mb-4">
        <div>
        <p class="font-bold text-lg">{{ $t('confirmationPage.tripInfo') }}</p>
        </div>
        <div class="flex border-b-2 py-2">
        <p>{{ formatDate(form.shuttle_date) }} </p>
        <p class="pl-4">{{ form.shuttle_time }}</p>
        <div class="flex ml-32">
          <p>{{ departure_loc }}</p>
          <Icon name="material-symbols-arrow-right-alt" class="mx-2 w-6 h-6"></Icon>
          <p>{{ destination_loc }}</p>
        </div>
      </div>
      <p>{{ $t('Booking.flightNumber') }} :  MF1544</p>
      <div class="flex py-2">
      <p >{{ $t('Booking.adultTicket') }} X {{ form.adult_num }}</p>
      <p class="mx-auto">{{ $t('Booking.childTicket') }} X {{ form.child_num }}</p>
      <p class="mx-auto">{{ $t('RefundPage.paid') }} : NT$ {{ $t('confirmationPage.amount') }}</p>
      </div>
      <div class="flex">
        <p>{{ $t('Booking.contact') }} ：</p>
        <p>{{ form.contact_name }}</p>
      </div>
      <div class="flex py-2">
        <label class="self-center pr-2">{{ $t('RefundPage.refundType') }} :</label>
        <select 
          v-model="refundType" 
          class="w-4/6 h-fit border rounded-lg px-3 py-2 focus:ring-green-500"
        >
          <option value="RefundType1">{{ $t('RefundPage.changeOfPlans') }}</option>
          <option value="RefundType2">{{ $t('RefundPage.tripCancellationOrAdjustment') }}</option>
          <option value="RefundType3">{{ $t('RefundPage.bookingError') }}</option>
          <option value="RefundType4">{{ $t('RefundPage.flightOrFerryIssue') }}</option>
          <option value="RefundType5">{{ $t('RefundPage.systemError') }}</option>
          <option value="RefundType6">{{ $t('RefundPage.other') }}</option>
        </select>
      </div>
    <label class="">{{ $t('RefundPage.refundReason') }} :</label>
    <textarea
      v-model="refundReason"
      placeholder=" "
      class="w-full border rounded-lg px-3 py-2 h-24"
    ></textarea>
    <div class="flex justify-end pt-6">
          <button @click="CreateRefund" class="bg-green-400 text-white w-1/6 py-2 rounded flex justify-center">{{ $t('RefundPage.applyRefund') }}</button>
    </div>
    </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { BookingModel } from "~/server/models/booking";
import dayjs from 'dayjs';
const route = useRoute();
const router = useRouter();

const id = route.params.id;
const { t } = useI18n();
const refundType = ref('');
const refundReason = ref('');

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
  shuttle_date: dayjs(),
  shuttle_time: '',
  return_shuttle_date: dayjs() , 
  return_shuttle_time: '', 
});  
const departure_loc = computed(() => t(form.departure_loc as string|| 'defaultKey'));
const destination_loc = computed(() => t(form.destination_loc as string|| 'defaultKey'));
const return_departure = computed(() => t(form.return_departure as string|| 'defaultKey'));
const return_destination = computed(() => t(form.return_destination as string|| 'defaultKey'));


const fetchData = async () => {
  try {
    const result = await $fetch(`/api/FindBookingDetailById/${id}`);
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


const formatDate = (date: dayjs.Dayjs | string | null) => {
  return date ? dayjs(date).format("YYYY-MM-DD") : "N/A";
};


const formRefund = reactive({
  booking_id: id,
  user_id: 7,
  get refund_type() { return refundType.value },
  get reason() { return refundReason.value }
})

console.log("checkRefundForm" + JSON.stringify(formRefund))
const CreateRefund = async () => {
  if (!refundType.value) {
    alert(t('alertMessage11'));
    return
  }
  try {
   await useFetch(`/api/PostRefund/${id}`, {
      method: 'POST',
      body: formRefund
    });
    console.log("check:" + JSON.stringify(formRefund))
    alert(t('alertMessage9'))
    router.push('/');
  } catch (error) {
    console.error('Refund request failed:', error);
    alert('Failed to apply for a refund. Please try again.');
  }
};
onMounted(fetchData); 
</script>