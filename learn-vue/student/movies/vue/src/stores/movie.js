import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useFetch } from '@/composables/useFetch'

export const useMovieStore = defineStore('movie', () => {
  // 상영중인 영화
  const moviePlayingList = ref([])
  const moviePlayingListLoading = ref(false)
  const getMoviePlaying = async (page = 1) => {
    try {
      moviePlayingListLoading.value = true
      const response = await useFetch('/movie/now_playing', 'GET', {
        language: 'ko-KR',
        page,
      })
      moviePlayingList.value = response.data.results
      moviePlayingListLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  // 인기 영화
  const moviePopularList = ref([])
  const moviePopularListLoading = ref(false)
  const getMoviePopular = async (page = 1) => {
    try {
      moviePopularListLoading.value = true
      const response = await useFetch('/movie/popular', 'GET', {
        language: 'ko-KR',
        page,
      })
      moviePopularList.value = response.data.results
      moviePopularListLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  // 개봉 예정
  const movieUpComingList = ref([])
  const movieUpComingListLoading = ref(false)
  const getMovieUpComing = async (page = 1) => {
    try {
      movieUpComingListLoading.value = true
      const response = await useFetch('/movie/upcoming', 'GET', {
        language: 'ko-KR',
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
      const response = await useFetch('/movie/top_rated', 'GET', {
        language: 'ko-KR',
        page,
      })
      movieTopRatedList.value = response.data.results
      movieTopRatedListLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  let movieTotalPages = 500
  const movieMoreList = ref([])
  const newMoreLoading = ref(false) // 더보기 했을 때의 로딩
  const movieMoreListloading = ref(false)
  const getMovieMore = async (page = 1, type = 'now_playing', query = '') => {
    if (movieTotalPages < page) return
    if (page === 1) movieMoreListloading.value = true
    if (page > 1) newMoreLoading.value = true
    try {
      let response = null
      if (query === '') {
        response = await useFetch(`/movie/${type}`, 'GET', {
          language: 'ko-KR',
          page,
        })
      } else {
        response = await useFetch(`/search/movie`, 'GET', {
          language: 'ko-KR',
          page,
          query,
        })
      }
      movieTotalPages = Math.min(500, response.data.total_pages)
      movieMoreList.value = [...movieMoreList.value, ...response.data.results]
      movieMoreListloading.value = false
      newMoreLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  return {
    moviePlayingList,
    moviePlayingListLoading,
    getMoviePlaying,

    moviePopularList,
    moviePopularListLoading,
    getMoviePopular,

    movieUpComingList,
    movieUpComingListLoading,
    getMovieUpComing,

    movieTopRatedList,
    movieTopRatedListLoading,
    getMovieTopRated,

    movieMoreList,
    movieMoreListloading,
    newMoreLoading,
    getMovieMore,
  }
})
