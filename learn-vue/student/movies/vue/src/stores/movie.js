import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useFetch } from '../composables/useFetch'

export const useMovieStore = defineStore('movie', () => {
  const moviePlayingList = ref([])
  const moviePlayingListLoading = ref(false)

  const getMoviePlaying = async (page = 1) => {
    try {
      moviePlayingListLoading.value = true
      const respose = await useFetch('/movie/now_playing', 'get', {
        language: 'ko',
        page,
      })
      moviePlayingList.value = respose.data.results
      moviePlayingListLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  const moviePopularList = ref([])
  const moviePopularListLoading = ref(false)

  const getMoviePopular = async (page = 1) => {
    try {
      moviePopularListLoading.value = true
      const respose = await useFetch('/movie/popular', 'get', {
        language: 'ko',
        page,
      })
      moviePopularList.value = respose.data.results
      moviePopularListLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  const movieUpcomingList = ref([])
  const movieUpcomingListLoading = ref(false)

  const getMovieUpcoming = async (page = 1) => {
    try {
      movieUpcomingListLoading.value = true
      const respose = await useFetch('/movie/upcoming', 'get', {
        language: 'ko',
        page,
      })
      movieUpcomingList.value = respose.data.results
      movieUpcomingListLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  const movieTopLatedList = ref([])
  const movieTopLatedListLoading = ref(false)

  const getMovieTopLated = async (page = 1) => {
    try {
      movieTopLatedListLoading.value = true
      const respose = await useFetch('/movie/top_rated', 'get', {
        language: 'ko',
        page,
      })
      movieTopLatedList.value = respose.data.results
      movieTopLatedListLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }
  let movieTotalPages = 500
  const movieMoreList = ref([])
  const movieMoreListLoding = ref(false)
  const newMoreLoading = ref(false)

  const getMovieMore = async (page = 1, type = 'now_playing', query = '') => {
    if (movieTotalPages < page) return
    if (page === 1) movieMoreListLoding.value = true
    if (page > 1) newMoreLoading.value = true
    try {
      let respose = null
      if (query === '') {
        respose = await useFetch(`/movie/${type}`, 'get', {
          language: 'ko',
          page,
        })
      } else {
        respose = await useFetch(`/search/movie`, 'get', {
          language: 'ko',
          query,
          page,
        })
      }
      movieTotalPages = Math.min(500, respose.data.total_pages)
      movieMoreList.value = [...movieMoreList.value, ...respose.data.results]
      movieMoreListLoding.value = false
      newMoreLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  const movieDetail = ref([])
  const movieDetailLoading = ref(false)
  const getMovieDetail = async (id = '') => {
    try {
      movieDetailLoading.value = true
      const respose = await useFetch(`/movie/${id}`, 'get', {
        language: 'ko',
      })
      movieDetail.value = respose.data
      movieDetailLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  const movieVideos = ref([])
  const movieVideosLoading = ref(false)
  const getMovieVideos = async (id = '') => {
    try {
      movieVideosLoading.value = true
      const respose = await useFetch(`/movie/${id}/videos`, 'get', {
        language: 'en-US',
      })
      movieVideos.value = respose.data.results
      movieVideosLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  const movieCredits = ref([])
  const movieCreditsLoading = ref(false)
  const getMovieCredits = async (id = '') => {
    try {
      movieCreditsLoading.value = true
      const respose = await useFetch(`/movie/${id}/credits`, 'get', {
        language: 'en-US',
      })
      movieCredits.value = respose.data
      movieCreditsLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  const movieDiscover = ref([])
  const movieDiscoverLoading = ref(false)
  const getMovieDiscover = async (id = '') => {
    try {
      const orQuery = id.join('%2C')
      movieDiscoverLoading.value = true
      const respose = await useFetch(`/discover/movie?with_genres=${orQuery}`, 'get', {
        include_adult: 'false',
        include_video: 'false',
        page: '1',
        sort_by: 'popularity.desc',
        language: 'ko',
      })
      movieDiscover.value = respose.data.results.slice(1)
      movieDiscoverLoading.value = false
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
    movieTopLatedList,
    movieTopLatedListLoading,
    getMovieTopLated,
    movieMoreList,
    movieMoreListLoding,
    getMovieMore,
    newMoreLoading,
    movieDetail,
    movieDetailLoading,
    getMovieDetail,
    movieVideos,
    movieVideosLoading,
    getMovieVideos,
    movieCredits,
    movieCreditsLoading,
    getMovieCredits,
    movieDiscover,
    movieDiscoverLoading,
    getMovieDiscover,
  }
})
