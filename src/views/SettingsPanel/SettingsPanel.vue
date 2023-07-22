<template>
  <h1>SETTING</h1>

  <section>
    <code v-if="isAuthenticated">{{ user }}</code>
    <span v-else>Loading user...</span>
  </section>
  <button type="button" @click="handleLogout" class="button--primary">
    Logout
  </button>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
const { logout, user, isAuthenticated } = useAuth0();

const handleLogout = () => logout();
console.log({ user });
</script>
