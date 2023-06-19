<template>
    <div class="x-card--wrapper">
        <div class="x-card--header">
            {{ todo.title }}
        </div>
        <div class="x-card--content">
            <span>
              By : {{ userName }}
            </span>
            <span>
              Done: <input v-model="todo.completed" type="checkbox" @change="updateTodo">
            </span>
        </div>
        <div class="x-card--footer">
            <router-link active-class="active" class="mr-2" :to="{ name: 'todoComposition', params: { id: todo.id } }">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" class="w-6 h-6" fill="white">
                    <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/>
                </svg>
            </router-link>
            <svg @click="deleteTodo" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { Todo } from '@/types.ts';
    import { PropType, toRefs, computed } from 'vue';
    import { useTodosStore } from '@/src/stores/useTodosStore'

    defineOptions({
        name: 'XCardComposition',
    })
    const props = defineProps({
        todo: {
            type: Object as PropType<Todo>,
            default: () => {},
            required: true,
        }
    })

    const emit = defineEmits(['update:todo', 'delete:todo'])
    const todosStore = useTodosStore();
    const { getUserName } = todosStore;

    const { todo } = toRefs(props);

    const userName = computed(() => getUserName(todo.value));

    const updateTodo = (() => {
        emit('update:todo', todo.value)
    })

    const deleteTodo = (() => {
        emit('delete:todo', todo.value)
    })

</script>

<style scoped lang="scss">
.x-card {
    &--wrapper {
        width: 300px;
        height: 200px;
        @apply rounded-2xl border-2 p-2 flex flex-col justify-between;
    }
    &--header {
        @apply text-2xl font-bold;
    }
    &--content {
        @apply flex justify-between;
    }
    &--footer {
        @apply flex justify-center;
    }
}
</style>