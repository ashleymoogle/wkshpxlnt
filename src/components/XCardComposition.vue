<template>
    <div class="x-card--wrapper">
        <div class="x-card--content">
            <input
                v-model="todo.completed"
                type="checkbox"
                @change="updateTodo"
            >
            <span>{{ todo.title }}</span>
        </div>
        <div class="x-card--footer">
            <router-link active-class="active" :to="{ name: 'todoComposition', params: { id: todo.id } }">Edit</router-link>
            <button @click="deleteTodo">Delete</button>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { Todo } from '@/types.ts';
    import { PropType, toRefs, } from 'vue';

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

    const { todo } = toRefs(props);

    const updateTodo = (() => {
        emit('update:todo', todo)
    })

    const deleteTodo = (() => {
        emit('delete:todo', todo)
    })

</script>

<style scoped lang="scss">
    .x-card {
        &--content {
            @apply text-2xl font-bold;
        }
    }
</style>