<script>
export default {
  data() {
    return {
      stockName: '',
      stockPrice: 0,
      stockColor: ''
    }
  },
  methods: {
    extractPrice() {
      fetch('https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI').then((response) => {
        response.json().then((jsonResponse) => {
          if (jsonResponse.data.pricecurrent != this.stockPrice) {
            this.stockColor = jsonResponse.data.pricecurrent >= this.stockPrice ? 'green' : 'red'
          }

          this.stockPrice = jsonResponse.data.pricecurrent
          this.stockName = jsonResponse.data.SC_FULLNM
        })
      })
    }
  },
  mounted() {
    this.extractPrice()
    setInterval(() => {
      this.extractPrice()
    }, 1000)
  }
}
</script>

<template>
  <h1>Stock Name is {{ stockName }}</h1>
  <h2 v-bind:style="{ color: stockColor }">Stock Price is: {{ stockPrice }}</h2>
  <h3 class="my-header">This is Vue Session</h3>
</template>

<style>
.my-header {
  color: grey;
}
</style>
