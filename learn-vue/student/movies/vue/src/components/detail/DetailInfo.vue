<script setup>
import { computed } from 'vue'

const props = defineProps({
  movie: Object,
  loading: Boolean,
  credits: Object,
  loading2: Boolean,
})

const movieDirectors = computed(() => {
  const crew = props.credits?.crew
  if (!crew) return []
  return crew.filter((person) => person.known_for_department === 'Directing')[0].name
})

const movieActings = computed(() => {
  const cast = props.credits?.cast
  if (!cast) return []
  return cast.filter((person) => person.known_for_department === 'Acting').slice(0, 4)
})

const formattedRuntime = computed(() => {
  const hours = Math.floor(props.movie.runtime / 60)
  const minutes = props.movie.runtime % 60
  return `${hours}h ${minutes}m`
})
</script>
<template>
  <section class="detail">
    <div class="detail-wrap" v-if="!props.loading && !props.loading2">
      <div class="detail-info">
        <h2 class="detail-title">{{ props.movie.title }}</h2>
        <ul class="detail-features">
          <li class="features-item">
            <div
              class="progress-circle"
              :class="[
                `p${Math.floor(props.movie.vote_average * 10)}`,
                { over50: Math.floor(props.movie.vote_average * 10) > 50 },
              ]"
            >
              <span>{{ Math.floor(props.movie.vote_average * 10) }}%</span>
              <div class="left-half-clipper">
                <div class="first50-bar"></div>
                <div class="value-bar"></div>
              </div>
            </div>
          </li>
          <li class="features-item" v-for="genre in props.movie.genres" :key="genre.id">
            {{ genre.name }}
          </li>
          <li class="features-item">{{ formattedRuntime }}</li>
        </ul>
        <p class="detail-desc">
          {{ props.movie.overview }}
        </p>
        <ul class="detail-maker">
          <li>
            <strong>Director</strong>
            :
            <span>{{ movieDirectors }}</span>
          </li>
          <li>
            <strong>Casting</strong>
            :
            <span v-for="(casting, index) in movieActings" :key="casting.id"
              ><template v-if="index !== 0">•</template>{{ casting.name }}</span
            >
          </li>
          <li>
            <strong>Production</strong>
            :
            <span v-for="(company, index) in props.movie.production_companies" :key="company.id">
              <template v-if="index !== 0">•</template>{{ company.name }}
            </span>
          </li>
        </ul>
      </div>
      <div class="detail-poster">
        <img :src="`https://image.tmdb.org/t/p/w500//${props.movie.poster_path}`" alt="" />
      </div>
    </div>
    <div class="detail-wrap" v-else>
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
