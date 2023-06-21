<template>
    <h1>Todo Composition</h1>
    <div v-if="isLoading">Loading</div>
    <form class="form" v-else @submit.prevent="onSubmit">
        <p>
            <label for="name">Title:</label>
            <input id="title" v-model="todo.title">
        </p>

        <p>
            <label for="name">By:</label>
            <select  v-model="todo.userId">
                <option v-for="user in users" :key="user.id" :value="user.id"> {{ user.name }}</option>
            </select>
        </p>

        <p>
            Done: <input type="checkbox" id="completed" v-model="todo.completed">
        </p>

        <p>
            <label v-if="isUpdating">Updating</label>
            <input v-else type="submit" value="Update">
        </p>

    </form>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useTodosStore } from '@/src/stores/useTodosStore'
import { toRefs, onMounted, ref } from 'vue'

const route = useRoute();

const todosStore = useTodosStore();
const { getUsers, getToDo, updateToDo } = todosStore;
const { users, todo } = toRefs(todosStore);

const isLoading = ref(true);
const isUpdating = ref(false);

const onSubmit = async () => {
    isUpdating.value = true;
    try {
        await updateToDo(todo.value);
    } finally {
        isUpdating.value = false;
    }
};

onMounted(async () => {
    await getToDo(route.params.id);
    await getUsers();
    isLoading.value = false;
});

</script>


<style scoped lang="scss">
    .form {
        @apply flex flex-col m-8;
        .button {
            @apply p-2;
        }
        p {
            @apply my-2;
        }
    }
</style>