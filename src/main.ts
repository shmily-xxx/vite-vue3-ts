import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import ElementPlus from 'element-plus'
import lodash from 'lodash'
import 'element-plus/dist/index.css'
import 'styles/index.scss'
const app=createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus,{ size: 'small', zIndex: 3000 })
app.mount('#app')
app.config.globalProperties.$_ =lodash
