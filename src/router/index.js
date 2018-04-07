import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from '../components/login/Login'
import Main from '../components/main/Main'

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '/main',
            component: Main
        },
        {
            path: '/',
            redirect: '/login'
        }
    ]
})

export default router
