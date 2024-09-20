import { createApp } from "vue";
import Component from "./routingConcepts/components/MainComponent.vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routingConcepts/router/index"

var router = createRouter({
    history: createWebHistory(),
    routes: routes
})

var app = createApp(Component);
app.use(router)
app.mount("#root")