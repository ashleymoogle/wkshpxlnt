import { ref, computed } from 'vue';
import { defineStore } from 'pinia'
import { Todo } from '@/types.ts';

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useTodosStore = defineStore('todos', () => {
    const todos = ref<Todo[]>([]);

    const completedTodos = computed(() => todos.value.filter((todo: Todo) => todo.done))

    const addTodo = (newTodo: Todo) => {
        todos.value.push(newTodo);
    }

    return {
        addTodo,
        completedTodos,
        todos,
    }
})