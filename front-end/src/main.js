import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import ShoppingCartPage from './pages/ShoppingCartPage.vue';
import ProductsPage from './pages/ProductsPage.vue';
import ProductDetailPage from './pages/ProductDetailPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
import './main.css';

const routes = [{
    path: '/cart',
    component: ShoppingCartPage
}, {
    path: '/products',
    component: ProductsPage
}, {
    path: '/products/:productId',
    component: ProductDetailPage
}, {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage
}];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(process.env.BASE_URL),
    routes
});

createApp(App)
    .use(router)
    .mount('#app');