<script setup>
import { computed } from 'vue'

const props = defineProps({
  infomationcast: Array,
  infomationcrew: Array,
  detail: Array,
  mdloading: Boolean,
  mlloading: Boolean,
})

const castFilter = computed(() => {
  const castfilter = props.infomationcast.filter(
    (person) => person.known_for_department === 'Acting',
  )
  return castfilter.slice(0, 6)
})

const crewByDepartment = computed(() => {
  const directing = props.infomationcrew.filter(
    (person) => person.known_for_department === 'Directing',
  )
  const production = props.infomationcrew.filter(
    (person) => person.known_for_department === 'Production',
  )

  return { directing, production }
})
</script>
<template>
  <section v-if="!props.mlloading && !props.mdloading" class="detail">
    <div class="detail-wrap">
      <div class="detail-info">
        <h2 class="detail-title">{{ detail.title }}</h2>
        <ul class="detail-features">
          <li class="features-item">
            <div class="progress-circle p50">
              <span>{{ Math.floor(detail.vote_average * 10) }}%</span>
              <div class="left-half-clipper">
                <div class="first50-bar"></div>
                <div class="value-bar"></div>
              </div>
            </div>
          </li>
          <li v-for="genre in detail.genres" :key="genre.id" class="features-item">
            {{ genre.name }}
          </li>
          <li class="features-item">
            {{ Math.floor(detail.runtime / 60) }}h {{ detail.runtime % 60 }}m
          </li>
        </ul>
        <p class="detail-desc">
          {{ detail.overview }}
        </p>
        <ul class="detail-maker">
          <li>
            <strong>Director</strong>
            :
            <template v-for="directing in crewByDepartment.directing" :key="directing.id">
              <span>{{ directing.name }}, </span>
            </template>
          </li>
          <li>
            <strong>Casting</strong>
            :
            <template v-for="cast in castFilter" :key="cast.id"> {{ cast.name }}, </template>
            <span>...</span>
          </li>
          <li>
            <strong>Production</strong>
            :
            <span>
              <template v-for="production in crewByDepartment.production" :key="production.id">
                <span>{{ production.name }}, </span>
              </template></span
            >
          </li>
        </ul>
      </div>
      <div class="detail-poster">
        <img :src="`https://image.tmdb.org/t/p/w500/${detail.poster_path}`" alt="" />
      </div>
    </div>
    <!-- <div class="detail-wrap">
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
    </div> -->
  </section>
</template>
<style scoped></style>
