<template>
  <div class="flex items-center justify-between mb-4">
    <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
    <button
      class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 cursor-pointer"
      @click="viewAll"
      v-show="!isShowAll"
    >
      View all
    </button>
  </div>
</template>

<script>
export default {
  props: {
    isShowAll: {
      type: Boolean,
      required: true,
    },
    viewAll: {
      type: Function,
      required: true,
    },
  },
}
</script>
