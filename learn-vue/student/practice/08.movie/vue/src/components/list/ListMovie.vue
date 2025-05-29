<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const props = defineProps({
  movies: Array,
  loading: Boolean,
  moreLoading: Boolean,
})

const title = computed(() => {
  const type = route.params.type
  switch (type) {
    case 'now_playing':
      return '현재 상영중인 영화'
    case 'popular':
      return '인기 있는 영화'
    case 'upcoming':
      return '개봉예정 영화'
    case 'top_rated':
      return '높은 평점을 받은 영화'
    case 'search':
      return `'${route.query.keyword}' 검색 결과`
  }
  return ''
})
</script>
<template>
  <section class="movie list">
    <h4 class="movie-subtext">{{ title }}</h4>
    <div class="movie-list">
      <template v-if="props.loading">
        <div class="movie-list__item">
          <a href="#" class="skeleton-list-item ui0"></a>
        </div>
      </template>
      <template v-else>
        <div v-for="movie in props.movies" :key="movie.id" class="movie-list__item">
          <RouterLink :to="`/detail/${movie.id}`">
            <figure>
              <img :src="`https://image.tmdb.org/t/p/w300/${movie.poster_path}`" alt="" />
            </figure>
            <div class="movie-list__txt">
              <div class="progress-circle p50">
                <span>10%</span>
                <div class="left-half-clipper">
                  <div class="first50-bar"></div>
                  <div class="value-bar"></div>
                </div>
              </div>
              <strong class="movie-list__title">{{ movie.title }}</strong>
              <p class="movie-list__desc">
                {{ movie.overview }}
              </p>
              <span class="movie-list__release">2023.11.21 / 평점 7.3</span>
            </div>
          </RouterLink>
        </div>
      </template>
      <template v-if="props.moreLoading">
        <div v-for="(_, index) in new Array(20)" :key="index" class="movie-list__item">
          <a href="#" class="skeleton-list-item ui0"></a>
        </div>
      </template>
    </div>
  </section>
</template>
<style scoped></style>
