<script lang="ts">
  import { defineComponent } from 'vue';
  import XCard from '@/src/components/XCard.vue';
  import {Todo} from "@/types";

  // @ts-ignore
  export default defineComponent({
    components: {
      XCard,
    },
    data() {
      return {
        title: '',
        user: 0,
        completed: false,
        users: [],
        cards: [],
      }
    },

    computed: {
      //
    },

    methods: {

      async getCards() {
        // @ts-ignore
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/', {'Content-type': 'application/json; charset=UTF-8'});
        const data = await res.json();
        console.log('GET Cards:', data);
        return data;
      },

      async getUsers() {
        // @ts-ignore
        const res = await fetch('https://jsonplaceholder.typicode.com/users/', {'Content-type': 'application/json; charset=UTF-8'});
        const data = await res.json();
        console.log('GET Users:', data);
        return data;
      },

      onSubmit() {
        const card:Todo = {
          userId: this.user,
          id: this.cards.length + 1,
          title: this.title,
          completed: this.completed,
        };

        this.cards.push(card);
        this.title = '';
        this.completed = false;
        this.user = 0;
      },

      async removeToDo(toDoToBeRemoved:Todo) {
        try {
          const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${toDoToBeRemoved.id}`, {
            method: 'DELETE',
          });

          const data = await res.json();
          console.log('DELETE:', data);

          const index = this.cards.findIndex((item) => {
            return item.id === toDoToBeRemoved.id
          })

          if (index !== -1) {
            this.cards.splice(index, 1)
          }

          // const cardsApi = await this.getCards();
          //
          // this.cards = cardsApi.slice(0,10);
        } catch(e) {
          console.log(e)
        }
    },
  },

    async mounted() {
      // useFetch()
      this.users = await this.getUsers();
      const cardsApi = await this.getCards();

      this.cards = cardsApi.slice(0,10);
    })
</script>

<template>
  <h1 class="text-3xl font-bold underline">
    Home
  </h1>
  <div class="cards">
    <x-card v-for="card in cards" :key="card.id" :todo="card" @delete:todo="removeToDo" />
  </div>

  <h1 class="text-3xl font-bold underline mb-4">
    Add todo
  </h1>
  <form class="review-form" @submit.prevent="onSubmit">
    <p>
      <label for="name">title:</label>
      <input id="title" v-model="title">
    </p>

    <p>
      <select v-model="user">
        <option v-for="item in users" :key="item.id" :value="item.id">{{ item.username }}</option>
      </select>
    </p>

    <p>
      <input type="checkbox" id="completed" v-model="completed">
    </p>

    <p>
      <input type="submit" value="Submit" :disabled="title === ''">
    </p>

  </form>
</template>

<style scoped lang="scss">
  .cards {
    @apply flex justify-between mt-8 mb-8 flex-wrap;
  }
</style>
