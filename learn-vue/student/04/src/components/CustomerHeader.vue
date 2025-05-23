<script>
export default {
  name: 'CustomerHeader',
  props: {
    toggleView: { type: Function, required: true },
    viewAll: { type: Boolean, required: true },
  },
  data() {
    return {}
  },
}
</script>
<template>
  <div class="flex items-center justify-between mb-4">
    <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
    <a
      @click="toggleView"
      href="#"
      class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
      v-show="!viewAll"
    >
      View all
    </a>
  </div>
</template>
<style scoped></style>
