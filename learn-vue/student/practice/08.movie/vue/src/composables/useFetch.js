import axios from 'axios'

const baseURL = 'https://api.themoviedb.org/3/'
const accesstoken = import.meta.env.VITE_TMDB_API_KEY

const axiosInstance = axios.create({
  baseURL,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${accesstoken}`,
  },
})

export const fetchNowPlaying = async () => {
  try {
    const response = await axiosInstance.get('movie/now_playing', {
      params: { language: 'en-US', page: '1' },
    })
    return response.data
  } catch (e) {
    console.error(e)
  }
}

export async function useFetch(url, method = 'get', payload, headers = {}) {
  try {
    const options = {
      url,
      method,
      headers,
    }

    if (method === 'get' && payload) options.params = payload
    if (method !== 'get' && payload) options.data = payload

    const response = await axiosInstance(options)
    return response
  } catch (e) {
    console.error(e)
  }
}
