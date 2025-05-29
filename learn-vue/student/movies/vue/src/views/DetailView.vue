<template>
  <DetailTralier :movie-trailer="movieTrailerList" :loading="movieTrailerListLoading" />
  <DetailInfo
    :movie-detail="movieDetail"
    :loading="movieDetailLoading"
    :movie-credit="movieCreditList"
    :credit-loading="movieCreditListLoading"
  />
  <MainMovie
    title="비슷한 장르의 영화"
    sub-title="Relative movies"
    :movies="movieGenreList"
    :loading="movieGenreListLoading"
    type="relative"
  />
</template>

<script setup>
import DetailTralier from '@/components/detail/DetailTralier.vue'
import DetailInfo from '@/components/detail/DetailInfo.vue'
import MainMovie from '@/components/main/MainMovie.vue'
import { useMovieStore } from '@/stores/movie'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { computed, onMounted, watch } from 'vue'

const route = useRoute()
const movieStore = useMovieStore()
const {
  movieTrailerList,
  movieTrailerListLoading,
  movieDetail,
  movieDetailLoading,
  movieCreditList,
  movieCreditListLoading,
  movieGenreList,
  movieGenreListLoading,
} = storeToRefs(movieStore)

const gnere = computed(() => {
  return movieDetail.value.genres?.map((genre) => genre.id).join(',') || ''
})

watch(gnere, (newVal) => {
  movieStore.getMovieGenre(newVal)
})

onMounted(() => {
  console.log(123)
  const id = route.params.id
  movieStore.getMovieTrailler(id)
  movieStore.getMovieDetail(id)
  movieStore.getMovieCredit(id)
  movieStore.getMovieGenre(gnere.value)
})
</script>

<style lang="scss" scoped></style>
