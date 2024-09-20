<script setup>
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()
debugger
</script>

<template>
  <h1>This is data for Employee {{ route.params.employeeId }}</h1>
</template>
