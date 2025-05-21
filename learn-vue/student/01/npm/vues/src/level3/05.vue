<script>
export default {
  name: "App",
  data() {
    return {
      items: ["Save", "Cancel", "Delete"],
    };
  },
};
</script>
<template>
  <button v-for="(value, index) in items">{{ value }}</button>
</template>
