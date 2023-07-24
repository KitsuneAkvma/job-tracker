<template>
  <ul v-if="sortedJobs" class="w-full flex flex-wrap gap-8 justify-center">
    <li
      v-for="job in sortedJobs"
      key="{{job._ID}}"
      @click="$emit('moreInfo', job)"
      class="p-5 flex border-lime-300 border-2 w-4/12 justify-between cursor-pointer"
    >
      <div class="text-start">
        <h3>{{ job.Company }}</h3>
        <h5>{{ job.JobLocation }}</h5>
        <h4>{{ job.JobTitle }}</h4>
        <a v-bind:href="job.JobOfferLink" target="_blank"
          >{{ job.WhereFound || "Offer Link" }}
        </a>
        <p>{{ formatDate(job.ApplicationDate) }}</p>
      </div>

      <div class="flex flex-col">
        <span :class="useSelectClass(job.ApplicationStatus)">{{
          job.ApplicationStatus
        }}</span>
        <time datetime="{{job.applicationDate}}">{{
          formatDate(job.Updated)
        }}</time>
      </div>
    </li>
  </ul>
  <h3 v-else class="text-gray-500">You don't have any job added</h3>
</template>

<script setup lang="ts">
import { getAllJobs } from "../../utils/API/jobs";
import { IJobData } from "../../utils/types";
import { useSelectClass } from "../../utils/useSelectClass";
import { useAuth0 } from "@auth0/auth0-vue";

const { user } = useAuth0();
const nickname: string = user.value?.nickname ?? "";
const fetchJobs = async (): Promise<IJobData[]> => {
  const jobs = await getAllJobs(nickname);
  return jobs;
};

const jobs = await fetchJobs();
const doesHaveJobs = jobs.length >= 1;
const sortedJobs = doesHaveJobs ? sortJobs(jobs, "Updated") : null;

type TSortOptions =
  | "Company"
  | "JobTitle"
  | "ApplicationDate"
  | "Created"
  | "Updated"
  | "ApplicationStatus";
function sortJobs(items: IJobData[], option: TSortOptions) {
  const sortedItems = items.sort((a, b) => {
    if (a[option] < b[option]) return -1;
    else if (a[option] > b[option]) return 1;
    else return 0;
  });
  return sortedItems;
}
function formatDate(date: Date) {
  const formatedDate = new Date(String(date).slice(0, 10)).toLocaleString(
    "en-US",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    },
  );
  return formatedDate;
}
</script>

<style scoped></style>
