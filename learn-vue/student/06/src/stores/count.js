import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCountStore = defineStore('count', () => {
  const count = ref(0)
  const countUp = () => {
    count.value++
  }
  const countDown = () => {
    count.value--
  }
  const countReset = () => {
    count.value = 0
  }

  return { count, countUp, countDown, countReset }
})
