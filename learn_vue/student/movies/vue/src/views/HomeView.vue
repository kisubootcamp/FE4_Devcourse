<script setup>
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import MainBanner from '../components/main/MainBanner.vue'
import MainMovie from '../components/main/MainMovie.vue'
import { useMovieStore } from '../stores/movie'

const movieStore = useMovieStore()
const {
  moviePlayingList,
  moviePlayingListLoading,
  moviePopularList,
  moviePopularListLoading,
  movieUpcomingList,
  movieUpcomingListLoading,
  movieTopRatedList,
  movieTopRatedListLoading,
} = storeToRefs(movieStore)
onMounted(() => {
  movieStore.getMoviePlaying()
  movieStore.getMoviePopular()
  movieStore.getMovieUpcoming()
  movieStore.getMovieTopRated()
})
</script>
<template>
  <MainBanner :movies="movieUpcomingList" :loading="movieUpcomingListLoading" />
  <MainMovie
    title="상영중인 영화"
    sub-title="Now Movies"
    :movies="moviePlayingList"
    :loading="moviePlayingListLoading"
    type="now_playing"
  />
  <MainMovie
    title="인기있는 영화"
    sub-title="Popular Movies"
    :movies="moviePopularList"
    :loading="moviePopularListLoading"
    type="popular"
  />
  <MainMovie
    title="개봉예정 영화"
    sub-title="Upcoming Movies"
    :movies="movieTopRatedList"
    :loading="movieUpcomingListLoading"
    type="upcoming"
  />
  <MainMovie
    title="높은 평점을 받은 영화"
    sub-title="Top Rated Movies"
    :movies="movieUpcomingList"
    :loading="movieTopRatedListLoading"
    type="top_rated"
  />
</template>
<style scoped></style>
