<template>
    <header class="py-4 border-b bg-green-400 flex items-center">
      <div>
        <BackBtn />
      </div>
      <h1 class="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold capitalize">
        {{ $t('bookingStatus.refunded') }}
      </h1>
    </header>
  
    <div>  
      <div class="pl-2 pt-4 pb-4">
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
                {{ $t('bookingStatus.refundedApproving') }}  NT$ &nbsp;30.00
            </p>
            </div>
        </div>
        <div
            v-for="index in 5"
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
            <p class="text-orange-500">
                {{ $t('bookingStatus.refundedtoUser') }}  NT$ &nbsp;30.00
            </p>
            </div>
        </div>
      </div>
    </div>
  </template>
  