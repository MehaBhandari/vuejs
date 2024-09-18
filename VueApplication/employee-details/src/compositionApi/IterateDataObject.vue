<script setup>
import { ref } from 'vue'
const userDetails = ref({
  userName: 'Mayank',
  userDesignation: 'Owner',
  userAge: 'sukfkd',
  userSalary: 'sukfkd'
})
</script>

<template>
  <div v-for="(value, key, index) in userDetails" :key="index">
    <b>Property Names {{ key }} at index {{ index }} is: {{ value }}</b>
    <hr />
    <br />
  </div>
</template>
