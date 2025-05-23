<script>
import CustomerListItem from './CustomerListItem.vue'

export default {
  name: 'CustomerList',
  components: {
    CustomerListItem,
  },
  props: {
    customers: {
      type: Array,
    },
    isShowAll: {
      type: Boolean,
    },
  },
  computed: {
    getSome() {
      return this.customers.filter((_, i) => i < 5)
    },
  },
}
</script>
<template>
  <div class="flow-root">
    <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
      <li
        class="py-3 sm:py-4"
        v-for="customer in isShowAll ? customers : getSome"
        :key="customer.email"
      >
        <CustomerListItem :customer="customer" />
      </li>
    </ul>
  </div>
</template>
<style scoped></style>
