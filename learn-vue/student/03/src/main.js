// import '@/css/global.css'
import { createApp } from 'vue'
import App from './App.vue'
// import SecondChild from './components/SecondChild.vue'
// import FirstChild from './components/FirstChild.vue'
const app = createApp(App)
//전역등록,권장하지는 않음
// app.component('FirstChild', FirstChild).component('SecondChild', SecondChild) //메소드 체이닝
// app.component('SecondChild', SecondChild)
app.mount('#app')
