<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
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
