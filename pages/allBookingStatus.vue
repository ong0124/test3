<template>
  <header class="py-4 border-b bg-green-400 flex items-center">
    <div>
      <BackBtn />
    </div>
    <h1 class="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold capitalize">
      {{ $t('bookingStatus.all') }}
    </h1>
  </header>
  <div>
    <nuxt-link to="/toPay">
      <div class="pl-2 pt-4">
        <div
          v-for="index in 2"
          :key="index"
          class="bg-white p-4 rounded-lg flex mb-4"
        >
          <div class="flex text-normal pl-2 flex-1">
            <div class="flex flex-1">
              <p>{{ $t('bookingStatus.pier') }}</p>
              <Icon
                name="material-symbols-arrow-right-alt"
                class="mx-2 w-6 h-6"
              ></Icon>
              <p>{{ $t('bookingStatus.airport') }}</p>
            </div>
            <p class="text-red-500">
              {{ $t('bookingStatus.toPay') }}
            </p>
          </div>
        </div>
      </div>
    </nuxt-link>

    <nuxt-link to="/notTraveled">
      <div class="pl-2">
        <div
          v-for="index in 2"
          :key="index"
          class="bg-white p-4 rounded-lg flex mb-4"
        >
          <div class="flex text-normal pl-2 flex-1">
            <div class="flex flex-1">
              <div class="flex flex-col">
                <div class="flex border-b-2 border-green-200 mb-2">
                  <p>{{ $t('bookingStatus.airport') }}</p>
                  <Icon
                    name="material-symbols-arrow-right-alt"
                    class="mx-2 w-6 h-6"
                  ></Icon>
                  <p>{{ $t('bookingStatus.pier') }}</p>
                </div>
                <p class="text-sm">
                  {{ $t('bookingStatus.adultTicket') }}
                </p>
                <p class="text-sm">
                  {{ $t('bookingStatus.infantTicket') }}
                </p>
                <p class="text-gray-500">
                  {{ $t('bookingStatus.dateTime') }}
                </p>
              </div>
            </div>
            <div class="flex flex-col justify-center">
              <p class="text-red-500">
                {{ $t('bookingStatus.notTraveled') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </nuxt-link>

    <nuxt-link to="/refundApply">
      <div class="pl-2">
        <div class="bg-white p-4 rounded-lg flex mb-4">
          <div class="flex text-normal pl-2 flex-1">
            <div class="flex flex-1">
              <p>{{ $t('bookingStatus.pier') }}</p>
              <Icon
              name="material-symbols-arrow-right-alt"
              class="mx-2 w-6 h-6"
              ></Icon>
              <p>{{ $t('bookingStatus.airport') }}</p>
            </div>
            <p class="text-orange-400">
              {{ $t('bookingStatus.refundedApproving') }}  NT$ &nbsp;30.00
            </p>
          </div>
        </div>
        <div
        v-for="index in 2"
        :key="index"
        class="bg-white p-4 rounded-lg flex mb-4"
        >
        <div class="flex text-normal pl-2 flex-1">
          <div class="flex flex-1">
            <p>{{ $t('bookingStatus.pier') }}</p>
            <Icon
            name="material-symbols-arrow-right-alt"
            class="mx-2 w-6 h-6"
            ></Icon>
            <p>{{ $t('bookingStatus.airport') }}</p>
          </div>
          <p class="text-green-500">
            {{ $t('bookingStatus.refundedtoUser') }}  NT$ &nbsp;30.00
          </p>
        </div>
      </div>
    </div>
  </nuxt-link>
  <nuxt-link to="/orderDetail">
    <div class="pl-2 pb-16">
      <div
          v-for="index in 5"
          :key="index"
          class="bg-white p-4 rounded-lg flex mb-4 text-gray-500"
      >
          <div class="flex text-normal pl-2 flex-1">
          <div class="flex flex-1">
              <p>{{ $t('bookingStatus.pier') }}</p>
              <Icon
              name="material-symbols-arrow-right-alt"
              class="mx-2 w-6 h-6"
              ></Icon>
              <p>{{ $t('bookingStatus.airport') }}</p>
          </div>
          <p class="text-gray-500">
              {{ $t('bookingStatus.complete') }}
          </p>
          </div>
      </div>
    </div>
  </nuxt-link>
  </div>
</template>
