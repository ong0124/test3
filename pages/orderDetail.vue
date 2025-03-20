<template>
      <header class="py-4 border-b bg-green-400 flex items-center">
      <div>
        <BackBtn />
      </div>
      <h1 class="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold capitalize">
        {{ $t('orderDetail.title') }}
      </h1>
      </header>

      <div class="px-6 pt-4">
        <div class="bg-white p-4 rounded-lg flex flex-col border-b-2">
          <div class="flex ">
            <div class="flex-1 self-center"><p class="text-end">{{ $t('bookingStatus.pier') }}</p></div>
            <div class="flex-1 flex-col text-center">
              <div class="border-b-2 border-dashed mx-4 border-green-400 text-sm">
                <p>{{ $t('orderDetail.date') }}</p>
              </div>
              <div class="text-sm">
                <p>{{ $t('orderDetail.time') }}</p>
              </div>
            </div>
            <div class="flex-1 self-center"><p>{{ $t('bookingStatus.airport') }}</p></div>
          </div>
        </div>
      </div>
      <div class="px-6">
        <div class="bg-white p-4 rounded-lg flex flex-col text-sm border-b-2">
          <div>
            <p>{{ $t('Booking.contact') }} :  XXX</p>
          </div>
          <div>
            <p>{{ $t('Booking.phone') }} :  183XXXXXX</p>
          </div>
          <div class="pt-4 pl-2 flex-col">
            <p class="font-bold">{{ $t('PassengerPage.passengers') }}</p>
            <div class="flex">
              <div class="flex-col">
                <p>{{ $t('orderDetail.name') }}</p>
                <p>{{ $t('orderDetail.nationality') }}</p>
                <p>{{ $t('PassengerPage.IdNumber') }}</p>
              </div>
              <div class="flex-col px-4">
                <p>X先生</p>
                <p>{{ $t('PassengerPage.local') }}</p>
                <p>6786XXXXX</p>
              </div>
            </div>
          </div>
          <div class="pt-4 pl-2 flex-col">
            <p class="font-bold">{{ $t('PassengerPage.passengers') }}2</p>
            <div class="flex">
              <div class="flex-col">
                <p>{{ $t('orderDetail.name') }}</p>
                <p>{{ $t('orderDetail.nationality') }}</p>
                <p>{{ $t('PassengerPage.IdNumber') }}</p>
              </div>
              <div class="flex-col px-4">
                <p>X先生</p>
                <p>{{ $t('PassengerPage.local') }}</p>
                <p>6786XXXXX</p>
              </div>
            </div>
          </div>
          <div class="flex pt-2">
              <p>{{ $t('orderDetail.status') }} : {{ $t('orderDetail.ticketIssued') }}</p>
          </div>
        </div>
      </div>
      <div class="px-6 pb-4">
        <div class="bg-white p-4 rounded-lg flex flex-col mb-4 text-sm ">
          <p> {{ $t('orderDetail.orderNumber') }} : 2025020100001</p>
          <p> {{ $t('orderDetail.orderStatus') }} : {{ $t('orderDetail.paid') }}</p>
          <p> {{ $t('orderDetail.orderDate') }} : {{ $t('confirmationPage.dateTime') }}</p>
          <div class="flex justify-end pt-4 px-2 underline text-yellow-500">
               <nuxt-link to="/refundApply" class="text-xs">{{ $t('applyRefund') }} ---></nuxt-link>
          </div>
        </div>
      </div>
</template>