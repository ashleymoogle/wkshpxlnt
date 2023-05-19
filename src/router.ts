import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/src/components/Home.vue';

const routes: any[] = [{
    path: '/',
    redirect: '/',
    component: Home,
    // component: () => import('@/src/components/Home.vue'),
}];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;