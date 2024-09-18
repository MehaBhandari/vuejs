import { createApp } from "vue";
import App from "./components/App.vue"
import OtherApp from "./mobileComponents/OtherApp.vue"

var applicationOne = createApp(App)
applicationOne.mount("#root")

var applicationTwo = createApp(OtherApp)
applicationTwo.mount("#main")