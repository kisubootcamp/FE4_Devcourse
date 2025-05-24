<script>
export default {
  name: 'BaseButton',
  data() {
    return {}
  },
}
</script>
<template>
  <button>
    <slot>
      <span> 클릭</span>
    </slot>
  </button>
</template>
<style scoped>
span {
  color: orange;
}
</style>
