<script lang="ts">
  import { defineComponent } from 'vue';
  // import {Xcard} from 'Xcard';

  export default defineComponent({
    data() {
      return {
        title: 'Hello',
        userId: 0,
        completed: false,

        cards: [
          {
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false
          },
          {
            userId: 1,
            id: 2,
            title: "quis ut nam facilis et officia qui",
            completed: false
          }
        ],
      }
    },

    computed: {
      title() {
        return this.name;
      },
    },

    methods: {
      onSubmit() {
        console.log(this.title, this.userId, this.completed)
      }
    },

    mounted() {

    },
  })
</script>

<template>
  <h1 class="text-3xl font-bold underline">
    {{ title }}
  </h1>
  <ul>
    <li v-for="card in cards" :key="card.id">
      <p>{{ card.id }}</p>
      <p>{{ card.title }}</p>
      <p>{{ card.completed }}</p>
    </li>
  </ul>

  <form class="review-form" @submit.prevent="onSubmit">
    <p>
      <label for="name">title:</label>
      <input id="title" v-model="title">
    </p>

    <p>
      <input type="checkbox" id="completed" v-model="completed">
    </p>

    <p>
      <input type="submit" value="Submit">
    </p>

  </form>
</template>

<style scoped lang="scss">
  .content {
    @apply flex justify-between mt-4;
  }
</style>
