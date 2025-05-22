<script>
export default {
  name: 'FirstChild',
  data() {
    return {
      color: 'blue',
      isShow: true,
    }
  },
}
</script>
<template>
  <!-- <div> -->
  <h1 :class="{ isLoggedin: isShow }" :style="{ color, textDecoration: 'underline' }">
    FirstChild Vue
  </h1>
  <h2>FirstChild Vue</h2>
  <!-- </div> -->
</template>
<style scoped>
.isLoggedin {
  font-size: 50px;
}
</style>
