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
    title="상영예정 영화"
    sub-title="Upcoming Movies"
    type="upcoming"
    :movies="movieUpComingList"
    :loading="movieUpComingListLoading"
  />
  <MainMovie
    title="평점 높은 영화"
    sub-title="Top Rated Movies"
    type="top_rated"
    :movies="movieTopRatedList"
    :loading="movieTopRatedListLoading"
  />
</template>

<script setup>
import MainBanner from '@/components/main/MainBanner.vue'
import MainMovie from '@/components/main/MainMovie.vue'

import { storeToRefs } from 'pinia'
import { useMovieStore } from '@/stores/movie'
import { onMounted } from 'vue'

const movieStore = useMovieStore()
const {
  moviePlayingList,
  moviePopularList,
  movieUpComingList,
  movieTopRatedList,
  moviePlayingListLoading,
  moviePopularListLoading,
  movieUpComingListLoading,
  movieTopRatedListLoading,
} = storeToRefs(movieStore)

onMounted(() => {
  movieStore.getMoviePlaying()
  movieStore.getMoviePopular()
  movieStore.getMovieUpComing()
  movieStore.getMovieTopRated()
})
</script>

<style lang="scss" scoped></style>
