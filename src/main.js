import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/main.scss";


const app = createApp(App)
// [TODO] for debug, can console data in template, should based on env to enabled or not
app.config.globalProperties.console = console

app.use(ElementPlus)
app.use(router);
app.use(store);
app.mount('#app')
