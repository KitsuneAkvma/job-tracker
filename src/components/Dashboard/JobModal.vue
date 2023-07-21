<template>
  <div class="modal__backdrop" @click="$emit('close')"></div>
  <div class="modal__content">
    <i
      aria-tag="button"
      @click="$emit('close')"
      class="fa-solid fa-x absolute top-5 right-10 px-4 py-2 rounded-full text-gray-400 text-2xl cursor-pointer hover:text-gray-100 hover:bg-slate-800"
    ></i>
    <div>ID: {{ props.jobOffer?._ID }}</div>
    <div>Company: {{ props.jobOffer?.Company }}</div>
    <div>Title: {{ props.jobOffer?.JobTitle }}</div>
    <div>Location: {{ props.jobOffer?.JobLocation }}</div>
    <div>Date: {{ props.jobOffer?.ApplicationDate }}</div>
    <div>Status: {{ props.jobOffer?.ApplicationStatus }}</div>
    <div>Where found: {{ props.jobOffer?.WhereFound }}</div>
    <div>Cover Letter: {{ props.jobOffer?.CoverLetter }}</div>
  </div>
</template>

<script setup lang="ts">
import { IJobData } from "../../utils/types";
import { type PropType } from "vue";

const props = defineProps({
  jobOffer: Object as PropType<IJobData>,
});
</script>
