import { useFetch } from '@/api/useFetch'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMovieStore = defineStore('movie', () => {
  // 현재 상영중인 영화 목록
  const moviePlayingList = ref([])
  const moviePlayingListLoading = ref(false)

  const getMoviePlaying = async (page = 1) => {
    try {
      moviePlayingListLoading.value = true
      const res = await useFetch('/movie/now_playing', 'get', {
        language: 'ko',
        page,
      })
      moviePlayingList.value = res.data.results
      moviePlayingListLoading.value = false
    } catch (e) {
      console.log(e)
    }
  }

  // 인기있는 영화목록
  const moviePopularList = ref([])
  const moviePopularListLoading = ref(false)

  const getMoviePopular = async (page = 1) => {
    try {
      moviePopularListLoading.value = true
      const res = await useFetch('/movie/popular', 'get', {
        language: 'ko',
        page,
      })
      moviePopularList.value = res.data.results
      moviePopularListLoading.value = false
    } catch (e) {
      console.log(e)
    }
  }

  // 개봉 예정 영화

  const movieUpcomingList = ref([])
  const movieUpcomingListLoading = ref(false)

  const getMovieUpcoming = async (page = 1) => {
    try {
      movieUpcomingListLoading.value = true
      const res = await useFetch('/movie/upcoming', 'get', {
        language: 'ko',
        page,
      })
      movieUpcomingList.value = res.data.results
      movieUpcomingListLoading.value = false
    } catch (e) {
      console.log(e)
    }
  }

  // 평점 높은 영화

  const movieTopRatedList = ref([])
  const movieTopRatedListLoading = ref(false)

  const getMovieTopRated = async (page = 1) => {
    try {
      movieTopRatedListLoading.value = true
      const res = await useFetch('/movie/top_rated', 'get', {
        language: 'ko',
        page,
      })
      movieTopRatedList.value = res.data.results
      movieTopRatedListLoading.value = false
    } catch (e) {
      console.log(e)
    }
  }

  // 영화 더보기
  let movieTotalPages = 500 // 500 Max
  const movieMoreList = ref([])
  const movieMoreListLoading = ref(false)
  const newMoreLoading = ref(false)
  const getMovieMore = async (page = 1, type = 'now_playing', query = '') => {
    if (movieTotalPages < page) return
    if (page === 1) movieMoreListLoading.value = true
    if (page > 1) newMoreLoading.value = true
    try {
      let response = null
      if (query === '') {
        response = await useFetch(`/movie/${type}`, 'get', {
          language: 'ko',
          page,
        })
      } else {
        response = await useFetch(`/search/movie`, 'get', {
          language: 'ko',
          query,
          page,
        })
      }
      movieTotalPages = Math.min(500, response.data.total_pages)
      movieMoreList.value = [...movieMoreList.value, ...response.data.results]
      movieMoreListLoading.value = false
      newMoreLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  // 영화 trailer
  const movieDetailTrailerList = ref('')
  const movieDetailTrailerLoading = ref(false)

  const getMovieDetailTrailer = async (id) => {
    try {
      movieDetailTrailerLoading.value = true
      const res = await useFetch(`/movie/${id}/videos`, 'get', {
        language: 'ko',
      })
      // console.log(res)
      movieDetailTrailerList.value = res.data.results[0].key
      movieDetailTrailerLoading.value = false
    } catch (e) {
      console.log(e)
    }
  }

  // overview
  const movieDetailOverviewList = ref([])
  const movieDetailOverviewLoading = ref(false)

  const getMovieDetailOverview = async (id) => {
    console.log(id)
    try {
      movieDetailOverviewLoading.value = true
      const res = await useFetch(`/movie/${id}/`, 'get', {
        language: 'ko',
      })
      console.log(res)
      movieDetailOverviewList.value = res.data
      movieDetailOverviewLoading.value = false
    } catch (e) {
      console.log(e)
    }
  }

  // credits
  // 관련 장르
  return {
    moviePlayingList,
    moviePlayingListLoading,
    moviePopularList,
    moviePopularListLoading,
    movieUpcomingList,
    movieUpcomingListLoading,
    movieTopRatedList,
    movieTopRatedListLoading,
    movieMoreList,
    movieMoreListLoading,
    newMoreLoading,
    movieDetailTrailerList,
    movieDetailTrailerLoading,
    movieDetailOverviewList,
    movieDetailOverviewLoading,

    getMoviePlaying,
    getMoviePopular,
    getMovieUpcoming,
    getMovieTopRated,
    getMovieMore,
    getMovieDetailTrailer,
    getMovieDetailOverview,
  }
})
