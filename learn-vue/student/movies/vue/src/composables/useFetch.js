import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWY4MGRmZDZhOGE3N2RlMGEyYmE1ZDU3MDJiYThhNyIsIm5iZiI6MTc0NTQ2MzE5OS4wMTEwMDAyLCJzdWIiOiI2ODA5YTc5ZjI3NmJmNjRlNDFhYjhjMjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.y9l2uDNrXzbRF5IglAyx669rChyh4aFPoUUV4U1Ourw',
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

    const respose = await axiosInstance(options)
    return respose
  } catch (e) {
    console.error(e)
  }
}
