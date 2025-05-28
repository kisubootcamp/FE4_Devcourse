<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {}
  },
}
</script>
<template>
  <slot name="header"></slot>
  <slot name="default"></slot>
  <slot name="footer"></slot>
</template>
<style scoped></style>
