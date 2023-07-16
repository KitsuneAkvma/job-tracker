<template>
  <div class="h-screen w-100 flex justify-center items-center">
    <main class="p-10 bg-zinc-800 rounded-xl">
      <form
        @submit.prevent="handleSubmit"
        class="flex flex-col gap-4 items-start"
      >
        <h1 class="mb-7 mx-auto text-lime-100 tracking-tight">
          Create a new account
        </h1>
        <section class="w-full flex flex-col gap-3">
          <FormInput
            type="text"
            name="username"
            placeholder="JohnS21"
            label="Username"
            @changeInputValue="formState.username = $event"
          />
          <FormInput
            type="email"
            name="email"
            label="E-mail"
            placeholder="john@example.com"
            @changeInputValue="formState.email = $event"
          />
        </section>
        <section class="flex gap-7 items-center">
          <FormInput
            type="password"
            name="password"
            label="Password"
            placeholder="Min. 6 characters long. Need to have at least one Big letter, one small and one number"
            @changeInputValue="formState.password = $event"
          />
          <FormInput
            type="password"
            name="confPassword"
            label="Confirm Password"
            placeholder="Passwords must match"
            @changeInputValue="formState.confPassword = $event"
          />
        </section>
        <section class="flex gap-7 items-center">
          <FormInput
            type="text"
            name="firstName"
            label="First Name"
            placeholder="John"
            @changeInputValue="formState.firstName = $event"
          />
          <FormInput
            type="text"
            name="lastName"
            label="Last Name"
            placeholder="Smith"
            @changeInputValue="formState.lastName = $event"
          />
        </section>

        <button
          type="submit"
          class="mx-auto mt-4 mb-2 bg-lime-300 text-neutral-700 font-semibold tracking-widest uppercase transition-all hover:bg-lime-500 hover:scale-95"
        >
          Sign up
        </button>
      </form>
      <div>
        <p>Already have an account ?</p>
        <router-link to="/login">Login</router-link>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import FormInput from "../../components/__general/FormInput.vue";

const formState = reactive({
  username: "",
  email: "",
  password: "",
  confPassword: "",
  firstName: "",
  lastName: "",
});

const handleSubmit = async () => {
  try {
    console.log(formState);
  } catch (error) {
    console.error("Form validation failed:", error);
  }
};
</script>
