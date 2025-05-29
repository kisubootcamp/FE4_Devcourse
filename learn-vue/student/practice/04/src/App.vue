<script>
import CustomerHeader from './components/CustomerHeader.vue'
import CustomerList from './components/CustomerList.vue'
import CustomerListItem from './components/CustomerListItem.vue'

export default {
  components: {
    CustomerHeader,
    CustomerList,
    CustomerListItem,
  },
  data() {
    return {
      customers: [
        { id: 1, name: 'Neil Sims', email: 'email@windster.com', amount: '$320' },
        { id: 2, name: 'James', email: 'james@gmail.com', amount: '$250' },
        { id: 3, name: 'Smith', email: 'smith@gmail.com', amount: '$600' },
        { id: 4, name: 'Mike', email: 'mike@gmail.com', amount: '$200' },
        { id: 5, name: 'Yarn', email: 'yarn@gmail.com', amount: '$140' },
        { id: 6, name: 'Npm', email: 'npm@gmail.com', amount: '$220' },
        { id: 7, name: 'Han', email: 'han@gmail.com', amount: '$450' },
      ],
      isShowAll: false,
    }
  },
  computed: {
   displayedCustomer() {
      return this.isShowAll ? this.customers : this.customers.slice(0, 5)
    },
  },
}
</script>
<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-black">
    <div
      class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <CustomerHeader :isShowAll="isShowAll" @handle-show="isShowAll = true" />
      <CustomerList>
        <CustomerListItem
          v-for="customer in displayedCustomer"
          :key="customer.id"
          :name="customer.name"
          :email="customer.email"
          :amount="customer.amount"
        />
      </CustomerList>
    </div>
  </div>
</template>
<style></style>
