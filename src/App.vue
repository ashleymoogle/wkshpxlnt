<script setup lang="ts">

</script>

<template>
  <div>
      <div class="nav">
          <router-link active-class="active" :to="{ name: 'home'}">Home options api</router-link>
          <router-link active-class="active" :to="{ name: 'composition'}">Home composition api</router-link>
      </div>
      <div class="wrapper">
        <router-view></router-view>
      </div>
  </div>
</template>

<style lang="scss">
    .nav {
        @apply sticky top-0 text-white bg-gray-500 flex p-2 rounded-2xl justify-center;
        height: 40px;
        a {
            @apply text-white hover:font-bold first:mr-4;
            &.active {
                @apply underline italic;
            }
        }
    }
    .wrapper {
        @apply mt-4;
    }
</style>
