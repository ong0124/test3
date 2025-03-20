<template>
    <header class="py-4 border-b bg-green-400 flex items-center">
      <div>
        <BackBtn />
      </div>
      <h1 class="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold capitalize">
        {{ $t('bookingStatus.notTraveled') }}
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
                <div class=" flex flex-col ">
                    <div class=" flex border-b-2 border-green-200 mb-2">
                        <p>{{ $t('bookingStatus.pier') }}</p>
                        <Icon
                        name="material-symbols-arrow-right-alt"
                        class="mx-2 w-6 h-6"
                        ></Icon>
                        <p>{{ $t('bookingStatus.airport') }}</p>
                    </div>
                    <p class="text-sm">{{ $t('bookingStatus.adultTicket') }}</p>
                    <p class="text-sm">{{ $t('bookingStatus.infantTicket') }}</p>
                </div>
                
            </div>
            <div class="flex flex-col ">
                <p class="text-gray-500">
                    {{ $t('bookingStatus.dateTime') }}
                </p>
                <div class="flex justify-end">
                    <p class="text-red-500 ">{{ $t('bookingStatus.notTraveled') }}</p>
                </div>
                <div class="flex justify-end pt-4 px-2 underline text-blue-500">
                  <nuxt-link to="/reschedulePage">{{ $t('forReschedule') }}</nuxt-link>
                </div>
            </div>
            </div>
        </div>
       
      </div>
    </div>
  </template>
  