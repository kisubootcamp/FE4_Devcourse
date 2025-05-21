<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Ex4',
  data() {
    return {
      items: ['Apple', 'Banana', 'Orange', 'Grapes'],
    }
  },
}
</script>
<template>
  <ul>
    <li v-for="(v, i) in items.filter((v) => v.includes('a'))" :key="i">
      {{ v }}
    </li>
  </ul>
</template>
