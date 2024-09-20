<script setup>
import { ref } from 'vue'
import Axios from 'axios'
const userDetails = ref({
  name: 'Mayank',
  id: '100',
  email: 'a@gmail.com',
  company: 'TechnoFunnel'
})

var emits = defineEmits(['updateEmployeeAddition'])

function addEmployee() {
  var dataToUpdate = {
    id: '66ea55933a9a4ba46d718bfe',
    index: 0,
    guid: 'ce1a2e20-97e4-46df-949c-29ebebce1a77',
    isActive: false,
    balance: '$1,990.41',
    picture: 'http://placehold.it/32x32',
    age: 30,
    eyeColor: 'blue',
    name: 'Candice Durham',
    gender: 'female',
    company: 'BEADZZA',
    email: 'candicedurham@beadzza.com',
    ...userDetails.value
  }

  Axios.post('http://localhost:3000/employees', dataToUpdate).then(() => {
    emits('updateEmployeeAddition')
    userDetails.value = ref({
      name: '',
      id: '',
      email: '',
      company: ''
    })
  })
}
</script>

<template>
  <div class="accordion accordion-flush" id="accordionFlushExample">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseOne"
          aria-expanded="false"
          aria-controls="flush-collapseOne"
        >
          Add Employee Component
        </button>
      </h2>
      <div
        id="flush-collapseOne"
        class="accordion-collapse collapse"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          Enter Name: <input type="text" v-model="userDetails.name" /><br /><br />
          Enter Id: <input type="text" v-model="userDetails.id" /> <br /><br />
          Enter Email:<input type="text" v-model="userDetails.email" /><br /><br />
          Enter Company: <input type="text" v-model="userDetails.company" /><br /><br />
          <input type="button" value="Save" @click="addEmployee" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#accordionFlushExample {
  width: 600px;
  margin: 20px;
  border: 1px solid grey;
  padding: 4px;
}
</style>
