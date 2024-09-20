<script setup>
import { onMounted, shallowRef } from 'vue'
import Axios from 'axios'
import EmployeeHeader from './EmployeeHeader.vue'
import AddEmployee from './AddEmployee.vue'
import EmployeeFilter from './EmployeeFilter.vue'
import EmployeeDetails from './EmployeeDetails.vue'

const employeeList = shallowRef([])
const filteredEmployeeList = shallowRef([])

onMounted(function () {
  getDataFromApi()
})

function getDataFromApi() {
  Axios.get('http://localhost:3000/employees').then(function (response) {
    filteredEmployeeList.value = employeeList.value = response.data
  })
}

function updateFilteredValue(filteredList) {
  filteredEmployeeList.value = filteredList
}

function deleteEmployee(employeeid) {
  Axios.delete('http://localhost:3000/employees/' + employeeid).then(() => {
    getDataFromApi()
  })
}
</script>

<template>
  <EmployeeHeader employeeCount="1000" companyName="Mercer"></EmployeeHeader>
  <AddEmployee @updateEmployeeAddition="getDataFromApi()"></AddEmployee>
  <EmployeeFilter :employeeList="employeeList" @notifyFiltered="updateFilteredValue"></EmployeeFilter>

  <div id="emp-list" v-for="employee in filteredEmployeeList" :key="employee.id">
    <EmployeeDetails :employee="employee" @deleteEmployeeEvent="deleteEmployee"></EmployeeDetails>
  </div>
</template>

<style>
.emp-list {
  display: inline-block;
  margin: 10px;
}
</style>
