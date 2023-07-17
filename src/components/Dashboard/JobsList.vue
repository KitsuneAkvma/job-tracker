<template>
  <div v-if="doesHaveJobs">
    <div v-for="job in jobs" key="{{job._ID}}">
      {{ job.Company }} | {{ job.JobTitle }} | {{ job.JobLocation }} |
      {{ job.WhereFound }} | {{ job.ApplicationDate }} |
      {{ job.ApplicationStatus }} | {{ job.CoverLetter }} |
      {{ job.JobOfferLink }} | {{ job.Owner }}
    </div>
  </div>
  <h3 v-else class="text-gray-500">You don't have any job added</h3>
</template>

<script setup lang="ts">
import { getAllJobs } from "../../utils/API/jobs";
import { IJobData } from "../../utils/types";

const fetchJobs = async (): Promise<IJobData[]> => {
  const jobs = await getAllJobs();
  return jobs;
};

const jobs = await fetchJobs();
const doesHaveJobs = jobs.length >= 1;
</script>

<style scoped></style>
