<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Ex5',
  data() {
    return {
      buttons: ['Save', 'Cancel', 'Delete'],
    }
  },
}
</script>
<template>
  <button v-for="text in buttons" :key="text">
    {{ text }}
  </button>
</template>
