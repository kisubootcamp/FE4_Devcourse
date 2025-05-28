<template>
  <section class="movie">
    <h3 class="movie-category">{{ subTitle }}</h3>
    <h4 class="movie-subtext">
      {{ title }} <router-link :to="`/movie/${type}`">더보기</router-link>
    </h4>
    <div class="movie-list">
      <template v-if="loading">
        <div class="movie-list__item" v-for="i in 5" :key="i">
          <a href="#" class="skeleton-list-item ui0"> </a>
        </div>
      </template>
      <template v-else>
        <swiper
          :slides-per-view="1"
          :breakpoints="{
            '380': {
              slidesPerView: 2,
            },
            '480': {
              slidesPerView: 3,
            },
            '740': {
              slidesPerView: 4,
            },
            '980': {
              slidesPerView: 5,
            },
          }"
        >
          <swiper-slide v-for="movie in movies" :key="movie.id">
            <div class="movie-list__item">
              <router-link :to="`/detail/${movie.id}`">
                <figure>
                  <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="" />
                </figure>
                <div class="movie-list__txt">
                  <div
                    class="progress-circle"
                    :class="[
                      `p${Math.floor(movie.vote_average * 10)}`,
                      { over50: Math.floor(movie.vote_average * 10) > 50 },
                    ]"
                  >
                    <span>{{ Math.floor(movie.vote_average * 10) }}%</span>
                    <div class="left-half-clipper">
                      <div class="first50-bar"></div>
                      <div class="value-bar"></div>
                    </div>
                  </div>
                  <strong class="movie-list__title">{{ movie.title }}</strong>
                  <span class="release_date">{{ movie.release_date }}</span>
                </div>
              </router-link>
            </div>
          </swiper-slide>
        </swiper>
      </template>
    </div>
  </section>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
const { title, subTitle, type, movies, loading } = defineProps({
  title: String,
  subTitle: String,
  type: String,
  movies: Array,
  loading: Boolean,
})
</script>

<style lang="scss" scoped></style>
