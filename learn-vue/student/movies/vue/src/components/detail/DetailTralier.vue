<template>
  <section class="trailer">
    <iframe
      v-if="loading"
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
      :src="movieTrailerKey"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const { movieTrailer, loading } = defineProps({
  movieTrailer: Array,
  loading: Boolean,
})

const movieTrailerKey = computed(() => {
  if (movieTrailer.length > 0 && movieTrailer[0].site && movieTrailer[0].key) {
    return movieTrailer[0].site.toLowerCase() === 'youtube'
      ? `https://www.youtube.com/embed/${movieTrailer[0].key}`
      : `https://player.vimeo.com/video/${movieTrailer[0].key}`
  }
  return null
})
</script>

<style lang="scss" scoped></style>
