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
        <JobList @moreInfo="openInfoModal" />
      </template>
      <template #fallback>
        <span>Loading...</span>
      </template>
    </Suspense>

    <button
      type="button"
      @click="openAddModal"
      class="button--primary fixed bottom-10 right-10 z-0 w-20 aspect-square"
    >
      <i class="fa-solid fa-plus w-20"></i>
    </button>
  </main>
  <JobModal
    v-if="isInfoModalOpen"
    @edit="openEditModal"
    @close="closeInfoModal"
    :jobOffer="selectedJobOffer"
  />
  <addJobModal v-if="isAddJobModalOpen" @close="closeAddModal" />
  <EditJobModal
    v-if="isEditModalOpen"
    @close="closeEditModal"
    :jobOffer="selectedJobOffer"
  />
</template>

<script async setup lang="ts">
import JobList from "../../components/Dashboard/JobsList.vue";
import JobModal from "../../components/Dashboard/Modals/JobInfoModal.vue";
import addJobModal from "../../components/Dashboard/Modals/AddJobModal.vue";
import { ref, } from "vue";
import { IJobData } from "../../utils/types";
import EditJobModal from "../../components/Dashboard/Modals/EditJobModal.vue";

const isAddJobModalOpen = ref(false);
const isInfoModalOpen = ref(false);
const isEditModalOpen = ref(false);
const selectedJobOffer = ref<IJobData>();

const openAddModal = () => (isAddJobModalOpen.value = true);
const closeAddModal = () => (isAddJobModalOpen.value = false);
const openInfoModal = (job: IJobData) => {
  selectedJobOffer!.value = job;
  isInfoModalOpen.value = true;
};
const closeInfoModal = () => (isInfoModalOpen.value = false);
const openEditModal = () => (isEditModalOpen.value = true);
const closeEditModal = () => (isEditModalOpen.value = false);
</script>
