<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/function">Using Functions</RouterLink>
        <RouterLink to="/inline">Using Inline Code</RouterLink>
        <RouterLink to="/memo">Using Memoization</RouterLink>
        <RouterLink to="/component">Using separate component</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style >
nav {
  display: flex;
  gap: 1rem;
}

a {
  color: #333;
  text-decoration: none;

}

nav a.router-link-exact-active {
  text-decoration: underline;
}

.spinner {
  position: relative;
  width: 100%;
  height: 100px;
}

.spinner::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: var(--spinner-position);
  width: 30px;
  background-color: #333;
}
</style>
