<template>
  <nav class="navigation">
    <button class="navigation__item">jobs</button>
    <button class="navigation__item">to send</button>
    <button class="navigation__item">profile</button>
    <button class="navigation__item">settings</button>
  </nav>
</template>

<script lang="ts">
export default { name: "Navbar" };
</script>

<style scoped>
.navigation {
  position: fixed;
  bottom: 0;
  left: 50%;

  width: 92vw;

  padding: 1rem 2rem;
  display: flex;
  gap: 2rem;
  justify-content: center;

  background-color:whitesmoke;
  border-radius: 2rem 2rem 0rem 0rem;

  transform: translateX(-50%);
}
</style>
