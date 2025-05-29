import axios from 'axios'
const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGJhYWU5ZGRiYzVlNzhjZTk0Y2FlODQxOWQxMmFkNCIsIm5iZiI6MTc0ODI0MjI4Ny4wNDksInN1YiI6IjY4MzQwZjZmZDlmZWI4ZDI5Y2E4NmJlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Un9jNeKMfp7sS0VqcZRI17QrU73nJD8vRN-RaLUT5Vk',
  },
})

export async function useFetch(url, method = 'GET', payload, headers = {}) {
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
