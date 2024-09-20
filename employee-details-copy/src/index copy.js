import { createApp } from "vue";
import Component from "./stateManagementWithPinia/storeParentData.vue";
import {createPinia} from "pinia"

var app = createApp(Component);

const pinia = createPinia()
app.use(pinia)
app.mount("#root")