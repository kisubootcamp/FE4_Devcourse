import axios from 'axios'

const aixosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const fetchPosts = async () => {
  const { data } = await aixosInstance.get('/posts')
  return data
}

export const fetchUsersById = async (id) => {
  const { data } = await aixosInstance.get('/users/' + id)
  return data
}
export const fetchPostsById = async (id) => {
  const { data } = await aixosInstance.get('/posts/' + id)
  return data
}
export const fetchCommetsById = async (id) => {
  const { data } = await aixosInstance.get(`/posts/${id}/comments`)
  return data
}
