import { useFetch } from '@/composables/useFetch'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDetailStore = defineStore('detail', () => {
  const videoKey = ref(null)
  const videoLoading = ref(true)
  const getTrailer = async (id) => {
    videoLoading.value = true
    try {
      const response = await useFetch(`movie/${id}/videos`)
      videoKey.value = response.data.results[0].key
      videoLoading.value = false
    } catch (err) {
      console.error(err)
    }
  }

  const detailInfo = ref(null)
  const detailLoading = ref(true)
  const getDetail = async (id) => {
    detailLoading.value = true
    try {
      const response = await useFetch(`movie/${id}`, 'get', {
        language: 'ko',
      })
      detailInfo.value = response.data
      detailLoading.value = false
      const genres = response.data.genres.map((genre) => genre.id)
      getMovieRelative(genres.join(','))
    } catch (err) {
      console.error(err)
    }
  }

  const credits = ref(null)
  const getCredits = async (id) => {
    try {
      const response = await useFetch(`movie/${id}/credits`)
      credits.value = response.data
    } catch (err) {
      console.error(err)
    }
  }
  //비슷한 장르의 영화 목록
  const movieRelativeList = ref([])
  const movieRelativeListLoading = ref(false)

  const getMovieRelative = async (genres) => {
    try {
      movieRelativeListLoading.value = true
      const response = await useFetch('discover/movie', 'get', {
        language: 'ko',
        page: 1,
        with_genres: genres,
      })
      movieRelativeList.value = response.data.results
      movieRelativeListLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  return {
    videoKey,
    videoLoading,
    getTrailer,
    detailInfo,
    detailLoading,
    getDetail,
    credits,
    getCredits,
    movieRelativeList,
    movieRelativeListLoading,
  }
})
