import axios from 'axios'
const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYWU3MGE5ZjhiZjY5OTg3MTY3ZmIyZmNlM2M4YjkwMSIsIm5iZiI6MTc0NTQ2MzAyNi4yMDUsInN1YiI6IjY4MDlhNmYyYzVjODAzNWZiMDhhZjdmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jZhu_KiYE3bCr-1ieqVZqxilx7oGVgtIGB2DFw3OjSY',
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
