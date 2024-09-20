<script setup>
import { inject } from 'vue'
var employee = inject('employee')
</script>

<template>
  <h2>Employee New Salary is {{ employee.employeeRecord.value.employeeSalary }}</h2>
  <input type="button" @click="employee.incrementSalary" value="Increment" />
  <hr />
  <hr />
</template>
