<template>
  <div class="h-screen w-100 flex justify-center items-center">
    <main class="p-10 bg-zinc-800 rounded-xl">
      <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
        <h1 class="mb-7 mx-auto text-lime-100 tracking-tight">
          Welcome back !
        </h1>

        <FormInput
          type="text"
          name="username"
          placeholder="JohnS21"
          label="Username"
          @changeInputValue="formState.username = $event"
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          placeholder="Min. 6 characters long. Need to have at least one Big letter, one small and one number"
          @changeInputValue="formState.password = $event"
        />

        <button
          type="submit"
          class="mx-auto mt-4 mb-2 bg-lime-300 text-neutral-700 font-semibold tracking-widest uppercase transition-all hover:bg-lime-500 hover:scale-95"
        >
          Login
        </button>
      </form>
      <p>Don't have an account yet ?</p>
      <router-link to="/register">Sign up!</router-link>
    </main>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import FormInput from "../../components/__general/FormInput.vue";
import { login } from "../../utils/API/auth";

const formState = reactive({
  username: "",
  password: "",
});
const handleSubmit = async () => {
  try {
    const res = await login(formState);
    console.log(res);
  } catch (error) {
    console.error("Form validation failed:", error);
  }
};
</script>
../../utils/API/auth