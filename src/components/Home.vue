<script lang="ts">
  import { defineComponent } from 'vue';
  import XCard from '@/src/components/XCard.vue';

  // @ts-ignore
  export default defineComponent({
    components: {
      XCard,
    },
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
        return this.title;
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
  <div class="cards">
    <x-card v-for="card in cards" :key="card.id" :todo="card" />
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
      <input type="checkbox" id="completed" v-model="completed">
    </p>

    <p>
      <input type="submit" value="Submit">
    </p>

  </form>
</template>

<style scoped lang="scss">
  .cards {
    @apply flex justify-between mt-8 mb-8;
  }
</style>
