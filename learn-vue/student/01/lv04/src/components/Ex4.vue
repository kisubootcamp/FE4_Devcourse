<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Ex4',
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
  <ul>
    <li v-for="v in tasks" :key="v.title">
      <label><input type="checkbox" :checked="v.completed" />{{ v.title }}</label>
    </li>
  </ul>
</template>
