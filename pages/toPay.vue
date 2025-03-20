<template>
    <header class="py-4 border-b bg-green-400 flex items-center">
      <div>
        <BackBtn />
      </div>
      <h1 class="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold capitalize">
        {{ $t('bookingStatus.toPay') }}
      </h1>
    </header>
  
    <div>
      <div class="text-red-600 text-sm flex bg-yellow-300 pl-4">
        {{ $t('bookingStatus.message1') }}
      </div>
  
      <div class="pl-2 pt-4 pb-4">
        <div
            v-for="index in 4"
            :key="index"
            class="bg-white p-4 rounded-lg flex mb-4"
        >
            <input
            type="checkbox"
            id="checkbox"
            class="h-6 w-3 border-black rounded-full"
            />
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
                &yen; &nbsp;30.00
            </p>
            </div>
        </div>
      </div>
    </div>
  </template>
  