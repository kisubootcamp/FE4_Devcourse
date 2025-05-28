<template>
  <section class="movie list">
    <h4 class="movie-subtext">{{ title }}</h4>
    <div class="movie-list">
      <template v-if="loading">
        <div class="movie-list__item" v-for="i in 20" :key="i">
          <a href="#" class="skeleton-list-item ui0"></a>
        </div>
      </template>
      <template v-else>
        <div class="movie-list__item" v-for="movie in movies" :key="movie.id">
          <router-link :to="`/movie/${movie.id}`">
            <figure>
              <img :src="`https://image.tmdb.org/t/p/w300/${movie.poster_path}`" alt="" />
            </figure>
            <div class="movie-list__txt">
              <div
                class="progress-circle"
                :class="[
                  `p${moviePercent(movie.vote_average)}`,
                  { over50: moviePercent(movie.vote_average) > 50 },
                ]"
              >
                <span>{{ moviePercent(movie.vote_average) }}%</span>
                <div class="left-half-clipper">
                  <div class="first50-bar"></div>
                  <div class="value-bar"></div>
                </div>
              </div>
              <strong class="movie-list__title">{{ movie.title }}</strong>
              <span class="movie-list__release">{{ movie.release_date }}</span>
            </div>
          </router-link>
        </div>
      </template>
      <template v-if="moreLoading">
        <div class="movie-list__more" v-for="i in 20" :key="i">
          <a href="#" class="skeleton-list-item ui0"></a>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const moviePercent = (vote_average) => {
  return Math.floor(vote_average * 10)
}

const route = useRoute()
const { movies, loading, moreLoading } = defineProps({
  movies: Array,
  loading: Boolean,
  moreLoading: Boolean,
})

const type = route.params.type
const title = computed(() => {
  switch (type) {
    case 'now_playing':
      return '현재 상영중인 영화'
    case 'popular':
      return '인기 영화'
    case 'upcoming':
      return '개봉 예정 영화'
    case 'top_rated':
      return '평점 높은 영화'
    case 'search':
      return `${route.query.keyword} 검색 결과`
    default:
      return ''
  }
})
</script>

<style lang="scss" scoped></style>
