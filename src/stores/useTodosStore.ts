import { ref, computed } from 'vue';
import { defineStore } from 'pinia'
import { Todo, User } from '@/types.ts';

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useTodosStore = defineStore('todos', () => {
    const todos = ref<Todo[]>([]);
    const todo = ref<Todo>();
    const users = ref<User[]>([]);

    const totalTodos = computed(() => todos.value.length);
    const completedTodos = computed(() => todos.value.filter((todo: Todo) => todo.completed))

    const addTodo = (newTodo: Todo) => {
        todos.value.push(newTodo);
    }

    const getToDos = async () => {
        // @ts-ignore
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/', {'Content-type': 'application/json; charset=UTF-8'});
        const data = await res.json();
        todos.value = data.slice(0, 10);
    }

    const getToDo = async (id: number) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        todo.value = await res.json();
    };

    const updateToDo = async (todo: Todo) => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/todo/${todo.id}`, {
                method: 'PUT',
                body: JSON.stringify(todo),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
        } catch (e) {
            console.log('errors', e)
        }
    };

    const removeToDo = async (toDoToBeRemoved:Todo) => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${toDoToBeRemoved.id}`, {
                method: 'DELETE',
            });

            const index = todos.value.findIndex((item) => {
                return item.id === toDoToBeRemoved.id
            })

            if (index !== -1) {
                todos.value.splice(index, 1)
            }
        } catch(e) {
            console.log('errors', e)
        }
    }

    const getUsers = async () => {
        // @ts-ignore
        const res = await fetch('https://jsonplaceholder.typicode.com/users/', {'Content-type': 'application/json; charset=UTF-8'});
        users.value = await res.json();
    }

    const getUserName = (todo: Todo) => {
        const user = users.value.find((item) => item.id === todo.userId);
        return user ? user.name : '-';
    }

    return {
        addTodo,
        completedTodos,
        getToDo,
        getToDos,
        getUserName,
        getUsers,
        removeToDo,
        todo,
        todos,
        totalTodos,
        updateToDo,
        users,
    }
})