<script setup>
import applicationStore from './store/appStore'
const dataFromStore = applicationStore()
</script>

<template>Data from Store: {{ dataFromStore.count }}</template>
