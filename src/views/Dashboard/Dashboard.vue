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
        <span class="px-3 py-1 bg-yellow-500 rounded-xl">Sent</span
        ><span class="px-3 py-1 bg-rose-500 rounded-xl">Rejected</span
        ><span class="px-3 py-1 bg-green-500 rounded-xl">Answered</span
        ><span class="px-3 py-1 bg-gray-500 rounded-xl">No respond</span>
      </div>
    </div>
    <h3 v-if="!jobs" class="text-gray-500">You don't have any job added</h3>
    <div v-else>Content here</div>

    <button
      type="button"
      class="fixed bottom-10 right-10 flex items-center justify-center w-20 aspect-square rounded-full bg-lime-500 drop-shadow-md text-black text-2xl"
    >
      +
    </button>
  </main>
</template>

<script setup lang="ts">
const fetchJobs = () => {
  return false;
};

const jobs = fetchJobs();
</script>
