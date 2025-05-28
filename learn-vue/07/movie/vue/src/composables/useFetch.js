import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTZlOGRmYjA0ZjE1MmFjN2NjNTBkZWRlMmJiZmZjYSIsIm5iZiI6MTc0NTQ2MzE0NS4wOTUsInN1YiI6IjY4MDlhNzY5Mjc2YmY2NGU0MWFiOGMxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cLXdKhEcm9EiUGuSMlMJbBHTU_kdQYPCXc8bIVlkD_I',
  },
})

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
