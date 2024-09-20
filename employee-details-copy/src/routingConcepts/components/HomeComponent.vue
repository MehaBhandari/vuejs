<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goToHelp() {
  router.push('/help')
}

function goToAbout() {
  router.push('/about')
}

function goToEmployee() {
  router.push('/employee/' + Math.floor(Math.random() * 10))
}
</script>

<template>
  <h1>This is Home page</h1>
  <input type="button" value="Help" @click="goToHelp" />
  <input type="button" value="About" @click="goToAbout" />
  <input type="button" value="Employee" @click="goToEmployee" />
</template>
