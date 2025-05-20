<script>
export default {
  name: "07",
  data() {
    return {
      isGreeting: true,
    };
  },
};
</script>
<template>
  <div v-if="isGreeting">Hello</div>
  <div v-else>Goodbye</div>
</template>
<style scoped></style>
