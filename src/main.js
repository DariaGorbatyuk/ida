import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import vClickOutside from 'v-click-outside'


const app = createApp(App);
app.use(createPinia());
app.use(vClickOutside)
app.mount("#app");
