<template>
  <TheHeader />
  <slot></slot>
  <TheFooter />
</template>

<script setup>
import TheHeader from '@/components/common/TheHeader.vue'
import TheFooter from '@/components/common/TheFooter.vue'
</script>

<style lang="scss" scoped></style>
