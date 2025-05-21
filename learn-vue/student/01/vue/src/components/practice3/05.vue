<script>
export default {
  name: 'App',
  data() {
    return {
      items: ['Save', 'Cancel', 'Delete'],
    }
  },
}
</script>
<template>
  <div>
    <template v-for="item in items" :key="item">
      <button>{{ item }}</button>
    </template>
  </div>
</template>
