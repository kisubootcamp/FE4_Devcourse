<script>
import OptionCount from './components/OptionCount.vue'
import SetupAliasCount from './components/SetupAliasCount.vue'
// import SetupCount from './components/SetupCount.vue'

export default {
  name: 'App',
  components: {
    OptionCount,
    SetupAliasCount,
  },
  data() {
    return {}
  },
}
</script>
<template>
  <OptionCount />
  <SetupAliasCount />
</template>
<style scoped></style>

<!-- <script>
// import CustomerHeader from './components/CustomerHeader.vue'
// import CustomerList from './components/CustomerList.vue'

export default {
  name: 'App',
  components: {},
  data() {
    return {
      customers: [
        {
          name: 'Neil Sims',
          email: 'email@windster.com',
          amount: '$320',
        },
        {
          name: 'James',
          email: 'james@gmail.com',
          amount: '$250',
        },
        {
          name: 'Smith',
          email: 'smith@gmail.com',
          amount: '$600',
        },
        {
          name: 'Mike',
          email: 'mike@gmail.com',
          amount: '$200',
        },
        {
          name: 'Yarn',
          email: 'yarn@gmail.com',
          amount: '$140',
        },
        {
          name: 'Npm',
          email: 'npm@gmail.com',
          amount: '$220',
        },
        {
          name: 'Han',
          email: 'han@gmail.com',
          amount: '$450',
        },
      ],
      showAll: false,
    }
  },
  computed: {
    displayedCustomer() {
      return this.showAll ? this.customers : this.customers.slice(0, 5)
    },
  },

  methods: {
    toggleShowAll() {
      this.showAll = !this.showAll
    },
  },
}
</script>
<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-black">
    <div
      class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Latest Customers
        </h5>
        <button
          class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          @click.prevent="toggleShowAll"
        >
          View all
        </button>
      </div>
      <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
          <li class="py-3 sm:py-4" v-for="customer in displayedCustomer" :key="customer.name">
            <div class="flex items-center">
              <div class="flex-1 min-w-0 ms-4">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {{ customer.name }}
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  {{ customer.email }}
                </p>
              </div>

              <div
                class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
              >
                {{ customer.amount }}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style></style> -->

<!-- <script>
import AssignPractice from './components/AssignPractice.vue'

export default {
  name: 'App',
  components: {
    AssignPractice,
  },
  data() {
    return {}
  },
}
</script>
<template>
  <AssignPractice />
</template>
<style scoped></style> -->

<!-- <script>
import BaseButton from './components/BaseButton.vue'
import DefaultLayout from './layout/DefaultLayout.vue'

export default {
  name: 'App',
  components: {
    BaseButton,
    DefaultLayout,
  },
  data() {
    return {}
  },
}
</script>
<template>
  <h1>Appvue</h1>
  <BaseButton><span>Login</span></BaseButton>
  <DefaultLayout>
    <template v-slot:header>
      <header><h1>Header</h1></header>
    </template>
    <template v-slot:main>
      <main><h1>main</h1></main>
    </template>
    <template #footer>
      <footer><h1>footer</h1></footer>
    </template>
  </DefaultLayout>
</template>
<style scoped>
span {
  color: red;
}
</style> -->

<!-- <script>
import BaseCount from './components/BaseCount.vue'

export default {
  name: 'App',
  components: {
    BaseCount,
  },
  mounted() {
    // const h1El = document.querySelector('h1')
    // const text = h1El.innerText
    // console.log(text)
    // console.log(this.$refs.h1El.innerText)
    console.log(this.$refs.baseCount)
    console.log(this.$refs.baseCount.count)
    console.log(this.$refs.baseCount.doubleCount)
  },
  methods: {
    incrementParent() {
      this.$refs.baseCount.increment()
    },
  },
}
</script>
<template>
  <h1 ref="h1El">Hello</h1>
  <BaseCount ref="baseCount" />
  <button @click="incrementParent">external click</button>
</template>
<style scoped></style> -->

<!-- <script>
import BaseCount from './components/BaseCount.vue'

export default {
  name: 'App',
  components: {
    BaseCount,
  },
  data() {
    return {
      isShow: true,
    }
  },
}
</script>
<template>
  <BaseCount v-if="isShow" />
  <button @click="isShow">show</button>
</template>
<style scoped></style> -->
