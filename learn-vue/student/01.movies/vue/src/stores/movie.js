import { useFetch } from '@/composables/useFetch'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMovieStore = defineStore('movie', () => {
  // 현재 영화
  const moviePlayList = ref([])
  const moviePlayingListLoading = ref(false)

  const getMoviePlaying = async (page = 1) => {
    try {
      moviePlayingListLoading.value = true
      const response = await useFetch('/movie/now_playing', 'get', {
        language: 'ko',
        page,
      })
      moviePlayList.value = response.data.results
      moviePlayingListLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }
  //인기 영화
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

  //개봉 예정 영화
  const movieUpCommingList = ref([])
  const movieUpCommingListLoading = ref(false)
  const getMovieUpcomming = async (page = 1) => {
    try {
      movieUpCommingListLoading.value = true
      const response = await useFetch('/movie/upcoming', 'get', {
        language: 'ko',
        page,
      })
      movieUpCommingList.value = response.data.results
      movieUpCommingListLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  //개봉 예정 영화
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

  let movieTotalPages = 500 // 500Max
  const movieMoreList = ref([])
  const movieMoreListLoading = ref(false)
  const newMoreLoading = ref(false) // 더보기 했을 때의 로딩
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
      movieTotalPages = Math.min(500, response.data.total_page)
      movieMoreList.value = [...movieMoreList.value, ...response.data.results]
      movieMoreListLoading.value = false
      newMoreLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  const movieDetail = ref([])
  const movieDetailLoading = ref(false)
  const getMovieDetail = async (movie_id) => {
    try {
      movieDetailLoading.value = true
      const response = await useFetch(`/movie/${movie_id}`, 'get', {
        language: 'ko',
      })
      movieDetail.value = response.data
      console.log(response)
      movieDetailLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  return {
    moviePlayList,
    moviePlayingListLoading,
    getMoviePlaying,

    getMoviePopular,
    moviePopularList,
    moviePopularListLoading,

    movieUpCommingList,
    movieUpCommingListLoading,
    getMovieUpcomming,

    movieTopRatedList,
    movieTopRatedListLoading,
    getMovieTopRated,

    movieMoreList,
    movieMoreListLoading,
    getMovieMore,
    newMoreLoading,

    movieDetail,
    movieDetailLoading,
    getMovieDetail,
  }
})
