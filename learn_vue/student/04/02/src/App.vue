<script>
import BaseButton from './components/BaseButton.vue'
import DefaultLayout from './layout/DefaultLayout.vue'

export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    BaseButton,
    DefaultLayout,
  },
}
</script>
<template>
  <BaseButton>
    <span>Login</span>
  </BaseButton>
  <DefaultLayout>
    <template v-slot:header>
      <header>Header</header>
    </template>

    <template v-slot:main>
      <main>main</main>
    </template>

    <template v-slot:footer>
      <footer>footer</footer>
    </template>
  </DefaultLayout>
</template>
<style scoped></style>
