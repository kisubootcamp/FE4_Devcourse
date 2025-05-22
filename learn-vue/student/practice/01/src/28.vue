<script>
export default {
  name: 'App',
  data() {
    return {
      tasks: [
        { title: 'Vue 공부하기', completed: false },
        { title: '프로젝트 작업', completed: true },
        { title: '운동하기', completed: false },
      ],
    }
  },
}
</script>
<template>
  <!-- code here -->
  <ul>
    <li v-for="task in tasks" :key="task.title">
      <label> <input type="checkbox" :checked="task.completed" />{{ task.title }}</label>
    </li>
  </ul>
</template>
