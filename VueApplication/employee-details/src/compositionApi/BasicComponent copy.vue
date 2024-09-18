<script setup>
import { ref } from 'vue'
const userName = ref('Mayank')
const clickCount = ref(0)
const userDetails = ref({
  userName: 'Mayank Gupta',
  userAge: 20,
  userAddress: {
    street: 'Rohini',
    city: 'Delhi'
  }
})

function clickButton() {
  clickCount.value = clickCount.value + 1
  userName.value = 'Anshul'
}
</script>

<template>
  <h1>The User Name is {{ userName }}</h1>
  <h2>The Count is: {{ clickCount }}</h2>
  <input type="button" @click="clickButton" value="Click" />
</template>
