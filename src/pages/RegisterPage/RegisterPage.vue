<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="username">Username</label>
      <FormulateInput
        v-model="form.username"
        type="text"
        name="username"
        rules="required"
      />
      <span v-if="errors.has('username')">{{ errors.first("username") }}</span>
    </div>

    <div>
      <label for="email">Email</label>
      <FormulateInput
        v-model="form.email"
        type="email"
        name="email"
        rules="required|email"
      />
      <span v-if="errors.has('email')">{{ errors.first("email") }}</span>
    </div>

    <div>
      <label for="password">Password</label>
      <FormulateInput
        v-model="form.password"
        type="password"
        name="password"
        rules="required"
      />
      <span v-if="errors.has('password')">{{ errors.first("password") }}</span>
    </div>

    <div>
      <label for="confPassword">Confirm Password</label>
      <FormulateInput
        v-model="form.confPassword"
        type="password"
        name="confPassword"
        rules="required"
      />
      <span v-if="errors.has('confPassword')">{{
        errors.first("confPassword")
      }}</span>
    </div>

    <div>
      <label for="firstName">First Name</label>
      <FormulateInput
        v-model="form.firstName"
        type="text"
        name="firstName"
        rules="required"
      />
      <span v-if="errors.has('firstName')">{{
        errors.first("firstName")
      }}</span>
    </div>

    <div>
      <label for="lastName">Last Name (optional)</label>
      <FormulateInput
        v-model="form.lastName"
        type="text"
        name="lastName"
        rules="required"
      />
    </div>

    <FormulateInput type="submit" label="Sign up" />
  </form>
</template>

<script setup lang="ts">
import { createForm } from "@formulate/core";
import { ValidationProvider, extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";

extend("required", required);
extend("email", email);

const { form, errors, validate, reset } = createForm({
  username: "",
  email: "",
  password: "",
  confPassword: "",
  firstName: "",
  lastName: "",
});

const handleSubmit = async () => {
  try {
    await validate();
    // Handle form submission
    console.log(form);
    reset();
  } catch (error) {
    console.error("Form validation failed:", error);
  }
};
</script>
