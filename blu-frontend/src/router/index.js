import {createRouter, createWebHistory} from 'vue-router'

import DashboardView from '@/views/DashboardView.vue'
import AboutView from '@/views/AboutView.vue'
import {LoginView, RegisterView} from "@/views";

const my_routes = [
    { path: '/', name: DashboardView, component: DashboardView },
    { path: '/register', name: "register", component: RegisterView },
    { path: '/about', name: "about", component: AboutView },
    { path: '/login', name: "login", component: LoginView },
]

const router = createRouter({
    history: createWebHistory(),
    routes : my_routes,
})

export default router
