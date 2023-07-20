<template>
  <main class="w-full flex flex-col gap-10 min-h-screen pt-10">
    <router-link
      to="/settings"
      class="absolute top-10 right-10 text-neutral-200 transition-all hover:text-lime-100 hover:rotate-180 hover:scale-90"
    >
      <i class="fa-solid fa-gear text-3xl"></i>
    </router-link>
    <div class="flex flex-col gap-3 justify-center items-center">
      <input
        type="search"
        name="filter"
        placeholder="Filter ..."
        class="px-3 py-2 rounded-lg w-3/4 text-center placeholder:text-gray-500"
      />
      <div class="flex gap-2">
        <span class="badge--sent hover:brightness-125 hover:cursor-pointer"
          >Sent</span
        ><span class="badge--rejected hover:brightness-125 hover:cursor-pointer"
          >Rejected</span
        ><span class="badge--answered hover:brightness-125 hover:cursor-pointer"
          >Answered</span
        ><span
          class="badge--no-respond hover:brightness-125 hover:cursor-pointer"
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
      class="button--primary fixed bottom-10 right-10 z-0 w-20 aspect-square"
    >
      <i class="fa-solid fa-plus w-20"></i>
    </button>
  </main>
  <JobModal v-if="isModalOpen" />
</template>

<script async setup lang="ts">
import JobList from "../../components/Dashboard/JobsList.vue";
import JobModal from "../../components/Dashboard/JobModal.vue";

const isModalOpen = false;
</script>
