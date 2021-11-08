import VueRouter from 'vue-router'

import MaskLandingPage from '../MainPages/MaskLandingPage'
import Catalog from '../pages/CatalogMasks'
import Card from '../Products/Card'
export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'main',
            component: MaskLandingPage
        },
        {
            path: '/catalogmasks',
            name: 'CatalogMasks',
            component: Catalog
        },
        {
            path: '/catalogmasks/:id',
            name: 'Masks',
            component: Card
        }
    ]
})