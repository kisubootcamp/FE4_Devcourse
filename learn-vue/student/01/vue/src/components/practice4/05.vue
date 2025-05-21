<script>
export default {
  name: 'App',
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
  <div>
    <ul>
      <li
        v-for="(members, index) in teamMembers.reduce((acc, member) => {
          if (!acc[member.role]) {
            acc[member.role] = []
          }
          acc[member.role].push(member)
          return acc
        }, {})"
        :key="index"
      >
        <strong>{{ index }}</strong>
        <ul>
          <li v-for="member in members" :key="member.name">
            <span>{{ member.name }}</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
