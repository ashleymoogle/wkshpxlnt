<template>
    <div class="content">
        <h1 class="text-3xl font-bold underline">
            Home
        </h1>
        <div class="content">
            <div>
                Total Todos: {{ totalTodos }}
            </div>
        </div>
        <div class="cards">
            <x-card-composition v-for="card in todos" :todo="card" @update:todo="updateTodo" @delete:todo="removeToDo" />
        </div>
        <h1 class="text-3xl font-bold underline mb-4">
            Add todo
        </h1>
        <form @submit.prevent="onSubmit">
            <p>
                <label for="name">title:</label>
                <input id="title" v-model="title">
            </p>

            <p>
                <label for="name">By:</label>
                <select v-model="userId">
                    <option v-for="user in users" :key="user.id" :value="user.id" value=""> {{ user.name }}</option>
                </select>
            </p>
            <p>
                <input type="checkbox" id="completed" v-model="completed">
            </p>

            <p>
                <input type="submit" value="Submit">
            </p>
        </form>
    </div>
</template>

<script setup lang="ts">
    import { ref, toRefs, onMounted } from 'vue'
    import XCardComposition from '@/src/components/XCardComposition.vue';
    import { useTodosStore } from '@/src/stores/useTodosStore'
    import { Todo } from '@/types';

    const todosStore = useTodosStore();
    const { addTodo, getUsers, getToDos, removeToDo } = todosStore;
    const { users, todos, totalTodos } = toRefs(todosStore);


    const title = ref<string>('New Todo');
    const completed = ref<boolean>(false);
    const userId = ref<number>(0);


    const onSubmit = () => {
        const card: Todo = {
            userId: userId.value,
            id: todos.value.length + 1,
            title: title.value,
            completed: completed.value,
        };
        addTodo(card);
    };

    const updateTodo = () => {
        // TODO
    };

    onMounted(async () => {
        await getToDos();
        await getUsers();
    });
</script>

<style scoped lang="scss">
    .cards {
        @apply flex justify-between mt-8 mb-8 flex-wrap;
    }
</style>
