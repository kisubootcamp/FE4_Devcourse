<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-black">
    <div
      class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <CustomerHeader :isShowAll="isShowAll" :viewAll="handleViewAll" />
      <CustomerList :customers="slicedCustomers" />
    </div>
  </div>
</template>

<script>
import CustomerHeader from './components/CustomerHeader.vue'
import CustomerList from './components/CustomerList.vue'
export default {
  name: 'CustomerApp',
  components: {
    CustomerHeader,
    CustomerList,
  },
  data() {
    return {
      customers: [
        { name: 'Neil Sims', email: 'email@windster.com', amount: 320 },
        { name: 'James', email: 'james@gmail.com', amount: 250 },
        { name: 'Smith', email: 'smith@gmail.com', amount: 600 },
        { name: 'Mike', email: 'mike@gmail.com', amount: 200 },
        { name: 'Yarn', email: 'yarn@gmail.com', amount: 140 },
        { name: 'Npm', email: 'npm@gmail.com', amount: 220 },
        { name: 'Han', email: 'han@gmail.com', amount: 450 },
      ],
      isShowAll: false,
    }
  },
  methods: {
    handleViewAll() {
      // 5명 까지 보이는데 더 보고싶으면 버튼 클릭하면 모두 보여주기
      this.isShowAll = !this.isShowAll
    },
  },
  computed: {
    slicedCustomers() {
      if (this.isShowAll) {
        return this.customers
      }
      return this.customers.slice(0, 5)
    },
  },
}
</script>

<style lang="scss" scoped></style>
