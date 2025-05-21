<script>
export default {
  name: 'App',
  data() {
    return {
      items: ['Apple', 'Banana', 'Grapes'],
    }
  },
}
</script>
<template>
  <div>
    <ul>
      <template v-for="item in items" :key="item">
        <li :style="item === 'Apple' ? 'color: red' : 'color: green'">
          {{ item }}
        </li>
      </template>
    </ul>
  </div>
</template>
