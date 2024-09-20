<script setup>
import { defineProps, ref } from 'vue'
var props = defineProps(['employeeCount', 'companyName'])
const userMessage = ref('Welcome to ' + props.companyName + ' Dynamic from Props')
</script>

<template>
  <h1>{{ userMessage }}</h1>
  <h2>Given below are company Employees ({{ employeeCount }})</h2>
</template>
