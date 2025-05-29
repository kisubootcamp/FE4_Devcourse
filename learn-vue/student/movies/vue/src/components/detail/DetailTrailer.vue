<script setup>
const props = defineProps({
  movie: Array,
  loading: Boolean,
})
</script>
<template>
  <section class="trailer">
    <template v-if="props.loading">
      <iframe
        class="skeleton-list-item"
        width="900"
        height="506"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </template>
    <template v-else>
      <iframe
        width="900"
        height="506"
        :src="`https://www.youtube.com/embed/${props.movie[0]?.key}`"
        :title="`${props.movie[0]?.name}`"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </template>
  </section>
</template>
<style scoped></style>
