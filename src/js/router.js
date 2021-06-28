import VueRouter from 'vue-router'

import MaskLandingPage from '../MainPages/MaskLandingPage'
export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'main',
            component: MaskLandingPage
        },
    ]
})