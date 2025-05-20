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
  <div>
    <ul>
      <li v-for="task in tasks" :key="task.title">
        <input type="checkbox" :id="task.title" :checked="task.completed" />
        <label :for="task.title">{{ task.title }}</label>
      </li>
    </ul>
  </div>
</template>
