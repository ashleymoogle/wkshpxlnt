<script lang="ts">
import {defineComponent, ref, onMounted} from "vue";

interface ToDo {
  done: boolean
  title: string
}

export default defineComponent({
  name: "ToDoList",
  props: {

  },
  setup() {
    const toDos = ref<ToDo[]>([])

    const title = ref('')

    const addToDo = () => {
      const toDo:ToDo = {
        'title': title.value,
        'done': false,
      }

      toDos.value.push(toDo)

      title.value = ''
    }

    const changeStatus = (index:number) => {
      toDos.value[index].done = !toDos.value[index].done
    }

    onMounted(() => {

    })

    return {
      toDos, title, addToDo, changeStatus
    }

  }
})
</script>

<template>
  <ul>
    <li v-for="(toDo, index) in toDos" :key="index">{{toDo.title}} - done: {{toDo.done}}
      <input type="checkbox" @click="changeStatus(index)">
<!--      <input type="checkbox" v-model="toDo.done">-->
    </li>
  </ul>

  <div class="mt-4">
    <input type="text" v-model="title" placeholder="enter text">
    <button @click="addToDo">send</button>
  </div>
</template>

<style scoped>

</style>
