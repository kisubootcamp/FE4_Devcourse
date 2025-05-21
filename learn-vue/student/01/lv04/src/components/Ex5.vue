<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Ex5',
  data() {
    return {
      teamMembers: [
        { name: '홍길동', role: '개발자' },
        { name: '김철수', role: '디자이너' },
        { name: '이영희', role: '개발자' },
        { name: '박지민', role: '기획자' },
      ],
    }
  },
}
</script>
<template>
  <ul>
    <li
      v-for="(v, i) in teamMembers.reduce((acc, cur) => {
        if (!acc[cur.role]) {
          acc[cur.role] = []
        }
        acc[cur.role].push(cur)
        return acc
      }, {})"
      :key="i"
    >
      {{ i }}
      <ul>
        <li v-for="mem in v" :key="mem">
          {{ mem.name }}
        </li>
      </ul>
    </li>
  </ul>
</template>
