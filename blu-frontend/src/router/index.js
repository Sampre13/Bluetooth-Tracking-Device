import { createMemoryHistory, createRouter } from 'vue-router'

import DashboardView from '@/views/DashboardView.vue'
import AboutView from '@/views/AboutView.vue'
import {LoginView} from "@/views";

const routes = [
    { path: '/', component: DashboardView },
    { path: '/about', component: AboutView },
    { path: '/login', component: LoginView },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router
