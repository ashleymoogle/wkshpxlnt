<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {Todo} from "@/types";
import XCard from "@/src/components/XCard.vue";
import {useFetch} from "@/src/composables/useFetch";

const count = ref(0)
const todos = ref<Todo[]>([])

const {get, patch} = useFetch()

const getData = async () => {
  // const data = await get('https://jsonplaceholder.typicode.com/users/1/todos')
  // todos.value = await get('https://jsonplaceholder.typicode.com/users/1/todos')
  todos.value = await get('https://my-json-server.typicode.com/lapie002/to-do-list-composition-api/todos')
}

// const data = await get('https://jsonplaceholder.typicode.com/users/1/todos')
// console.log(data)

const updateTodo = async (todo:any) => {
  console.log(todo)
  // todos.value.splice(todos.value.findIndex(item => item.id === todo.id), 1, todo)
  // await patch('https://jsonplaceholder.typicode.com/todos/' + todo.id, todo)
  await patch('https://my-json-server.typicode.com/lapie002/to-do-list-composition-api/todos/' + todo.id, todo)
}

onMounted(async () => {
  await getData()
})
</script>

<template>
  <h1>Todoes</h1>
  <XCard v-for="todo in todos" :todo="todo" @save:todo="updateTodo">
    <template #header>
      <h2>Bonjour header</h2>
      <h3>hello!!!</h3>
    </template>
    <template #content>
      <h2>le contenu</h2>
    </template>
    <template #footer>
      <h2>Bye!!!</h2>
    </template>
  </XCard>

  <h1 class="text-3xl font-bold underline">
    We're learning about reactivity!
  </h1>
  <div class="content">
    <div>
      My Count: {{ count }}
    </div>
    <div>
      Double: ?
    </div>
  </div>
</template>

<style scoped lang="scss">
  .content {
    @apply flex justify-between mt-4;
  }
</style>
