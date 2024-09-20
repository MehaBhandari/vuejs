<script setup>
import { ref, reactive } from 'vue'

const employeeReactive = {
  userName: 'Reactive',
  userAge: 30
}

const employeeRef = {
  employeeName: 'Ref',
  userAge: 30
}

const userDetails = reactive(employeeReactive)

const employeeDetails = ref(employeeRef)

function updateVariableReactive() {
  userDetails.userName = 'New Reactive Name'
}

function updateVariableRef() {
  employeeDetails.value.employeeName = 'New Ref Name'
}
</script>

<template>
  <h1>The User Name is {{ userDetails.userName }}</h1>
  <input type="button" value="Click for Reactive" @click="updateVariableReactive" />
  <hr />
  <br />
  <h1>The User Name is {{ employeeDetails.employeeName }}</h1>
  <input type="button" value="Click for Ref" @click="updateVariableRef" />
</template>
