import { useFetch } from '@/composables/useFetch'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMovieStore = defineStore('movie', () => {
  //현재 상영중인 영화 목록
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

  //인기 있는 영화 목록
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

  //개봉 예정 영화 목록
  const movieUpcomingList = ref([])
  const movieUpcomingListLoading = ref(false)

  const getMovieUpcoming = async (page = 1) => {
    try {
      movieUpcomingListLoading.value = true
      const response = await useFetch('/movie/upcoming', 'get', {
        language: 'ko',
        page,
      })
      movieUpcomingList.value = response.data.results
      movieUpcomingListLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }
  //가장 평점 높은 영화 목록
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

  let movieTotalPages = 500 // 500 Max
  const movieMoreList = ref([])
  const movieMoreListLoading = ref(false)
  const newMoreLoding = ref(false)

  const getMovieMore = async (page = 1, type = 'now_playing', query = '') => {
    if (movieTotalPages < page) return
    if (page === 1) movieMoreListLoading.value = true
    if (page > 1) newMoreLoding.value = true
    try {
      let response
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
      movieMoreList.value = movieMoreList.value.concat(response.data.results)
      movieMoreListLoading.value = false
      newMoreLoding.value = false
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
    movieUpcomingList,
    movieUpcomingListLoading,
    getMovieUpcoming,
    movieTopRatedList,
    movieTopRatedListLoading,
    getMovieTopRated,
    movieMoreList,
    movieMoreListLoading,
    newMoreLoding,
    getMovieMore,
  }
})
