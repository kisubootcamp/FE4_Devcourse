<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Ex7',
  data() {
    return {
      items: ['Apple', 'Banana', 'Grapes'],
    }
  },
}
</script>
<template>
  <ul>
    <li v-for="v in items" :key="v">
      <span v-if="v === 'Apple'" style="color: red">{{ v }}</span>
      <span v-else style="color: green">{{ v }}</span>
    </li>
  </ul>
</template>
