import { createApp } from 'vue'
import App from './App.vue'
import elementui from 'element-plus'
import 'element-plus/dist/index.css'
import components from "ccui"
const app = createApp(App)


app.use(elementui)
app.use(components)
app.mount('#app')