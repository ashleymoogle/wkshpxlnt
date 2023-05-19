import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/src/components/Home.vue';
import HelloWorld from '@/src/components/HelloWorld.vue';

const routes: any[] = [{
    path: '/',
    component: Home,
    // component: () => import('@/src/components/Home.vue'),
},
    {
        path: '/contact',
        component: HelloWorld,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export {
    router,
    routes,
};
