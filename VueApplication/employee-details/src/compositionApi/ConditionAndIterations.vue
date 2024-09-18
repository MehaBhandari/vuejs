<script setup>
import { ref } from 'vue'
const userDetails = ref({
  userName: 'Mayank',
  userAge: 10
})

function incrementAge() {
  userDetails.value.userAge += 1
}
</script>

<template>
  <h1>User Name is {{ userDetails.userName }}</h1>
  <h2>User age is {{ userDetails.userAge }}</h2>

  <h3 v-if="userDetails.userAge < 18">User is Under Age</h3>
  <h3 v-else-if="userDetails.userAge >= 18 && userDetails.userAge < 25">This Age is Eligible</h3>
  <h3 v-else-if="userDetails.userAge >= 25 && userDetails.userAge < 30">
    This Age is Slightly Eligible
  </h3>
  <h3 v-else>This Age is Above Eligibility</h3>

  <input type="button" value="Click" @click="userDetails.userAge++" />
  <input type="button" value="Click Again" @click="incrementAge" />
</template>
