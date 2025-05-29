<script>
export default {
  name: 'CustomerHeader',
  data() {
    return {}
  },
  emits: ['handle-show'],
  props: {
    isShowAll: {
      type: Boolean,
    },
  },
}
</script>
<template>
  <div class="flex items-center justify-between mb-4">
    <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
    <a
      v-if="!isShowAll"
      @click.prevent="$emit('handle-show')"
      href="#"
      class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
    >
      View all
    </a>
  </div>
</template>
<style scoped></style>
