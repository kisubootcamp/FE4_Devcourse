<script setup>
import MainBanner from '@/components/main/MainBanner.vue'
import MainMovie from '@/components/main/MainMovie.vue'
import { useMovieStore } from '@/stores/movie'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

const movieStore = useMovieStore()
const {
  moviePlayList,
  moviePlayingListLoading,
  moviePopularList,
  moviePopularListLoading,
  movieUpCommingList,
  movieUpCommingListLoading,
  movieTopRatedList,
  movieTopRatedListLoading,
} = storeToRefs(movieStore)

onMounted(() => {
  movieStore.getMoviePlaying()
  movieStore.getMoviePopular()
  movieStore.getMovieUpcomming()
  movieStore.getMovieTopRated()
})
</script>
<template>
  <MainBanner :movies="movieUpCommingList" :loading="movieUpCommingListLoading" />
  <MainMovie
    title="상영중인 영화"
    sub-title="Now Movies"
    type="now_playing"
    :movies="moviePlayList"
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
    :movies="movieUpCommingList"
    :loading="movieUpCommingListLoading"
  />
  <MainMovie
    title="높은 평점을 받은 영화"
    sub-title="TopRated Movies"
    type="top_rated"
    :movies="movieTopRatedList"
    :loading="movieTopRatedListLoading"
  />
</template>
<style scoped></style>
