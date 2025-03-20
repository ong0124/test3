<template>
    <div class="h-screen">
        <div class="h-1/4 bg-green-400 ">
            <header class="flex items-center py-4">
              <BackBtn/>
                <h1 class="absolute left-1/2 transform -translate-x-1/2 text-base font-bold capitalize text-white ">
                  {{ $t("accountInfo.title") }}
                </h1>
            </header>
            <div class="mx-3 pt-2 pb-8 rounded-lg bg-white flex flex-col">
                <div class="border-b-2 mx-4 flex">
                    <p class="px-4 py-2">{{ $t("accountInfo.userId") }}</p>
                    <input
                  type="text"
                  placeholder="213xxxx548"
                  class="flex-1 px-2 bg-inherit focus:outline-none text-sm min-w-0"/>
                </div>
                <div class="border-b-2 mx-4 flex">
                    <p class="px-4 py-2">{{ $t("accountInfo.nickname") }}</p>
                    <input
                  type="text"
                  placeholder="X先生/女生"
                  class="flex-1 px-6 bg-inherit focus:outline-none text-sm min-w-0"/>
                </div>
                <div class="border-b-2 mx-4 flex">
                    <p class="px-4 py-2">{{ $t("accountInfo.phone") }}</p>
                    <input
                  type="text"
                  placeholder="121XXXXXX123"
                  class="flex-1 px-6 bg-inherit focus:outline-none text-sm min-w-0"/>
                </div>
                <div class="border-b-2 mx-4 flex">
                    <p class="px-4 py-2">{{ $t("accountInfo.email") }}</p>
                    <input
                  type="text"
                  placeholder="XX4549@gmail.com"
                  class="flex-1 px-6 bg-inherit focus:outline-none text-sm min-w-0"/>
                </div>

                <button class="mt-4 mx-12 bg-green-400 rounded p-2 text-white"> {{ $t("accountInfo.saveButton") }}</button>
            </div>
        </div>
    </div>
</template>