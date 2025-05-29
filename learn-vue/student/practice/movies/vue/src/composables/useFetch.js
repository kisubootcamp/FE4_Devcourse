import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzE3N2MzMTlkOTgxYTg5Yzk3ZjZhYWZkOTUyMWVkMiIsIm5iZiI6MTc0NTQ2MzI2My4zOTYsInN1YiI6IjY4MDlhN2RmMjc2YmY2NGU0MWFiOGMzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I28jCQzIIEb6c9xKeDJTkkSWn3DvkmEOZ-rVXoftbIs',
  },
})

// export const fetchMovies = async () => {
//   const { data } = await axiosInstance.get('/movies/now_playing')
//   return data
// }
//공통으로 사용할 수 있는 함수 composable
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
