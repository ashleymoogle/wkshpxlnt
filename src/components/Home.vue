<script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'Home',
    })
</script>

<template>
  <h1 class="text-3xl font-bold underline">
    Home
  </h1>
</template>

<style scoped lang="scss">
  .content {
    @apply flex justify-between mt-4;
  }
</style>
