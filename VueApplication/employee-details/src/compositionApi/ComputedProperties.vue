<!-- 

Computed Data is cached on the basic of what variables are required to get that Value
You can have multiple computed properties and they are not re-evaluated each time.
Put down performance in your code.. 

-->

<script setup>
import { ref, onMounted, computed } from 'vue'
const userDetails = ref({
  userName: 'Mayank',
  userSalaries: [4, 6, 8, 16, 20]
})

const count = ref(0)

const totalSalaryComputed = computed(() => {
  console.log('Computed Value evaluated...')
  return userDetails.value.userSalaries.reduce((acc, salaryInput) => {
    return acc + salaryInput
  }, 0)
})

function updateSalary() {
  userDetails.value.userSalaries.push(100)
}

onMounted(function () {
  setInterval(function () {
    count.value += 1
  }, 1000)
})
</script>

<template>
  <h1>The User Name is {{ userDetails.userName }}</h1>
  <h2>The Total Computed Salary Earned is : {{ totalSalaryComputed }}</h2>
  <h3>Count Value: {{ count }}</h3>

  <input type="button" value="Add Salary" @click="updateSalary" />
</template>
