<script setup>
import { inject } from 'vue'
var employeeRecord = inject('employee').employeeRecord.value
</script>

<template>
  <h2>Employee Age is {{ employeeRecord.employeeAge }}</h2>
</template>
