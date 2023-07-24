<template>
  <div class="modal__backdrop" @click="$emit('close')"></div>
  <div class="modal__content">
    <i
      aria-tag="button"
      @click="$emit('close')"
      class="fa-solid fa-x absolute top-5 right-10 px-4 py-2 rounded-full text-gray-400 text-2xl cursor-pointer hover:text-gray-100 hover:bg-slate-800"
    ></i>
    <h3 class="text-4xl pb-20 font-bold">Add New Job</h3>
    <form class="form">
      <fieldset class="flex justify-between flex-wrap">
        <div class="display flex flex-col items-start gap-1">
          <label for="Company">Company</label>
          <input
            type="text"
            name="Company"
            placeholder="Enter Company's name"
            :value="formData.Company"
            @change="updateField"
            class="form__input"
          />
        </div>
        <div class="display flex flex-col items-start gap-1">
          <label for="JobTitle">Job title</label>
          <input
            type="text"
            name="JobTitle"
            placeholder="Name of position you're applying to"
            :value="formData.JobTitle"
            @change="updateField"
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
            :value="formData.JobLocation"
            @change="updateField"
            class="form__input"
          />
        </div>
        <div class="display flex flex-col items-start gap-1">
          <label for="ApplicationDate">When Applied</label>
          <input
            type="date"
            name="ApplicationDate"
            :value="formData.ApplicationDate"
            @change="updateField"
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
            :value="formData.WhereFound"
            @change="updateField"
            class="form__input"
          />
        </div>

        <div class="display flex flex-col items-start gap-1">
          <label for="JobOfferLink">Link to offer</label>
          <input
            type="text"
            name="JobOfferLink"
            placeholder="ex. https://www.linkedin.com/jobs/offer "
            :value="formData.JobOfferLink"
            @change="updateField"
            class="form__input"
          />
        </div>
      </fieldset>
      <div class="display flex flex-col items-start gap-1">
        <label for="ApplicationStatus">Status</label>
        <select
          name="ApplicationStatus"
          @change="updateField"
          class="form__select"
        >
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
          :value="formData.CoverLetter"
          @change="updateField"
          class="form__textarea w-full"
        />
      </div>
      <button
        type="button"
        @click="handleSubmit"
        class="button--primary w-1/2 h-10 self-center mt-2"
      >
        Add
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import moment from "moment";
import { reactive } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";
import { addJob } from "../../utils/API/jobs";

interface IFormData {
  Company: string;
  JobTitle: string;
  JobLocation: string;
  ApplicationDate: string;
  WhereFound: string;
  JobOfferLink: string;
  ApplicationStatus: string;
  CoverLetter: string;
}
const emit = defineEmits(["close"]);
const { user } = useAuth0();
const nickname: string = user.value?.nickname ?? "";
const sessionFormData = sessionStorage.getItem("addJobFormData");
const parsedSessionFormData: IFormData | null = sessionFormData
  ? JSON.parse(sessionFormData)
  : null;

const initialFormData = {
  Company: "",
  JobTitle: "",
  JobLocation: "",
  ApplicationDate: moment().format("yyyy-MM-DD"),
  WhereFound: "",
  JobOfferLink: "",
  ApplicationStatus: "rejected",
  CoverLetter: "",
};

const formData = reactive<IFormData>(
  parsedSessionFormData ? parsedSessionFormData : initialFormData,
);

const updateField = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const value = target.value;
  const field: keyof IFormData = target.name as keyof IFormData;
  formData[field] = value;
  sessionStorage.setItem("addJobFormData", JSON.stringify(formData));
};

const handleSubmit = (e: Event) => {
  e.preventDefault();
  if (nickname === "" || nickname === undefined) {
    console.log("User problem");
    return;
  } else {
    addJob({ ...formData, Owner: nickname });
    sessionStorage.setItem("addJobFormData", JSON.stringify(initialFormData));
    emit("close");
  }
};
</script>
