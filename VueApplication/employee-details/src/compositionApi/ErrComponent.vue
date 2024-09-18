<template>
  <div>
    <button @click="throwError">Throw Error</button>
  </div>
</template>

<script>
import { defineProps } from 'vue'
const props = defineProps(['userName', 'userAge'])
</script>
