<script setup lang="ts">
</script>

<template>
  <header class="py-4 border-b bg-green-400 flex items-center ">
    <div>
        <LangSwitcher class="pl-4"/>
      </div>
      <h1 class="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold capitalize ">
        {{ $t('title') }}
      </h1>
  </header>
</template>