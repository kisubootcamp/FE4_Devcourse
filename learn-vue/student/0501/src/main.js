import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
// 라우터 인스턴스 객체에 있는 개별적인 라우트가 동작하게 되는 것입니다.
app.use(router)
app.mount('#app')
