<script>
export default {
  name: 'defaultLayout',
  data() {
    return {
      text: 'login',
    }
  },
}
</script>
<template>
  a
  <slot name="header">
    <header>
      <h1>default slot</h1>
    </header>
  </slot>
  b
  <slot name="main"></slot>
  c
  <slot name="footer"></slot>
  d
</template>
<style scoped></style>
