<script setup>
import DetailInfo from '@/components/detail/DetailInfo.vue'
import DetailTrailer from '@/components/detail/DetailTrailer.vue'
import MainMovie from '@/components/main/MainMovie.vue'
import { useMovieStore } from '@/stores/movie'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const movie_id = route.params.id

const movieStore = useMovieStore()
const { movieDetail, movieDetailLoading, moviePlayList, moviePlayingListLoading } =
  storeToRefs(movieStore)

onMounted(() => {
  movieStore.getMovieDetail(movie_id)
})
</script>
<template>
  <DetailTrailer />
  <DetailInfo :movie="movieDetail" :loading="movieDetailLoading" />
  <MainMovie :movies="moviePlayList" :loading="moviePlayingListLoading" />
</template>
<style scoped></style>
