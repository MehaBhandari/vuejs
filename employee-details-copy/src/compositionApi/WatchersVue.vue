<script setup>
import { onMounted, ref, watch } from 'vue'
var userCount = ref(0)
var randomNumberOne = ref(0)
var randomNumberTwo = ref(0)

function updateRandomValueOne() {
  randomNumberOne.value = Math.floor(Math.random() * 100)
}

function updateRandomValueTwo() {
  randomNumberTwo.value = Math.floor(Math.random() * 100)
}

// watch(userCount, (newValue, oldValue) => {
//   console.log('New Value is ' + newValue)
//   console.log('Old Value is ' + oldValue)
// })

watch([randomNumberOne, randomNumberTwo], () => {
  console.log('Value Updated...')
})

onMounted(() => {
  setInterval(() => {
    userCount.value = Math.floor(Math.random() * 10) % 3
  }, 3000)
})
</script>

<template>
  <h1>The User Random Value is {{ userCount }}</h1>
  <br />
  <input
    type="button"
    @click="updateRandomValueOne"
    :value="'Change Random 1 value ' + randomNumberOne"
  />
  <input
    type="button"
    @click="updateRandomValueTwo"
    :value="'Change Random 2 value ' + randomNumberTwo"
  />
</template>
