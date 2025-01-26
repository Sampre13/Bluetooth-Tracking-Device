import { createMemoryHistory, createRouter } from 'vue-router'

import DashboardView from '@/views/DashboardView.vue'
import AboutView from '@/views/AboutView.vue'
import {LoginView, RegisterView} from "@/views";

const routes = [
    { path: '/', component: DashboardView },
    { path: '/register', name: "register", component: RegisterView },
    { path: '/about', name: "about", component: AboutView },
    { path: '/login', name: "login", component: LoginView },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router
