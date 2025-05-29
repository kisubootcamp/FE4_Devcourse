import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NThlODExNmJhNjllNjdmNTc5NmY3Mjc5ZGQwMTU4MSIsIm5iZiI6MTc0NTQ2MzA1Mi43NDU5OTk4LCJzdWIiOiI2ODA5YTcwY2U5MmY5NDBjYTY5Y2YxNGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.qh2PjXuIgctC_DAU8dVQDfF74tL5prnFvB70O6rgnxM',
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

    const res = await axiosInstance(options)
    return res
  } catch (e) {
    console.log(e)
  }
}
