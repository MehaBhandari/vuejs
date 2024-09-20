<script setup>
import { ref, onMounted } from 'vue'

const userDetails = ref({
  userName: 'Mayank Gupta',
  userAge: 20,
  salary: [10, 20, 30],
  count: 0,
  totalSalary: 0
})

function calculateTotalSalary() {
  return userDetails.value.salary.reduce((acc, salaryData) => {
    return acc + salaryData
  }, 0)
}

onMounted(function () {
  userDetails.value = {
    ...userDetails.value,
    totalSalary: calculateTotalSalary()
  }
  setInterval(function () {
    userDetails.value.count = userDetails.value.count + 1
  }, 1000)
})
</script>

<template>
  <h1>The User Name is {{ userDetails.userName }}</h1>
  <h2>The User Age is: {{ userDetails.userAge }}</h2>
  <h3>Count is {{ userDetails.count }}</h3>
  <h4>Total Salary: {{ userDetails.totalSalary }}</h4>
</template>
