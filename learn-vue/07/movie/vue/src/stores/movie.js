import { useFetch } from '@/composables/useFetch'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMovieStore = defineStore('movie', () => {
  // 현재 상영중인 영화목록
  const moviePlayingList = ref([])
  const moviePlayingListLoading = ref(false)

  const getMoviePlaying = async (page = 1) => {
    try {
      moviePlayingListLoading.value = true
      const response = await useFetch('/movie/now_playing', 'get', {
        language: 'ko',
        page,
      })
      moviePlayingList.value = response.data.results
      moviePlayingListLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  // 인기 있는 영화 목록
  const moviePopularList = ref([])
  const moviePopularListLoading = ref(false)
  const getMoviePopular = async (page = 1) => {
    try {
      moviePopularListLoading.value = true
      const response = await useFetch('/movie/popular', 'get', {
        language: 'ko',
        page,
      })
      moviePopularList.value = response.data.results
      moviePopularListLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  // 개봉 예정 영화
  const movieUpComingList = ref([])
  const movieUpComingListLoading = ref(false)
  const getMovieUpComing = async (page = 1) => {
    try {
      movieUpComingListLoading.value = true
      const response = await useFetch('/movie/upcoming', 'get', {
        language: 'ko',
        page,
      })
      movieUpComingList.value = response.data.results
      movieUpComingListLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  // 평점 높은 영화
  const movieTopRatedList = ref([])
  const movieTopRatedListLoading = ref(false)
  const getMovieTopRated = async (page = 1) => {
    try {
      movieTopRatedListLoading.value = true
      const response = await useFetch('/movie/top_rated', 'get', {
        language: 'ko',
        page,
      })
      movieTopRatedList.value = response.data.results
      movieTopRatedListLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  let movieTotalPages = 500 // max 500
  const movieMoreList = ref([])
  const movieMoreListLoading = ref(false)
  const newMoreLoading = ref(false) // 더보기했을떄 로딩

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
        response = await useFetch('/search/movie', 'get', {
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

  // 영화 비디오트레일러
  const movieVideoList = ref([])
  const movieVideoListLoading = ref(false)
  const getVideo = async (movieId) => {
    try {
      movieVideoListLoading.value = true
      const response = await useFetch(`/movie/${movieId}/videos`, 'get', {
        language: 'ko',
      })
      movieVideoList.value = response.data.results
      movieVideoListLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  // 영화 정보
  const movieInfomationCastList = ref([])
  const movieInfomationCrewList = ref([])
  const movieInfomationListLoading = ref(false)
  const getInfomation = async (movieId) => {
    try {
      movieInfomationListLoading.value = true
      const response = await useFetch(`/movie/${movieId}/credits`, 'get', {
        language: 'ko',
      })
      movieInfomationCastList.value = response.data.cast
      movieInfomationCrewList.value = response.data.crew
      movieInfomationListLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  // 영화 디테일정보
  const movieDetailList = ref([])
  const movieDetailListLoading = ref(false)
  const getDetail = async (movieId) => {
    try {
      movieDetailListLoading.value = true
      const response = await useFetch(`/movie/${movieId}`, 'get', {
        language: 'ko',
      })
      movieDetailList.value = response.data
      movieDetailListLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  return {
    moviePlayingList,
    moviePlayingListLoading,
    moviePopularList,
    moviePopularListLoading,
    movieUpComingList,
    movieUpComingListLoading,
    movieTopRatedList,
    movieTopRatedListLoading,
    movieMoreList,
    movieMoreListLoading,
    newMoreLoading,
    movieVideoList,
    movieVideoListLoading,
    movieInfomationCastList,
    movieInfomationCrewList,
    movieInfomationListLoading,
    movieDetailList,
    movieDetailListLoading,
    getMoviePlaying,
    getMoviePopular,
    getMovieUpComing,
    getMovieTopRated,
    getMovieMore,
    getVideo,
    getInfomation,
    getDetail,
  }
})
