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
  movieUpcomingList,
  movieUpcomingListLoading,
  movieTopLatedList,
  movieTopLatedListLoading,
} = storeToRefs(movieStore)
onMounted(() => {
  movieStore.getMoviePlaying()
  movieStore.getMoviePopular()
  movieStore.getMovieUpcoming()
  movieStore.getMovieTopLated()
})
</script>
<template>
  <MainBanner :movies="movieUpcomingList" :loading="movieUpcomingListLoading" />
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
    title="개봉예정 영화"
    sub-title="Upcoming Movies"
    type="upcoming"
    :movies="movieUpcomingList"
    :loading="movieUpcomingListLoading"
  />
  <MainMovie
    title="높은 평점을 받은 영화"
    sub-title="Top Rated"
    type="top_rated"
    :movies="movieTopLatedList"
    :loading="movieTopLatedListLoading"
  />
</template>
<style scoped></style>
