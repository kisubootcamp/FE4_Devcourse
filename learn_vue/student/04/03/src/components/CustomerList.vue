<script>
import CustomerListItem from './CustomerListItem.vue'
export default {
  name: 'CustomerList',
  props: {
    customers: {
      type: Array,
      required: true,
    },
  },
  components: {
    CustomerListItem,
  },
}
</script>
<template>
  <div class="flow-root">
    <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
      <CustomerListItem v-for="(customer, index) in customers" :key="index" :customer="customer" />
    </ul>
  </div>
</template>
<style scoped></style>
