<template>
  <header class="header">
    <router-link to="/"><h1 class="header__logo">Wave</h1></router-link>
    <ul class="header__navi">
      <li>
        <router-link to="/movie/now_playing">상영중</router-link>
      </li>
      <li>
        <router-link to="/movie/popular">인기작</router-link>
      </li>
      <li>
        <router-link to="/movie/upcoming">개봉예정</router-link>
      </li>
      <li>
        <router-link to="/movie/top_rated">높은평점</router-link>
      </li>
    </ul>
    <div class="header-search">
      <input
        type="text"
        class="header-search__input"
        placeholder="제목으로 찾아보세요."
        v-model="keyword"
        @keydown.enter="search"
      />
      <span class="material-symbols-outlined icon" @click="search"> search </span>
    </div>
  </header>
  <nav class="navigator">
    <ul class="navigator-list">
      <li class="navigator-list__item">
        <img src="@/assets/icons/home.png" alt="" class="navigator-list__icon" />
        <strong class="navigator-list__txt">메인</strong>
      </li>
      <li class="navigator-list__item">
        <img src="@/assets/icons/live.png" alt="" class="navigator-list__icon" />
        <strong class="navigator-list__txt">상영중</strong>
      </li>
      <li class="navigator-list__item">
        <img src="@/assets/icons/popluar.png" alt="" class="navigator-list__icon" />
        <strong class="navigator-list__txt">인기작</strong>
      </li>
      <li class="navigator-list__item">
        <img src="@/assets/icons/video.png" alt="" class="navigator-list__icon" />
        <strong class="navigator-list__txt">개봉예정</strong>
      </li>
      <li class="navigator-list__item" @click="searchFlag = true">
        <img src="@/assets/icons/search.png" alt="" class="navigator-list__icon" />
        <strong class="navigator-list__txt">검색</strong>
      </li>
    </ul>
  </nav>
  <section class="search-box" v-if="searchFlag">
    <div class="search-input">
      <div class="search-wrap">
        <button @click="searchFlag = false">x</button>
        <input
          type="text"
          placeholder="영화 제목을 입력하세요"
          autocomplete="off"
          v-model="keyword"
          @keydown.enter="search"
        />
        <span class="material-symbols-outlined icon" @click="search"> search </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const searchFlag = ref(false)
const router = useRouter()
const route = useRoute()

const keyword = ref('')

const search = () => {
  searchFlag.value = false
  router.push('/movie/search?keyword=' + keyword.value)
}

onMounted(() => {
  keyword.value = route.query.keyword
})
</script>

<style lang="scss" scoped></style>
