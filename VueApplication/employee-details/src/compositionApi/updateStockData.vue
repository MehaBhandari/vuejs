<script setup>
import { ref, onMounted } from 'vue'
import Axios from 'axios'
const stockValue = ref(0)
const stockColor = ref('green')

function updateColor(newStockPrice) {
  if (newStockPrice != stockValue.value) {
    stockColor.value = newStockPrice >= stockValue.value ? 'green' : 'red'
    stockValue.value = newStockPrice
  }
}

function getColor() {
  return stockColor.value
}

onMounted(() => {
  setInterval(() => {
    Axios.get('https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI').then((response) => {
      updateColor(response.data.data.pricecurrent)
    })
  }, 1000)
})
</script>

<template>
  <h1 :style="{ color: getColor() }">The SBI Stock Value is {{ stockValue }}</h1>
</template>
