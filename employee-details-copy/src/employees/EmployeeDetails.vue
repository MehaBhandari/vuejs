<script setup>
import { defineProps, defineEmits } from 'vue'
defineProps(['employee'])
var emits = defineEmits(['deleteEmployeeEvent'])

const imageUrl =
  'https://images.blog.airmason.com/wp-content/uploads/2023/10/Which-is-Correct-A-Employee-or-An-Employee-Exploring-the-Difference.png'

function deleteEmployee(event) {
  emits('deleteEmployeeEvent', event.target.dataset.employeeid)
}
</script>

<template>
  <div class="card" style="width: 12rem">
    <img :src="imageUrl" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title" style="font-size: 14px">{{ employee.name }}</h5>
      <p class="card-text">
        <label style="font-size: 10px">Id: {{ employee.id }}</label
        ><br />
        <label style="font-size: 10px">Balance: {{ employee.balance }}</label
        ><br />
        <label style="font-size: 10px">Company: {{ employee.company }}</label>
      </p>
      <input
        type="button"
        style="font-size: 10px"
        class="btn btn-primary"
        :value="'Delete ' + employee.name"
        :data-employeeid="employee.id"
        @click="deleteEmployee"
      />
    </div>
  </div>
</template>

<style></style>
