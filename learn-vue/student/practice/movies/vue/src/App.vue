<script setup>
import { RouterView } from 'vue-router'
import DefaultLayout from './layouts/DefaultLayout.vue'
</script>

<template>
  <DefaultLayout>
    <RouterView :key="$route.fullPath" />
    <!-- //실무프로젝트를 한다면 무조건 넣어두면 좋은 것 $route.fullPath -->
  </DefaultLayout>
</template>

<style scoped></style>
