<template>
  <header class="py-4 border-b bg-green-400 flex items-center">
    <div>
      <BackBtn />
    </div>
    <h1 class="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold capitalize">
      {{ $t('ReschedulePage.title') }}
    </h1>
  </header>

  <div class="text-red-600 text-sm flex bg-yellow-300 pl-4">
    {{ $t('ReschedulePage.message') }}
  </div>

  <div class="px-6 pt-4">
    <div class="bg-amber-50 p-4 rounded-lg flex flex-col border-b-2 border-dashed">
      <div class="font-bold">
        <p>{{ $t('ReschedulePage.originalSchedule') }}</p>
      </div>
      <div class="text-gray-500 ">
        <div class="flex">
              <div class="flex-1 self-center"><p class="text-end">{{ departure_loc }}</p></div>
              <div class="flex-1 flex-col text-center">
                <div class="border-b-2 border-dashed mx-4 border-green-400 text-sm">
                  <p>{{ formatDate(form.shuttle_date) }}</p>
                </div>
                <div class="text-sm">
                  <p>{{ form.shuttle_time }}</p>
                </div>
              </div>
              <div class="flex-1 self-center"><p>{{ destination_loc }}</p></div>
        </div>
          <div class="grid grid-cols-2 pt-4 ">
            <div class="flex-col text-end ">
              <p>{{ showFlightOrFerryTitle }} </p>
              <p>{{ $t('Booking.contact') }} </p>
              <p>{{ $t('Booking.phone') }} </p>
                <p>
                  {{ $t('Booking.adultTicket') }}
                </p>
                <p >
                  {{ $t('Booking.childTicket') }} 
                </p>
            </div>
            <div class="">
              <p>:  {{ showFlightOrFerry }}</p>
              <p>:  {{ form.contact_name }}</p>
              <p>: {{ form.contact_phone }}</p>
              <p>: {{ form.adult_num }}</p>
              <p>: {{ form.child_num }}</p>
            </div>
          </div>
      </div>
    </div>

    <div v-if="form.trip_type === 'roundTrip'">
      <div class="bg-amber-50 p-4 rounded-lg flex flex-col border-b-2 ">
        <div class="border-l-2 border-orange-400">
          <p class="mx-2">{{ $t('Booking.return') }}</p>
        </div>
        <div class="text-gray-500 ">
          <div class="flex">
                <div class="flex-1 self-center"><p class="text-end">{{ return_departure }}</p></div>
                <div class="flex-1 flex-col text-center">
                  <div class="border-b-2 border-dashed mx-4 border-green-400 text-sm">
                    <p>{{ formatDate(form.return_shuttle_date) }}</p>
                  </div>
                  <div class="text-sm">
                    <p>{{ form.return_shuttle_time }}</p>
                  </div>
                </div>
                <div class="flex-1 self-center"><p>{{ return_destination }}</p></div>
          </div>
            <div class="grid grid-cols-2 pt-4 ">
              <div class="flex-col text-end ">
                <p>{{ ReturnshowFlightOrFerryTitle }} </p>
                <p>{{ $t('Booking.contact') }} </p>
                <p>{{ $t('Booking.phone') }} </p>
                  <p>
                    {{ $t('Booking.adultTicket') }}
                  </p>
                  <p >
                    {{ $t('Booking.childTicket') }} 
                  </p>
              </div>
              <div class="">
                <p>:  {{ ReturnshowFlightOrFerry }}</p>
                <p>:  {{ form.contact_name }}</p>
                <p>: {{ form.contact_phone }}</p>
                <p>: {{ form.adult_num }}</p>
                <p>: {{ form.child_num }}</p>
              </div>
            </div>
        </div>
      </div>
    </div>
    
  </div>
      <div class="px-6 pb-4">
        <div class="bg-white pt-4 pr-4 pl-4 rounded-t-lg flex flex-col text-sm ">
      <div class="font-bold">
        <p>{{ $t('ReschedulePage.newSchedule') }}</p>
      </div>
      <div class="flex pt-4">
        <div class="flex font-normal">
          <p v-if="isSwapped" class="underline text-yellow-600">{{ destination_loc }}</p>
          <p v-else>{{ departure_loc }}</p>
  
          <Icon
            name="i-material-symbols:360"
            class="mx-4 bg-green-600 w-5 h-5 cursor-pointer"
            @click="swapText"
          />
  
          <p v-if="isSwapped" class="underline text-yellow-600">{{ departure_loc }}</p>
          <p v-else>{{ destination_loc }}</p>
        </div>
        
        <template v-if="form.trip_type === 'roundTrip'">
          <div class="flex pl-8 font-normal">
            <div class="font-bold">
            <p class="text-yellow-600 mr-2">{{ $t('Booking.return') }} :</p>
            </div>
            <p v-if="isSwapped" class="underline text-yellow-600">{{ return_destination }}</p>
            <p v-else>{{ return_departure }}</p>
    
            <Icon
              name="i-material-symbols:360"
              class="mx-4 bg-green-600 w-5 h-5 cursor-pointer"
              @click="swapText"
            />
    
            <p v-if="isSwapped" class="underline text-yellow-600">{{ return_departure }}</p>
            <p v-else>{{ return_destination }}</p>
          </div>
        </template>
      </div>
      
      <div class="font-bold pt-2 text-yellow-600">
        <p>{{ $t('ReschedulePage.departureTime') }}</p>
      </div>
      <a-config-provider :locale="antLocale">
        <div class="flex space-x-4">
          <a-space direction="vertical" :size="12">
            <a-date-picker 
            :show-today="false"
            :disabled-date="disabledDate"
            v-model:value="shuttle_date"
            />
          </a-space>
          <a-time-picker
          :minute-step="isSwapped ? 5 : 30"
          value-format="HH:mm"
          format="HH:mm"
          :disabled-hours="disabledHours"
          :disabled-minutes="disabledMinutes"
          :hide-disabled-options="true" 
          :show-now="false"
          v-model:value="shuttle_time"    
          ></a-time-picker>
        </div>
      </a-config-provider>
      
      <template v-if="form.trip_type === 'roundTrip'">
        <div class="font-bold pt-2 text-yellow-600">
        <p>{{ $t('ReschedulePage.returnDepartureTime') }}</p>
      </div>
      <a-config-provider :locale="antLocale">
        <div class="flex space-x-4">
          <a-space direction="vertical" :size="12">
            <a-date-picker 
            :show-today="false"
            :disabled-date="disabledDate"
            v-model:value="Return_shuttle_date"
            />
          </a-space>
          <a-time-picker
          :minute-step="isSwapped ? 5 : 30"
          value-format="HH:mm"
          format="HH:mm"
          :disabled-hours="disabledHours"
          :disabled-minutes="disabledMinutes"
          :hide-disabled-options="true" 
          :show-now="false"
          v-model:value="Return_shuttle_time"    
          ></a-time-picker>
        </div>
      </a-config-provider>
      </template>
      <div class="flex">
        <div class="flex  py-2">
          <div class="flex items-center">
            <div class="flex items-center pr-4">
              <Icon name="lucide:tickets" class="bg-yellow-600 w-6 h-6" />
              <p class="text-yellow-600">
                {{ isSwapped ? $t('Booking.ferryTime') : $t('Booking.flightTime') }}
              </p>
            </div>
            <div>
              <template v-if="isSwapped">
                <a-config-provider :locale="antLocale">
                  <a-time-picker
                    v-model:value="ferry_time"
                    :minute-step="30"
                    value-format="HH:mm"
                    format="HH:mm"
                    :hide-disabled-options="true"
                    :show-now="false"
                    :disabled-hours="disabledHoursF"
                    :disabled-minutes="disabledMinutesF"
                  ></a-time-picker>
                </a-config-provider>
              </template>
              <template v-else>
                <a-config-provider :locale="antLocale">
                  <a-time-picker
                    :minute-step="5"
                    value-format="HH:mm"
                    format="HH:mm"
                    :hide-disabled-options="true"
                    :show-now="false"
                    :disabled-hours="disabledHoursF"
                    :disabled-minutes="disabledMinutesF"
                    v-model:value="flight_time"
                  ></a-time-picker>
                </a-config-provider>
              </template>
            </div>
          </div>
        </div>

        <template v-if="form.trip_type === 'roundTrip'">
          <div class="flex py-2 px-6">
          <div class="flex items-center">
            <p class="text-yellow-600 mr-2">{{ $t('Booking.return') }} :</p>
            <div class="flex items-center pr-4">
              <Icon name="lucide:tickets" class="bg-yellow-600 w-6 h-6" />
              <p class="text-yellow-600">
                {{ isSwapped ? $t('Booking.flightTime') : $t('Booking.ferryTime') }}
              </p>
            </div>
            <div>
              <template v-if="isSwapped">
                <a-config-provider :locale="antLocale">
                  <a-time-picker
                  :minute-step="5"
                  value-format="HH:mm"
                  format="HH:mm"
                  :hide-disabled-options="true"
                  :show-now="false"
                  :disabled-hours="disabledHoursF"
                  :disabled-minutes="disabledMinutesF"
                  v-model:value="flight_time"
                  ></a-time-picker>
                </a-config-provider>
              </template>
              <template v-else>
                <a-config-provider :locale="antLocale">
                  <a-time-picker
                    v-model:value="ferry_time"
                    :minute-step="30"
                    value-format="HH:mm"
                    format="HH:mm"
                    :hide-disabled-options="true"
                    :show-now="false"
                    :disabled-hours="disabledHoursF"
                    :disabled-minutes="disabledMinutesF"
                  ></a-time-picker>
                </a-config-provider>
              </template>
            </div>
          </div>
        </div>
        </template>
      </div>
                
      <!-- <div class="font-bold pt-2 text-yellow-600">
        <p>{{ $t('ReschedulePage.passengerCount') }}</p>
      </div>
        <div class="flex items-center ">
          <p class="pr-24 ">{{ $t('Booking.adultTicket') }}</p>
          <div class="flex items-center space-x-2">
            <button @click="decrement('adult')">
              <Icon name="i-mdi-minus-circle-outline"/>
            </button>
            <p class="px-2 text-sm text-yellow-600">{{ counts.adult }}</p>
            <button @click="increment('adult')">
              <Icon name="i-material-symbols-add-circle-outline"/>
            </button>
          </div>
        </div>
        <div class="flex items-center pt-2">
          <p class="pr-10">{{ $t('Booking.childTicket') }}</p>
          <div class="flex items-center space-x-2">
            <button @click="decrement('child')">
              <Icon name="i-mdi-minus-circle-outline"/>
            </button>
            <p class="px-2 text-sm text-yellow-600">{{ counts.child }}</p>
            <button @click="increment('child')">
              <Icon name="i-material-symbols-add-circle-outline"/>
            </button>
          </div>
        </div> -->


        <div class="flex-col">
          <div class="flex pt-2">
                <p class="flex-none pr-6">{{ $t('Booking.contact') }}</p>
                <input
                  type="text"
                  :placeholder="form.contact_name"
                  v-model="contact"
                  class="flex-1 px-4 border-b-2 border-gray-600 bg-inherit focus:outline-none text-sm min-w-0"/>
              </div>

              <div class="flex py-4 content-center">
                <p class="flex-none pr-2">{{ $t('Booking.phone') }}</p>
                <input
                  type="text"
                  :placeholder="form.contact_phone"
                  v-model="phone"
                  class="flex-1 px-4 border-b-2 border-gray-600 bg-inherit focus:outline-none text-sm min-w-0"/>
              </div>
        </div>
        <!-- 票价 -->
        <!-- <div class="flex items-center pt-3">
          <p class="pr-28"> {{ $t('ReschedulePage.amountDue') }}</p>
          <p class="text-red-500"> NT$ {{ totalPriceFinal }}.00</p>
        </div> -->
         
      </div>
      <div class="flex bg-white pt-6 rounded-b-lg mb-12">
        <div class="flex-1 border-r-2 border-t-2 rounded flex justify-center">
          <button @click="onSubmit"
             class=" text-blue-400 py-2 rounded ">{{ $t('ReschedulePage.confirmReschedule') }}</button>
        </div>
        <div class="flex-1 border-t-2 rounded flex justify-center">
          <button @click="() => onDelete(id)"
            class=" text-red-500 py-2 rounded ">{{ $t('cancelOrder') }}</button>
        </div>
      </div>

  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/zh-tw';
