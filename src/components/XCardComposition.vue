<template>
    <div class="x-card--wrapper">
        <div class="x-card--header">Header</div>
        <div class="x-card--content">Content</div>
        <div class="x-card--footer">Footer</div>
    </div>
</template>

<script lang="ts">
    import { Todo } from '@/types.ts';
    import { defineComponent, computed, toRefs, PropType, ComputedRef } from 'vue';
    export default defineComponent({
        name: 'XCard',
        props: {
            // make this generic
            todo: {
                type: Array as PropType<Todo>,
                default: () => [],
                required: true, // what happens if we remove this?
            }
        },
        emits: [], // what is this?
        setup (props) {
            const { todo } = toRefs(props);
            const localTodo: ComputedRef<Todo> = computed({
                get() {
                   return todo.value;
                },
                set(val) {
                    // what to do here?
                    console.log(val);
                },
            })

            return {
                localTodo,
            }
        }
    })
</script>

<style scoped lang="scss">
    .x-card {
        &--header {
            @apply text-2xl font-bold;
        }
        // other styles...
    }
</style>