import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import "@/router/permission"

// load
import { loadPlugins } from "@/plugins"
import { loadSvg } from "@/icons"


import store from '@/store'
import "element-plus/dist/index.css"
import "element-plus/theme-chalk/dark/css-vars.css"
import "@/styles/index.scss"
const app = createApp(App)
/** 加载插件 */
loadPlugins(app)
/** 加载全局 SVG */
loadSvg(app)
app.use(store)
app.use(router)
app.mount('#app')




