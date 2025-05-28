<script setup>
import DetailInfo from '@/components/detail/DetailInfo.vue'
import DetailTrailer from '@/components/detail/DetailTrailer.vue'
import MainMovie from '@/components/main/MainMovie.vue'
import { useMovieStore } from '@/stores/movie'
import { storeToRefs } from 'pinia'
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id

const movieStore = useMovieStore()
const {
  movieVideoList,
  movieVideoListLoading,
  movieInfomationCastList,
  movieInfomationCrewList,
  movieInfomationListLoading,
  movieDetailList,
  movieDetailListLoading,
} = storeToRefs(movieStore)

onMounted(() => {
  movieStore.getVideo(id)
  movieStore.getInfomation(id)
  movieStore.getDetail(id)
})

watch(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
</script>
<template>
  <DetailTrailer :video="movieVideoList" :loading="movieVideoListLoading" />
  <DetailInfo
    :infomationcast="movieInfomationCastList"
    :infomationcrew="movieInfomationCrewList"
    :detail="movieDetailList"
    :mlloading="movieInfomationListLoading"
    :mdloading="movieDetailListLoading"
  />
  <MainMovie type="hidden" />
</template>
<style scoped></style>
