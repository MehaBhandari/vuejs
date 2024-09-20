<script setup>
import { ref } from 'vue'
import ChildComponent from './ChildComponent.vue'
const count = ref(100)
</script>

<template>
  <ChildComponent>
    <template #footerSlot>
      <h4>This is Footer</h4>
    </template>
    <template #headerSlot>
      <h3>This is Header</h3>
    </template>
  </ChildComponent>
</template>
