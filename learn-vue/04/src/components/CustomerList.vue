<script>
import CustomerListItem from './CustomerListItem.vue'

export default {
  name: 'CustomerList',
  data() {
    return {}
  },
  props: {
    customers: {
      type: Array,
      required: true,
    },
    isViewAll: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    CustomerListItem,
  },
  computed: {
    displayCustomer() {
      return this.isViewAll ? this.customers : this.customers.slice(0, 5)
    },
  },
}
</script>
<template>
  <div class="flow-root">
    <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
      <CustomerListItem v-for="customer of displayCustomer" :key="customer.name" :customer />
    </ul>
  </div>
</template>
<style scoped></style>
