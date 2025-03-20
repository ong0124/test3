<template>
  <header class="py-4 border-b bg-green-400 flex items-center ">
    <div>
        <BackBtn/>
      </div>
      <h1 class="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold capitalize ">
        {{ $t('boardingpointPage.title') }}
      </h1>
  </header>
  <p class="text-center text-lg pt-2">
    {{ $t('boardingpointPage.information') }}
  </p>
  <img src="/assets/images/boardingpoint.png" alt="boardingpointpng" class="rounded-lg pl-4 pr-4 pb-4"></img>
  <p class="text-center text-lg">
    {{ $t('boardingpointPage.flowchart') }}
  </p>
  <img src="/assets/images/flowchat.png" alt="flowchartpng" class="rounded-lg pl-4 pr-4 pb-16">
</template>