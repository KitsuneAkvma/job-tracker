<template>
  <div class="modal__backdrop"  @click="$emit('close')"></div>
  <div class="modal__content">
    <i
      aria-tag="button"
      @click="$emit('close')"
      class="fa-solid fa-x absolute top-5 right-10 px-4 py-2 rounded-full text-gray-400 text-2xl cursor-pointer hover:text-gray-100 hover:bg-slate-800"
    ></i>
    <h3 class="text-4xl pb-20 font-bold">Add New Job</h3>
    <form :on-submit.prevent="addNewJob" prev class="form">
      <fieldset class="flex justify-between">
        <div class="display flex flex-col items-start gap-1">
          <label for="Company">Company</label>
          <input
            type="text"
            name="Company"
            placeholder="Enter Company's name"
            class="form__input"
          />
        </div>
        <div class="display flex flex-col items-start gap-1">
          <label for="JobTitle">Job title</label>
          <input
            type="text"
            name="JobTitle"
            placeholder="Name of position you're applying to"
            class="form__input"
          />
        </div>
      </fieldset>
      <fieldset class="flex justify-between">
        <div class="display flex flex-col items-start gap-1">
          <label for="JobLocation">Location</label>
          <input
            type="text"
            name="JobLocation"
            placeholder="Is it remote or on-site - if so where"
            class="form__input"
          />
        </div>
        <div class="display flex flex-col items-start gap-1">
          <label for="ApplicationDate">When Applied</label>
          <input
            type="date"
            :value="moment().format('yyyy-MM-DD')"
            name="ApplicationDate"
            class="form__input"
          />
        </div>
      </fieldset>
      <fieldset class="flex justify-between">
        <div class="display flex flex-col items-start gap-1">
          <label for="WhereFound">Found on</label>
          <input
            type="text"
            name="WhereFound"
            placeholder="Where you found this job offer"
            class="form__input"
          />
        </div>

        <div class="display flex flex-col items-start gap-1">
          <label for="JobOfferLink">Link to offer</label>
          <input
            type="text"
            name="JobOfferLink"
            placeholder="ex. https://www.linkedin.com/jobs/offer "
            class="form__input"
          />
        </div>
      </fieldset>
      <div class="display flex flex-col items-start gap-1">
        <label for="ApplicationStatus">Status</label>
        <select name="ApplicationStatus" class="form__select">
          <option value="Sent">Sent</option>
          <option value="Rejected">Rejected</option>
          <option value="Answered">Answered</option>
          <option value="No Respond">No Respond</option>
        </select>
      </div>

      <div class="display flex flex-col items-start gap-1">
        <label for="CoverLetter">Cover Letter</label>
        <textarea
          name="CoverLetter"
          placeholder="Hello, I'm applying to this job because..."
          class="form__textarea w-full"
        />
      </div>
      <button type="submit" class="button--primary w-1/2 h-10 self-center mt-2">
        Add
      </button>
    </form>
  </div>
</template>
#2A2C34
<script setup lang="ts">
import moment from "moment";

const addNewJob = (e: Event) => {
  const form = e.target;
  console.log({ form });
};
</script>
