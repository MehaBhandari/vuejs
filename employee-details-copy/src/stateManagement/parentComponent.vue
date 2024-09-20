<script setup>
import { ref, provide } from 'vue'
import DetailsComponent from './detailsComponent.vue'

var employeeRecord = ref({
  employeeName: 'TechnoFunnel',
  employeeAge: 15,
  employeeSalary: 101
})

function incrementSalary() {
  employeeRecord.value.employeeSalary++
}

provide('employee', {
  employeeRecord: employeeRecord,
  incrementSalary: incrementSalary
})
</script>

<template>
  <h1>Company Name is: {{ employeeRecord.employeeName }}</h1>
  <h1>The Employee Salary is {{ employeeRecord.employeeSalary }}</h1>
  <h1>Data Saved in the Provider</h1>
  <hr />
  <hr />

  <DetailsComponent></DetailsComponent>
</template>
