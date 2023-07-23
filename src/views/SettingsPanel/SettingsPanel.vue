<template>
  <h1>SETTING</h1>
  <router-link
    to="/dashboard"
    class="absolute top-5 right-10 px-4 py-2 rounded-full text-gray-400 text-2xl cursor-pointer hover:text-gray-100 hover:bg-slate-800"
    ><i aria-tag="button" @click="" class="fa-solid fa-x"></i
  ></router-link>

  <section>
    <span v-if="isLoading">Loading user...</span>
    <span v-else-if="!user">Problem with loading user 😭</span>
    <ul v-else class="flex flex-col gap-3">
      <li v-for="item in userKeys" class="flex flex-col">
        <span class="font-bold">{{ item }}:</span>
        <img
          v-if="item === 'picture'"
          :src="user[item]"
          alt="profile picture"
        />
        <p v-else>{{ user && user[item] }}</p>
      </li>
    </ul>
  </section>
  <button type="button" @click="handleLogout" class="button--primary">
    Logout
  </button>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
const { logout, user, isLoading } = useAuth0();

const userKeys = Object.keys(user.value ?? {});

const handleLogout = () => logout();
</script>
