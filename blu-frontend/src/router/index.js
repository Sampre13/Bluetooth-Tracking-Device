// Storing routes here to all navigation
import {createRouter, createWebHashHistory} from 'vue-router'

import {DashboardView, AboutView, RegisterView, LoginView, LandingView, MapQueueView, PathHistoryView} from "@/views";


const routes = [
    { path: '/dashboard', name: "dashboard", component: DashboardView },
    { path: '/register', name: "register", component: RegisterView },
    { path: '/about', name: "about", component: AboutView },
    { path: '/login', name: "login", component: LoginView },
    { path: '/mapqueue', name: "mapqueue", component: MapQueueView },
    { path: '/pathhistory', name: "pathhistory", component: PathHistoryView },
    { path: '/', name: "landing", component: LandingView }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router