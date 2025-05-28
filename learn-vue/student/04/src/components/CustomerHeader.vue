<script>
export default {
  name: 'CustomerHeader',
  data() {
    return {}
  },
}
</script>
<template>
  <div class="flex items-center justify-between mb-4">
    <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
    <button
      v-if="!showAll"
      @click="$emit('viewAll')"
      class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
    >
      View all
    </button>
  </div>
</template>
<style scoped></style>
