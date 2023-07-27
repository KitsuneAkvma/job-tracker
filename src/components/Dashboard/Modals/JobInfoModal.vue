<template>
  <div class="modal__backdrop" @click="$emit('close')"></div>
  <div class="modal__content flex flex-col justify-between">
    <i
      aria-tag="button"
      @click="handleClose"
      class="fa-solid fa-x absolute top-5 right-10 px-4 py-2 rounded-full text-gray-400 text-2xl cursor-pointer hover:text-gray-100 hover:bg-slate-800"
    ></i>

    <div class="flex gap-2">
      <h2 class="font-bold">ID</h2>
      <p class="">{{ props.jobOffer?._ID }}</p>
    </div>
    <div class="flex gap-2">
      <h2 class="font-bold">Company</h2>
      <p class="">{{ props.jobOffer?.Company }}</p>
    </div>
    <div class="flex gap-2">
      <h2 class="font-bold">Job title</h2>
      <p class="">{{ props.jobOffer?.JobTitle }}</p>
    </div>
    <div class="flex gap-2">
      <h2 class="font-bold">Location</h2>
      <p class="">{{ props.jobOffer?.JobLocation }}</p>
    </div>
    <div class="flex gap-2">
      <h2 class="font-bold">Date</h2>
      <p class="">{{ props.jobOffer?.ApplicationDate }}</p>
    </div>
    <div class="flex gap-2">
      <h2 class="font-bold">Status</h2>
      <p class="">{{ props.jobOffer?.ApplicationStatus }}</p>
    </div>
    <div class="flex gap-2">
      <h2 class="font-bold">Where found</h2>
      <p class="">{{ props.jobOffer?.WhereFound }}</p>
    </div>
    <div class="flex flex-col gap-2">
      <h2 class="font-bold">Cover Letter</h2>
      <p
        class="block overflow-y-auto h-48 bg-slate-950 rounded-lg p-3 text-slate-400"
      >
        {{ props.jobOffer?.CoverLetter }}
      </p>
    </div>
    <i
      aria-tag="button"
      @click="handleEdit"
      class="fa-solid fa-pencil px-4 py-2 rounded-full text-gray-400 text-2xl cursor-pointer hover:text-gray-100 hover:bg-slate-800"
    ></i>
    <i
      aria-tag="button"
      @click="handleRemove"
      class="fa-solid fa-trash px-4 py-2 rounded-full text-gray-400 text-2xl cursor-pointer hover:text-gray-100 hover:bg-slate-800"
    ></i>
  </div>
</template>

<script setup lang="ts">
import { IJobData } from "../../../utils/types";
import { type PropType } from "vue";

const emit = defineEmits(["close", "remove", "edit"]);
const props = defineProps({
  jobOffer: { type: Object as PropType<IJobData>, required: true },
});

const handleClose = () => {
  emit("close");
};
const handleEdit = () => {
  emit("edit");
  emit("close");
};
const handleRemove = () => {
  emit("remove");
  emit("close");
};
</script>
