<script setup>
import { onErrorCaptured, ref, watch } from 'vue'
import ChildComponent from './ErrComponent.vue'
const userDetails = ref('Mayank Gupta')

watch(userDetails, function () {
  console.log('This is the data updated from the Watcher...')
})

onErrorCaptured((err) => {
  alert('error :' + err)
})

function displayValue() {
  alert(userDetails.value)
}

function updateUserName(event) {
  userDetails.value = event.target.value
}

function updateValue() {
  console.log('Updated...')
}
</script>

<template>
  <ChildComponent></ChildComponent>
  <b>User Name is: {{ userDetails }}</b
  ><br /><br />
  <hr />
  <br />
  <input
    type="text"
    :value="userDetails"
    @change="updateUserName"
    @blur="blurUserInput"
  /><br /><br />
  <input type="button" value="Click to Extract Value" @click="displayValue" />
  <hr />
  <div><b>This is working with v-model Attribute (2 Way Data bindings)</b><br /></div>
  <br />
  <input type="text" v-model="userDetails" @input="updateValue" /><br />
  <hr />
  <b>This is usage of Watcher...</b>
  <input type="text" v-model="userDetails" />
</template>
