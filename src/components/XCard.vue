<template>
    <div class="x-card--wrapper">
        <div class="x-card--header">
            {{todo.title}}
        </div>
        <div class="x-card--content">
            <span>
              By : {{ username }}
            </span>
            <span>
              Done: <input v-model="todo.completed" type="checkbox" @change="updateTodo">
            </span>
        </div>
        <div class="x-card--footer">
          <router-link active-class="active" :to="{ name: 'todo', params: { id: todo.id } }">Edit</router-link>
            <svg @click="deleteTodo" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
        </div>
    </div>
</template>

<script lang="ts">
    import { Todo } from '@/types.ts';
    import { defineComponent, PropType } from 'vue';
    export default defineComponent({
        name: 'XCard',
        props: {
            todo: {
                type: Object as PropType<Todo>,
                default: () => {},
                required: true,
            },
          username: {
            type: String,
            default: '',
          }
        },
        emits: ['delete:todo', 'update:todo'],
        methods: {
            deleteTodo() {
                this.$emit('delete:todo', this.todo);
            },
            updateTodo() {
                this.$emit('update:todo', this.todo);
            },
        }
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
