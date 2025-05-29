<script setup>
import { computed } from 'vue'

const props = defineProps({
  detailInfo: Object,
  loading: Boolean,
  credits: Object,
})

const movie = computed(() => props.detailInfo)
const director = computed(() => props.credits.crew.find((credit) => credit.job === 'Director'))
const casting = computed(() =>
  props.credits.cast.filter((credit) => credit.known_for_department === 'Acting').slice(0, 4),
)
const production = computed(() =>
  props.detailInfo.production_companies.map((company) => company.name),
)
</script>
<template>
  <section class="detail">
    <div v-if="!props.loading && props.credits" class="detail-wrap">
      <div class="detail-info">
        <h2 class="detail-title">{{ movie.title }}</h2>
        <ul class="detail-features">
          <li class="features-item">
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
          </li>
          <li v-for="genre in movie.genres" :key="genre.id" class="features-item">
            {{ genre.name }}
          </li>
          <li class="features-item">
            {{ Math.floor(movie.runtime / 60) }}h {{ movie.runtime % 60 }}m
          </li>
        </ul>
        <p class="detail-desc">
          {{ movie.overview }}
        </p>
        <ul class="detail-maker">
          <li>
            <strong>Director</strong>
            :
            <span> {{ director.name }}</span>
          </li>
          <li>
            <strong>Casting</strong>
            :
            <span v-for="member in casting" :key="member.id">
              {{ member.name }}
            </span>
          </li>
          <li>
            <strong>Production</strong>
            :
            <span v-for="company in production" :key="company">
              {{ company }}
            </span>
          </li>
        </ul>
      </div>
      <div class="detail-poster">
        <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="" />
      </div>
    </div>
    <div v-else class="detail-wrap">
      <div class="detail-info">
        <h2 class="detail-title skeleton-list-item ui3"></h2>
        <ul class="detail-features skeleton-list-item ui4"></ul>
        <p class="skeleton-list-item ui4"></p>
        <ul class="detail-maker">
          <li class="skeleton-list-item ui5"></li>
          <li class="skeleton-list-item ui5"></li>
          <li class="skeleton-list-item ui5"></li>
        </ul>
      </div>
      <div class="detail-poster">
        <a href="#" class="skeleton-list-item ui0"></a>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
