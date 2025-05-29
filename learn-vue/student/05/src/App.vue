<template>
  <div>
    <nav style="display: flex; gap: 10px">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/order/123">Order</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
