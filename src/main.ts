import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import ElementPlus from 'element-plus'
import lodash from 'lodash'
import moment from 'moment'
import 'element-plus/dist/index.css'
import 'styles/index.scss'
import{drag,throttle,debounce} from './directive/index'
const app=createApp(App)
app.directive("drag", drag);
app.directive("debounce", debounce);
app.directive("throttle", throttle);
app.use(router)
app.use(store)
app.use(ElementPlus,{ size: 'small', zIndex: 3000 })
app.mount('#app')
app.config.globalProperties.$_ =lodash
app.config.globalProperties.$moment =moment
console.log(import.meta.env.MODE || 'production')
