<template>
  <ListMovie
    :movies="movieMoreList"
    :loading="movieMoreListloading"
    :moreLoading="newMoreLoading"
  />
</template>

<script setup>
import ListMovie from '@/components/list/ListMovie.vue'
import { useMovieStore } from '@/stores/movie'
import { storeToRefs } from 'pinia'
import { onBeforeUnmount, onMounted } from 'vue'
import { useRoute } from 'vue-router'

let page = 1
const route = useRoute()
const type = route.params.type
const keyword = route.query.keyword
const movieStore = useMovieStore()
const { movieMoreList, movieMoreListloading, newMoreLoading } = storeToRefs(movieStore)

let debounceTimer = null
const onScroll = () => {
  if (debounceTimer) clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => {
    const nearBottom =
      window.innerHeight + window.scrollY + 100 > document.documentElement.offsetHeight
    if (nearBottom) {
      movieStore.getMovieMore(++page, type, keyword)
    }
  }, 200)
}

onMounted(() => {
  movieStore.getMovieMore(page, type, keyword)
  window.addEventListener('scroll', onScroll)
})

onBeforeUnmount(() => {
  movieMoreList.value = []
  window.removeEventListener('scroll', onScroll)
})
</script>

<style lang="scss" scoped></style>
