import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import HomeComposition from '@/components/HomeComposition.vue';
import Todo from '@/components/Todo.vue';
import TodoComposition from '@/components/TodoComposition.vue';

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
        path: 'composition/todo/:id',
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