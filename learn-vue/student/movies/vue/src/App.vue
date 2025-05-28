<script setup>
import DefaultLayout from '@/layout/DefaultLayout.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <DefaultLayout>
    <RouterView :key="route.fullPath" />
  </DefaultLayout>
</template>
