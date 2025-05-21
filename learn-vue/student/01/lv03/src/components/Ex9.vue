<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Ex9',
  data() {
    return {
      items: ['Item 1', 'Item 2', 'Item 3'],
    }
  },
}
</script>
<template>
  <ul>
    <li v-for="(v, i) in items" :key="i">
      <strong v-if="i === 0">{{ v }}</strong>
      <span v-else>{{ v }}</span>
    </li>
  </ul>
</template>
