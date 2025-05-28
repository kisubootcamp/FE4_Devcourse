<script setup>
import { RouterLink, useRoute } from 'vue-router'

const props = defineProps({
  movies: Array,
  loading: Boolean,
  moreLoading: Boolean,
})

const route = useRoute()

const movieType = {
  now_playing: '현재 상영중인 영화',
  popular: '인기 있는 영화',
  upcoming: '개봉예정 영화',
  top_rated: '고평점 영화',
  search: `${route.query.keyword} 검색 결과`,
}
console.log(props.moreLoading)
</script>
<template>
  <section class="movie list">
    <h4 class="movie-subtext">{{ movieType[route.params.type] }}</h4>
    <div class="movie-list">
      <template v-if="props.loading">
        <div v-for="(_, index) in new Array(20).fill(0)" :key="index" class="movie-list__item">
          <a href="#" class="skeleton-list-item ui0"></a>
        </div>
      </template>
      <template v-else>
        <div v-for="movie in props.movies" :key="movie.id" class="movie-list__item">
          <RouterLink :to="`/detail/${movie.id}`">
            <figure>
              <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="" />
            </figure>
            <div class="movie-list__txt">
              <div class="progress-circle p50">
                <span>{{ parseInt(movie.vote_average * 10) }}%</span>
                <div class="left-half-clipper">
                  <div class="first50-bar"></div>
                  <div class="value-bar"></div>
                </div>
              </div>
              <strong class="movie-list__title">{{ movie.title }}</strong>
              <p class="movie-list__desc">
                {{ movie.overview }}
              </p>
              <span class="movie-list__release"
                >{{ movie.release_date }} / 평점 {{ movie.vote_average }}</span
              >
            </div>
          </RouterLink>
        </div>
      </template>
      <template v-if="props.moreLoading">
        <div v-for="(_, index) in new Array(20).fill(0)" :key="index" class="movie-list__item">
          <a href="#" class="skeleton-list-item ui0"></a>
        </div>
      </template>
    </div>
  </section>
</template>
<style scoped></style>
