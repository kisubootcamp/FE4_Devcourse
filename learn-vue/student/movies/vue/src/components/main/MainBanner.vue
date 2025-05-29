<template>
  <section class="release" v-if="randomMovie && !loading">
    <div
      class="release-item"
      :style="`background-image: url('https://image.tmdb.org/t/p/w500/${randomMovie.backdrop_path}');`"
    >
      <div class="release__text">
        <strong class="release__category">NEW RELEASE</strong>
        <h2 class="release__title">{{ randomMovie.title }}</h2>
        <p class="release__desc">
          {{ randomMovie.overview }}
        </p>
        <button class="release__btn">자세히보기</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
const { movies, loading } = defineProps({
  movies: Array,
  loading: Boolean,
})

const randomMovie = computed(() => {
  if (!movies || movies.length === 0) return null

  const movieFilter = movies.filter((movie) => movie.overview && movie.overview.trim() !== '')
  if (movieFilter.length === 0) return null

  const randomIndex = Math.floor(Math.random() * movieFilter.length)
  return movieFilter[randomIndex]
})
</script>

<style lang="scss" scoped></style>
