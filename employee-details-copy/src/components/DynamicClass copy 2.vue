<script>
export default {
  data() {
    return {
      stockName: '',
      stockPrice: 0,
      colorClass: '',
      clickValue: ''
    }
  },
  methods: {
    async extractPrice() {
      var response = await fetch('https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI')
      var jsonResponse = await response.json()
      if (jsonResponse.data.pricecurrent != this.stockPrice) {
        this.colorClass =
          jsonResponse.data.pricecurrent >= this.stockPrice ? 'increment-class' : 'decrement-class'
      }

      this.stockPrice = jsonResponse.data.pricecurrent
      this.stockName = jsonResponse.data.SC_FULLNM
    },
    applyColor(event) {
      if (event.target.value == 'Red') {
        this.clickValue = 'decrement-class'
      } else {
        this.clickValue = 'increment-class'
      }
    }
  },
  updated() {
    // alert('Updated')
  },
  created() {},
  mounted() {
    this.extractPrice()
    setInterval(() => {
      this.extractPrice()
    }, 10000)
  }
}
</script>

<template>
  <h1>Stock Favourite Name is {{ stockName }}</h1>
  <h2 :class="colorClass">Stock Price is: {{ stockPrice }}</h2>
  <h3 :class="clickValue">This is Vue Session</h3>

  <input v-on:click="applyColor" type="button" value="Red" style="margin: 10px; color: red" />
  <input v-on:click="applyColor" type="button" value="Green" style="margin: 10px; color: green" />
</template>

<style>
.increment-class {
  color: green;
}

.decrement-class {
  color: red;
}
</style>
