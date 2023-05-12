<script setup lang="ts">

import useCount from "../composables/useCount";

const {count, incrementCount, countDouble, countDeux} = useCount()

</script>

<template>
  <h1 class="text-3xl font-bold underline">
    We're learning about reactivity!
  </h1>
  <div class="content">
    <div>
      My Count: {{ count }}
      <button @click="incrementCount">button</button>
    </div>
    <div>
      Double: {{ countDouble }}
    </div>
  </div>
</template>

<style scoped lang="scss">
  .content {
    @apply flex justify-between mt-4;
  }
</style>