import 'dayjs/locale/en';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import zhTW from 'ant-design-vue/es/locale/zh_TW';
import enUS from 'ant-design-vue/es/locale/en_US';
import type { BookingModel } from '~/server/models/booking';
import { FormItemRest } from 'ant-design-vue';

    const route = useRoute();
    const router = useRouter();
    const { t } = useI18n();
    const id = route.params.id;
   // const pricePerTicket = ref(150);
    const phone = ref(''); // 聯繫電話
    const contact = ref('');
    const shuttle_date = ref<Dayjs>();  
    const shuttle_time = ref<string>('')
    const Return_shuttle_date = ref<Dayjs>();  
    const Return_shuttle_time = ref<string>('')
    const ferry_time = ref<string>('');
    const flight_time = ref<string>('')
    const totalPriceNow = computed(() => {
      // return counts.adult  * pricePerTicket.value;
      const adultCount = counts.value.adult;
      // 计算前两个成人票价为 150，后续成人票价为 100
      return (Math.min(adultCount, 2) * 150) + Math.max(adultCount - 2, 0) * 100;
    });
    
    const totalPriceFinal = computed(() => {
      return totalPriceNow.value -Number(form.totalprice);
    });
    
    const { locale } = useI18n();
    const isSwapped = ref(false);
    const swapText = () => {
      isSwapped.value = !isSwapped.value;
    };
    const flightNumber = ref('');
    const ferryTime = ref<string >('');
    const antLocales = {
      'zh-CN': zhCN,
      'zh-TW': zhTW,
      'en-US': enUS,
    };
    
    const antLocale = computed(() => antLocales[locale.value] || zhTW);
    const disabledDate = (current: Dayjs): boolean => {
      return current && current.isBefore(dayjs().add(1, 'day').startOf('day'))
    };
    
    const disabledHours = () => {
      // 只允许 8 到 17 点
      return Array.from({ length: 24 }, (_, i) => i).filter(hour => hour < 8 || hour > 18);
    };
    
    const disabledMinutes = (selectedHour: number | null) => {
      if (selectedHour === 8) {
        return Array.from({ length: 60 }, (_, i) => i).filter(minute => minute < 30); // 8:30 之前禁用
      }
      if (selectedHour === 18) {
        return Array.from({ length: 60 }, (_, i) => i).filter(minute => minute >= 1); // 17:30 之后禁用
      }
      return [];
    };
    
    const disabledHoursF = () => {
      // 只允许 8 到 17 点
      const ferryTimeHour = dayjs(ferryTime.value, 'HH:mm').hour();
      return Array.from({ length: 24 }, (_, i) => i).filter(hour => hour < ferryTimeHour || hour > 18);
    };
    
    const disabledMinutesF = (selectedHour: number | null) => {
      const ferryTimeMinute = dayjs(ferryTime.value, 'HH:mm').minute();
      if (selectedHour === 8) {
        return Array.from({ length: 60 }, (_, i) => i).filter(minute => minute < 30); // 8:30 之前禁用
      }
      if (selectedHour === 19) {
        return Array.from({ length: 60 }, (_, i) => i).filter(minute => minute >= 1); // 17:30 之后禁用
      }
      return Array.from({ length: 60 }, (_, i) => i)
      .filter(minute => minute < ferryTimeMinute);
    };
    
    
    const swappedDeparture = computed(() =>
    isSwapped.value ? form.destination_loc : form.departure_loc
    );
    const swappedDestination = computed(() =>
    isSwapped.value ? form.departure_loc : form.destination_loc
    );
    const swappedReturnDeparture = computed(() =>
    isSwapped.value ? form.return_destination : form.return_departure
    );
    const swappedReturnDestination = computed(() =>
    isSwapped.value ? form.return_departure : form.return_destination
    );

  const onDelete = async (id: string | string[]) => {
    try {
      await $fetch('/api/DeleteBookingById/' + id, {
        method: 'DELETE'
      });
      
      alert(t('alertMessage5'))
      router.push('/'); 
    } catch {
      alert(t('alertMessage6'));
    }
  };

