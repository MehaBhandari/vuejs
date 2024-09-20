<script setup>
import applicationStore from './store/appStore'
const dataFromStore = applicationStore()

import SomeOtherComponent from './someOtherComponent.vue'
</script>

<template>
  <h1>Count Data is: {{ dataFromStore.count }}</h1>
  <input type="button" value="Increment" @click="dataFromStore.updateCount" />
  <SomeOtherComponent></SomeOtherComponent>
  <hr />
</template>
