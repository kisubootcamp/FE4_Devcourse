import '@/css/global.css'
import { createApp } from 'vue'
import App from './App.vue'
// import SecondChild from './components/SecondChild.vue'
// import FirstChild from './components/FirstChild.vue'

const app = createApp(App)

// 컴포넌트 전역등록(비추천)
// app.component('FirstChild', FirstChild)
// app.component('SecondChild', SecondChild)

// 메소드 체이닝 가능
// app.component('FirstChild', FirstChild).component('SecondChild', SecondChild)

app.mount('#app')
