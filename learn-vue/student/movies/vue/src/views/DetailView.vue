<script setup>
import DetailInfo from '@/components/detail/DetailInfo.vue'
import DetailTrailer from '@/components/detail/DetailTrailer.vue'
import MainMovie from '@/components/main/MainMovie.vue'
import { useMovieStore } from '@/stores/movie'
import { storeToRefs } from 'pinia'
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const movieStore = useMovieStore()
const movieId = route.params.id
const {
  movieDetail,
  movieDetailLoading,
  movieVideos,
  movieVideosLoading,
  movieCredits,
  movieCreditsLoading,
  movieDiscover,
  movieDiscoverLoading,
} = storeToRefs(movieStore)

const genreIds = computed(() => {
  return movieDetail.value.genres?.map((genre) => genre.id) || []
})

onMounted(() => {
  movieStore.getMovieDetail(movieId)
  movieStore.getMovieVideos(movieId)
  movieStore.getMovieCredits(movieId)
  movieStore.getMovieDiscover(genreIds.value)
})

watch(genreIds, (genreNewIds) => {
  if (genreNewIds.length > 0) {
    movieStore.getMovieDiscover(genreNewIds)
  }
})
</script>
<template>
  <DetailTrailer :movie="movieVideos" :loading="movieVideosLoading" />
  <DetailInfo
    :movie="movieDetail"
    :loading="movieDetailLoading"
    :credits="movieCredits"
    :loading2="movieCreditsLoading"
  />
  <MainMovie
    :movies="movieDiscover"
    :loading="movieDiscoverLoading"
    title="비슷한 장르의 영화"
    subTitle="Relative Movies"
  />
</template>
<style scoped></style>