const onSubmit = async () => {
  try {
    const body={
    departure_loc: swappedDeparture.value,
    destination_loc: swappedDestination.value,
    return_departure: swappedReturnDeparture.value,
    return_destination: swappedReturnDestination.value,
    shuttle_date: shuttle_date.value ? shuttle_date.value.format("YYYY-MM-DD") : form.shuttle_date,
    shuttle_time: shuttle_time.value || form.shuttle_time,
    return_shuttle_date: Return_shuttle_date.value ? Return_shuttle_date.value.format("YYYY-MM-DD") : form.return_shuttle_date, 
    return_shuttle_time: Return_shuttle_time.value ||form.return_shuttle_time, 
    ferry_time:ferry_time.value || form.ferry_time,
    flight_time:flight_time.value || form.flight_time,
    adult_num: counts.value.adult || form.adult_num,
    child_num:counts.value.child ||form.child_num,
    contact_phone: phone.value ||form.contact_phone,
    contact_name: contact.value || form.contact_name,
    totalprice: totalPriceNow.value || form.totalprice
  };
  await $fetch('/api/detailsUpdate/' + id, {
    method: 'PUT',
    body
  }
);
alert(t('alertMessage7'))
router.push('/');
} catch(error) {
    console.error("Update failed:", error);
    alert(t('alertMessage8'));
  }
};

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
    const result = await $fetch(`/api/reschedulePage/details/${id}`);
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
  counts.value.adult = Number(form.adult_num) || 0;
  counts.value.child = Number(form.child_num) || 0;
  console.log('form:', form); // 將 API 返回的數據賦值給 form
}catch (err) {
  console.error('Error fetching booking:', err);
  alert('Get blog detail error');
}
};

const counts = ref({
  adult: 0,
  child: 0
});

const formatDate = (date: dayjs.Dayjs | string | null) => {
  return date ? dayjs(date).format("YYYY-MM-DD") : "N/A";
};

const showFlightOrFerry = computed(()=>
form.departure_loc === "Booking.pier" ? form.flight_time : form.ferry_time
);

const showFlightOrFerryTitle = computed(()=>
form.departure_loc === "Booking.pier" ? t('Booking.flightTime') : t('Booking.ferryTime')
);

  const ReturnshowFlightOrFerry = computed(()=>
  form.return_departure === "Booking.pier" ? form.flight_time : form.ferry_time
  );

  const ReturnshowFlightOrFerryTitle = computed(()=>
  form.return_departure === "Booking.pier" ? t('Booking.flightTime') : t('Booking.ferryTime')
  );

  const increment = (type: "adult" | "child") => {
  if (type === "child") {
    counts.value.child += 1;
  } else if (type === "adult") {
    counts.value.adult += 1;
  }
};

const decrement = (type: "adult" | "child") => {
  if (type === "child") {
    counts.value.child -= 1;
  } else if (type === "adult") {
    counts.value.adult -= 1;
  }
};

onMounted(fetchData); 
</script>
