import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const fetchPosts = async () => {
  const { data } = await api.get('/posts')
  return data
}

export const fetchUser = async (userId) => {
  const { data } = await api.get(`/users/${userId}`)
  return data
}

export const fetchPostById = async (postId) => {
  const { data } = await api.get(`/posts/${postId}`)
  return data
}

export const fetchCommentsByPostId = async (postId) => {
  const { data } = await api.get(`/posts/${postId}/comments`)
  return data
}
