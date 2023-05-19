<template>
    <div class="x-card--wrapper">
        <div class="x-card--header">
          <slot name="header"></slot>
        </div>
        <div class="x-card--content">
          <slot name="content"></slot>
          <input type="text" v-model="localTodo.title">
        </div>
        <div class="x-card--footer">
          <slot name="footer"></slot>
          <button @click="save">Save!</button>
        </div>
    </div>
</template>

<script lang="ts">
    import { Todo } from '@/src/types.ts';
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
        emits: ['save:todo'], // what is this?
        setup (props, {emit}) {
            const { todo:item } = toRefs(props);
            const localTodo: any = computed({
                get() {
                   return item.value;
                },
                set(val) {
                    // what to do here?
                    console.log(val);
                },
            })

           const save = () => {
             emit('save:todo', localTodo.value)
             console.log('saved !!!!!!');
           }

            return {
                localTodo, save, item
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
