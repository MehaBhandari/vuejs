<script setup>
import { shallowRef } from 'vue'

const userDetails = shallowRef({
  userName: 'Mayank Gupta',
  userAge: 20,
  userAddress: {
    street: 'Rohini',
    city: 'Delhi',
    salary: [10, 20, 30]
  }
})

// Pure Function, Immutability, Higher Order Functions - Function Programming

function clickButton() {
  userDetails.value.userAddress.city = 'hhdgs'
  //   userDetails.value = {
  //     ...userDetails.value,
  //     userAddress: {
  //       ...userDetails.value.userAddress,
  //       city: 'Mumbai'
  //     },
  //     userName: 'TechnoFunnel'
  //   }
}
function clickButtonNonRef() {
  // This will not work , since the object is mutated rather than creating new instance
  userDetails.value.userName = 'shsdjkgfl'
}

function calculateTotalSalary() {
  return userDetails.value.userAddress.salary.reduce((acc, salaryData) => {
    return acc + salaryData
  }, 0)
}
</script>

<template>
  <h1>The User Name is {{ userDetails.userName }}</h1>
  <h2>The User Age is: {{ userDetails.userAge }}</h2>
  <h3>User Address: {{ userDetails.userAddress.street }} {{ userDetails.userAddress.city }}</h3>
  <h4>Total Salary: {{ calculateTotalSalary() }}</h4>
  <input type="button" @click="clickButton" value="Update Data" />
  <input type="button" @click="clickButtonNonRef" value="Update Data Non Ref" />
</template>
