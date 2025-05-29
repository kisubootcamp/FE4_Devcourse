<script>
import CustomerHeader from './components/CustomerHeader.vue'
import CustomerList from './components/CustomerList.vue'
export default {
  data() {
    return {
      Customers: [
        { name: 'Neil Sims', email: 'email@windster.com', amount: '$320' },
        { name: 'James', email: 'james@gmail.com', amount: '$250' },
        { name: 'Smith', email: 'smith@gmail.com', amount: '$600' },
        { name: 'Mike', email: 'mike@gmail.com', amount: '$200' },
        { name: 'Yarn', email: 'yarn@gmail.com', amount: '$140' },
        { name: 'Npm', email: 'npm@gmail.com', amount: '$220' },
        { name: 'Han', email: 'han@gmail.com', amount: '$450' },
      ],
      isAll: true,
    }
  },
  computed: {
    fiveCustomers() {
      return this.isAll ? this.Customers.slice(0, 5) : this.Customers
    },
  },
  methods: {
    showAll() {
      this.isAll = !this.isAll
    },
  },
  components: {
    CustomerHeader,
    CustomerList,
  },
}
</script>
<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-black">
    <div class="w-full max-w-md p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <CustomerHeader @click="showAll" />
      <CustomerList :customers="fiveCustomers" />
    </div>
  </div>
</template>
<style></style>
