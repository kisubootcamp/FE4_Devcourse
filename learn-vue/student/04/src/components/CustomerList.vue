<script>
import CustomerListItem from './CustomerListItem.vue'

export default {
  name: 'CustomerList',
  components: {
    CustomerListItem,
  },
  props: { customerView: { type: Array, required: true } },
  data() {
    return {}
  },
}
</script>
<template>
  <div class="flow-root">
    <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
      <template v-for="customer in customerView" :key="customer.name">
        <CustomerListItem :customer="customer" />
      </template>
    </ul>
  </div>
</template>
<style scoped></style>
