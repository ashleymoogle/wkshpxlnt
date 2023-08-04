<template>
  <form class="review-form" @submit.prevent="onSubmit">
    <p>
      <label for="name">title:</label>
      <input id="title" v-model="card.title">
    </p>

    <p>
      <select v-model="card.userId">
        <option v-for="item in users" :key="item.id" :value="item.id">{{ item.name }}</option>
      </select>
    </p>

    <p>
      <input type="checkbox" id="completed" v-model="card.completed">
    </p>

    <p>
      <input type="submit" value="Submit" :disabled="title === ''">
    </p>
  </form>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { User } from '@/types.ts';

    export default defineComponent({

      name: 'Todo',

      data() {
        return {
          card: {
            id: 0,
            title: '',
            userId: 0,
            completed: false,
          },
          users: [] as User[],
        };
      },

      methods: {
        async getCard() {
          // @ts-ignore
          const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${this.$route.params.id}`, {'Content-type': 'application/json; charset=UTF-8'});
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

        async onSubmit() {
          await fetch(`https://jsonplaceholder.typicode.com/todo/${this.card.id}`, {
            method: 'PUT',
            body: JSON.stringify(this.card),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
        }
      },

      async mounted() {
        this.card = await this.getCard();
        this.users = await this.getUsers();
      },
    })
</script>

<style scoped lang="scss">
.cards {
  @apply flex justify-between mt-8 mb-8 flex-wrap;
}
</style>
