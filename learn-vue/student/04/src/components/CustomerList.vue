<template>
  <div class="flow-root">
    <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
      <li class="py-3 sm:py-4" v-for="customer in customers" :key="customer.name">
        <CustomerListItem :customer="customer" />
      </li>
    </ul>
  </div>
</template>

<script>
import CustomerListItem from './CustomerListItem.vue'
export default {
  components: {
    CustomerListItem,
  },
  props: {
    customers: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
