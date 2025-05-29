<script setup>
import ListMovie from '@/components/list/ListMovie.vue'
import { useMovieStore } from '@/stores/movie'
import { storeToRefs } from 'pinia'
import { onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

let page = 1
const route = useRoute()

const movieStore = useMovieStore()
const { movieMoreList, movieMoreListLoading, newMoreLoding } = storeToRefs(movieStore)

watch(
  () => route.params.type,
  () => {
    movieMoreList.value = []
    movieStore.getMovieMore(page, route.params.type, route.query.keyword)
  },
  {
    immediate: true,
  },
)

let debounceTimer = null
const onScroll = () => {
  if (debounceTimer) clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => {
    const nearBottom =
      window.innerHeight + window.scrollY + 100 > document.documentElement.offsetHeight
    if (nearBottom) {
      movieStore.getMovieMore(++page, route.params.type, route.query.keyword)
    }
  }, 200)
}

onMounted(() => {
  addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  removeEventListener('scroll', onScroll)
})
</script>
<template>
  <ListMovie
    :movies="movieMoreList"
    :loading="movieMoreListLoading"
    :more-loading="newMoreLoding"
  />
</template>
<style scoped></style>
