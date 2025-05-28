<script setup>
const props = defineProps({
  video: Array,
  loading: Boolean,
})
</script>
<template>
  <section v-if="!props.loading" class="trailer">
    <iframe
      width="900"
      height="506"
      :src="`https://www.youtube.com/embed/${props.video[0]?.key}`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
    <!-- <iframe
      class="skeleton-list-item"
      width="900"
      height="506"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe> -->
  </section>
</template>
<style scoped></style>
