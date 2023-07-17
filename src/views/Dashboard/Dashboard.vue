<template>
  <main class="w-full flex flex-col gap-10 min-h-screen pt-10">
    <div class="flex flex-col gap-3 justify-center items-center">
      <input
        type="search"
        name="filter"
        placeholder="Filter ..."
        class="px-3 py-2 rounded-lg w-3/4 text-center placeholder:text-gray-500"
      />
      <div class="flex gap-2">
        <span
          class="px-3 py-1 bg-yellow-500 rounded-xl text-gray-100 tracking-wide hover:brightness-125 hover:cursor-pointer"
          >Sent</span
        ><span
          class="px-3 py-1 bg-rose-500 rounded-xl text-gray-100 tracking-wide hover:brightness-125 hover:cursor-pointer"
          >Rejected</span
        ><span
          class="px-3 py-1 bg-green-500 rounded-xl text-gray-100 tracking-wide hover:brightness-125 hover:cursor-pointer"
          >Answered</span
        ><span
          class="px-3 py-1 bg-gray-500 rounded-xl text-gray-100 tracking-wide hover:brightness-125 hover:cursor-pointer"
          >No respond</span
        >
      </div>
    </div>
    <Suspense>
      <template #default>
        <JobList />
      </template>
      <template #fallback>
        <span>Loading...</span>
      </template>
    </Suspense>

    <button
      type="button"
      class="fixed bottom-10 right-10 flex items-center justify-center w-20 aspect-square rounded-full bg-lime-500 drop-shadow-md text-black text-2xl transition-all hover:bg-lime-400 hover:scale-105"
    >
      <i class="fa-solid fa-plus w-20"></i>
    </button>
    <router-link
      to="/settings"
      class="absolute top-10 right-10 text-neutral-200 transition-all hover:text-lime-100 hover:rotate-180 hover:scale-90"
    >
      <i class="fa-solid fa-gear text-3xl"></i>
    </router-link>
  </main>
</template>

<script async setup lang="ts">
import JobList from "../../components/Dashboard/JobsList.vue";
</script>
