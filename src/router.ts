import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/src/components/Home.vue';
import HomeComposition from '@/src/components/HomeComposition.vue';
import Todo from '@/src/components/Todo.vue';
import TodoComposition from '@/src/components/TodoComposition.vue';

const routes: any[] = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/composition',
        component: HomeComposition,
    },
    {
        path: '/todo/:id',
        component: Todo,
    },
    {
        path: '/composition/todo/:id',
        component: TodoComposition,
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