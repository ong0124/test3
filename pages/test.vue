<template>
  <div v-for="booking in data2" class="relative w-full border rounded-lg p-5 mb-6" :key="booking.id">
      <p>{{ booking.contact_name }}</p>
  </div>
</template>


<script setup lang="ts">
import type { Users } from '~~/server/models/users';
import type { BookingModel } from '~~/server/models/booking';

const data2 = ref<BookingModel[]>([]);
const data = ref<Users[]>([]);

const fetchData = async () => {
  try {
    const result = await $fetch('/api/test');
    data.value = result.data as Users[];
  } catch {
    alert('Fetch error');
  }
};

const fetchData2 = async () => {
  try {
    const result = await $fetch('/api/GETbooking');
    data2.value = result.data as BookingModel[];
  } catch {
    alert('Fetch error');
  }
};

onMounted(fetchData2);
</script>
