import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/src/components/Home.vue';
import HomeComposition from '@/src/components/HomeComposition.vue';
import Todo from '@/src/components/Todo.vue';
import TodoComposition from '@/src/components/TodoComposition.vue';

const routes: any[] = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/composition',
        name: 'composition',
        component: HomeComposition,
    },
    {
        path: '/todo/:id',
        name: 'todo',
        component: Todo,
    },
    {
        path: '/composition/todo/:id',
        name: 'todoComposition',
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