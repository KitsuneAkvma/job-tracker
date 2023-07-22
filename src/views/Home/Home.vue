<template>
  <main class="w-full flex flex-col items-center gap-5">
    <h1>Welcome to Job Tracker app!</h1>
    <div class="w-80 h-60 bg-lime-600"></div>
    <p>
      Job tracker is web application made to help people manage their job
      applications.
    </p>
    <p>
      As a web developer I know that sometimes you can send a lot, and I mean
      like A LOT of job applications and sometimes you can lost track of all of
      them. Have you ever wondering if you by any chance applied to this offer
      or at least this company? Will be it faux paux if I apply again ? Now this
      problem will be gone with my application!
    </p>
    <p>
      This is application is hobby project made with vue.js and sql. Your data
      is always safe because this app is using auth0!
    </p>
  </main>

  <section class="flex justify-center mt-4">
    <button @click="handleLoginOrDashboard" class="button--primary">
      Use it now !
    </button>
  </section>
</template>

<script setup lang="ts">
import { router } from "../../router/router";
import { useAuth0 } from "@auth0/auth0-vue";

const { loginWithRedirect, isAuthenticated } = useAuth0();

const handleLoginOrDashboard = () => {
  isAuthenticated ? router.push("/dashboard") : null;
};
</script>
