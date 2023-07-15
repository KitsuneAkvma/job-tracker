<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="username">Username</label>
      <input v-model="formState.username" type="text" name="username" />
    </div>

    <div>
      <label for="email">Email</label>
      <input v-model="formState.email" type="email" name="email" />
    </div>

    <div>
      <label for="password">Password</label>
      <input v-model="formState.password" type="password" name="password" />
    </div>

    
    <div>
      <label for="password">Confirm Password</label>
      <input v-model="formState.confPassword" type="password" name="confPassword" />
    </div>


    <div>
      <label for="firstName">First Name</label>
      <input v-model="formState.firstName" type="text" name="firstName" />
    </div>

    <div>
      <label for="lastName">Last Name (optional)</label>
      <input v-model="formState.lastName" type="text" name="lastName" />
    </div>

    <FormulateInput type="submit" label="Sign up" />
    <button type="submit">Sign up</button>
  </form>
</template>

<script setup lang="ts">
import {  reactive } from 'vue';

const initialValues = {
  username: "",
  email: "",
  password: "",
  confPassword: "",
  firstName: "",
  lastName: "",
};
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
