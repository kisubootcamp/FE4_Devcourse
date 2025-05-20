<script>
export default {
  name: 'App',
  data() {
    return {
      items: ['Item 1', 'Item 2', 'Item 3'],
    }
  },
}
</script>
<template>
  <div>
    <ul>
      <template v-for="(item, index) in items" :key="index">
        <li :style="index === 0 ? 'font-weight: bold' : ''">{{ item }}</li>
      </template>
    </ul>
  </div>
</template>
