import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
})

export async function useFetch(url, method = 'GET', payload, headers = {}) {
  try {
    const options = {
      url,
      method,
      headers,
    }

    if (method === 'GET' && payload) options.params = payload
    if (method !== 'GET' && payload) options.data = payload

    const response = await axiosInstance(options)
    return response
  } catch (error) {
    console.error(error)
  }
}
