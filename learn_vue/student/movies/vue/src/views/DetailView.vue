<script setup>
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import DetailInfo from '../components/detail/DetailInfo.vue'
import DetailTrailer from '../components/detail/DetailTrailer.vue'
import MainMovie from '../components/main/MainMovie.vue'
import { useMovieStore } from '../stores/movie'
import { useRoute } from 'vue-router'

const route = useRoute()
const movie_id = route.params.id

const movieStore = useMovieStore()

const {
  movieDetailTrailerList,
  movieDetailTrailerLoading,
  movieDetailOverviewList,
  movieDetailOverviewLoading,
} = storeToRefs(movieStore)

onMounted(() => {
  movieStore.getMovieDetailTrailer(movie_id)
  movieStore.getMovieDetailOverview(movie_id)
})
</script>
<template>
  <DetailTrailer :trailer="movieDetailTrailerList" :loading="movieDetailTrailerLoading" />
  <DetailInfo :overview="movieDetailOverviewList" :loading="movieDetailOverviewLoading" />
  <MainMovie />
</template>
<style scoped></style>
