import AboutComponent from "../components/AboutComponent.vue";
import HomeComponent from "../components/HomeComponent.vue";
import HelpComponent from "../components/HelpComponent.vue";
import EmployeeComponent from "../components/EmployeeComponent.vue";

const routes = [{
    path: "/",
    name: "Home",
    component: HomeComponent
}, {
    path: "/about",
    name: "About",
    component: AboutComponent
}, {
    path: "/help",
    name: "Help",
    component: HelpComponent
}, {
    path: "/employee/:employeeId",
    name: "Employee",
    component: EmployeeComponent
}]

export default routes;