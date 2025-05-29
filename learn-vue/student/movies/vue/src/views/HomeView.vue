<script setup>
import MainBanner from '@/components/main/MainBanner.vue'
import MainMovie from '@/components/main/MainMovie.vue'
import { useMovieStore } from '@/stores/movie'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const movieStore = useMovieStore()
const {
  moviePlayingList,
  moviePlayingListLoading,
  moviePopularList,
  moviePopularListLoading,
  movieUpComingList,
  movieUpComingListLoading,
  movieTopRatedList,
  movieTopRatedListLoading,
} = storeToRefs(movieStore)
onMounted(() => {
  movieStore.getMoviePlaying()
  movieStore.getMoviePopular()
  movieStore.getMovieUpComing()
  movieStore.getMovieTopRated()
})
</script>
<template>
  <MainBanner :movies="movieUpComingList" :loading="movieUpComingListLoading" />
  <MainMovie
    title="상영중인 영화"
    sub-title="Now Movies"
    type="now_playing"
    :movies="moviePlayingList"
    :loading="moviePlayingListLoading"
  />
  <MainMovie
    title="인기있는 영화"
    sub-title="Popular Movies"
    type="popular"
    :movies="moviePopularList"
    :loading="moviePopularListLoading"
  />
  <MainMovie
    title="개봉 예정 영화"
    sub-title="UpComing Movies"
    type="upcoming"
    :movies="movieUpComingList"
    :loading="movieUpComingListLoading"
  />
  <MainMovie
    title="높은 평점을 받은 영화"
    sub-title="Top Rated Movie"
    type="top_rated"
    :movies="movieTopRatedList"
    :loading="movieTopRatedListLoading"
  />
</template>
<style scoped></style>
