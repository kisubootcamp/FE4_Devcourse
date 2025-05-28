<script>
import CustomerHeader from './components/CustomerHeader.vue'
import CustomerList from './components/CustomerList.vue'

export default {
  name: 'App',
  data() {
    return {
      customers: [
        { name: 'Neil Sims', email: 'email@windster.com', amount: '$320' },
        { name: 'James', email: 'james@gmail.com', amount: '$250' },
        { name: 'Smith', email: 'smith@gmail.com', amount: '$600' },
        { name: 'Mike', email: 'mike@gmail.com', amount: '$200' },
        { name: 'Yarn', email: 'yarn@gmail.com', amount: '$140' },
        { name: 'Npm', email: 'npm@gmail.com', amount: '$220' },
        { name: 'Han', email: 'han@gmail.com', amount: '$450' },
      ],
      isViewAll: false,
    }
  },
  methods: {
    viewAll() {
      this.isViewAll = true
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
    <div
      class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <CustomerHeader :isViewAll @view-all="viewAll" />
      <CustomerList :isViewAll :customers />
    </div>
  </div>
</template>
<style></style>
