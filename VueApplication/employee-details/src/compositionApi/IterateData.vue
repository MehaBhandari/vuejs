<script setup>
import { ref } from 'vue'
const userDetails = ref([
  {
    userName: 'Mayank',
    userDesignation: 'Owner',
    userAge: 'sukfkd',
    userSalary: 'sukfkd'
  },
  {
    userName: 'TechnoFunnel',
    userDesignation: 'Manager'
  },
  {
    userName: 'Anshul',
    userDesignation: 'CEO'
  }
])
</script>

<template>
  <div v-for="({ userName }, index) in userDetails" :key="index">
    <b>User Name at index {{ index }} is: {{ userName }}</b>
    <hr />
    <br />
  </div>

  <div v-for="count of 15" :key="count">
    <h1>Count is {{ count }}</h1>
  </div>
</template>
