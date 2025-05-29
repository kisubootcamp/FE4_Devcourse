<script setup>
import DetailInfo from '@/components/detail/DetailInfo.vue'
import DetailTrailer from '@/components/detail/DetailTrailer.vue'
import MainMovie from '@/components/main/MainMovie.vue'
import { useDetailStore } from '@/stores/detail'
import { storeToRefs } from 'pinia'
import { onBeforeUnmount, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const movieId = route.params.id

const detailStore = useDetailStore()
const {
  videoKey,
  videoLoading,
  detailInfo,
  detailLoading,
  credits,
  movieRelativeList,
  movieRelativeListLoading,
} = storeToRefs(detailStore)

onMounted(() => {
  detailStore.getTrailer(movieId)
  detailStore.getDetail(movieId)
  detailStore.getCredits(movieId)
})

onBeforeUnmount(() => {
  videoLoading.value = true
  detailLoading.value = true
})
</script>

<template>
  <DetailTrailer :videoKey :loading="videoLoading" />
  <DetailInfo :detailInfo :loading="detailLoading" :credits />
  <MainMovie
    title="비슷한 장르의 영화"
    sub-title="Relative Movies"
    :movies="movieRelativeList"
    :loading="movieRelativeListLoading"
  />
</template>
<style scoped></style>
