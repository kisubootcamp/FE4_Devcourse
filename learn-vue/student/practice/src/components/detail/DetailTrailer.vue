<script setup>
const props = defineProps({
  videoKey: String,
  loading: Boolean,
})
</script>
<template>
  <section class="trailer">
    <iframe
      v-if="props.loading"
      class="skeleton-list-item"
      width="900"
      height="506"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
    <iframe
      v-else
      width="900"
      height="506"
      :src="`https://www.youtube.com/embed/${props.videoKey}`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </section>
</template>
<style scoped></style>
