<template>
  <section class="detail">
    <div v-if="loading && creditLoading" class="detail-wrap">
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
    <div v-else class="detail-wrap">
      <div class="detail-info">
        <h2 class="detail-title">{{ movieDetail.title }}</h2>
        <ul class="detail-features">
          <li class="features-item">
            <div
              class="progress-circle"
              :class="[
                `p${Math.floor(movieDetail.vote_average * 10)}`,
                { over50: Math.floor(movieDetail.vote_average * 10) > 50 },
              ]"
            >
              <span>{{ Math.floor(movieDetail.vote_average * 10) }}%</span>
              <div class="left-half-clipper">
                <div class="first50-bar"></div>
                <div class="value-bar"></div>
              </div>
            </div>
          </li>
          <li class="features-item">
            {{ movieDetail?.genres?.map((genre) => genre.name).join(', ') }}
          </li>
          <li class="features-item">{{ convertMinutesToHours(movieDetail.runtime) }}</li>
        </ul>
        <p class="detail-desc">
          {{ movieDetail.overview }}
        </p>
        <ul class="detail-maker">
          <li>
            <strong>Director</strong>
            :
            <span>{{ director }}</span>
          </li>
          <li>
            <strong>Casting</strong>
            :
            <span>{{ casting }}</span>
          </li>
          <li>
            <strong>Production</strong>
            :
            <span>{{ production }}</span>
          </li>
        </ul>
      </div>
      <div class="detail-poster">
        <img :src="`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const { movieDetail, loading, movieCredit, creditLoading } = defineProps({
  movieDetail: Object,
  loading: Boolean,
  movieCredit: Object,
  creditLoading: Boolean,
})

const convertMinutesToHours = (minutes) => {
  const hours = Math.floor(minutes / 60)
  const remainMinutes = minutes % 60

  let result = ''
  if (hours > 0) {
    result += `${hours}h `
  }
  if (remainMinutes > 0 || hours === 0) {
    result += `${remainMinutes}m`
  }
  return result
}

const director = computed(() => {
  if (movieCredit && movieCredit?.crew && movieCredit?.crew?.length > 0) {
    return movieCredit.crew.filter((crew) => crew.job === 'Director').map((v) => v.name)[0]
  }
  return 'No Director'
})

const casting = computed(() => {
  if (movieCredit && movieCredit?.cast && movieCredit?.cast?.length > 0) {
    return movieCredit.cast
      .filter((v) => v.known_for_department === 'Acting' && v.order <= 4)
      .map((v) => v.name)
      .join(', ')
  }
  return 'No Casting'
})

const production = computed(() => {
  if (movieDetail && movieDetail?.production_companies?.length > 0) {
    return movieDetail.production_companies.map((company) => company.name).join(', ')
  }
  return null
})
</script>

<style lang="scss" scoped></style>
