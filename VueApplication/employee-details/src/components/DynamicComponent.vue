<script>
export default {
  name: 'DynamicComponent',
  data() {
    return {
      counter: 100,
      incrementValue: 500,
      buttonText: 'Dynamic: Click to Add 1 to the Counter'
    }
  },
  methods: {
    updateCounter(userCount) {
      console.log('Calling Function with Parameter')
      this.counter = this.counter + userCount
    },
    updateCounterWithoutParameter(event) {
      this.counter += +event.target.className
    },
    updateCounterWithDataset(event) {
      this.counter += +event.target.dataset['counter']
    }
  }
}
</script>

<template>
  <h1>Counter Number is {{ counter }}</h1>
  <h2>Increment By: {{ incrementValue }}</h2>

  <input
    type="button"
    class="classOne classTwo"
    :value="buttonText"
    @click="updateCounter(1)"
  /><br />

  <input
    class="2"
    id="100"
    type="button"
    value="Click to Add 2 to the Counter"
    @click="updateCounterWithoutParameter"
  /><br />

  <input
    :data-counter="incrementValue"
    data-username="Mayank"
    data-userage="20"
    type="button"
    value="Click Data from Dataset"
    @click="updateCounterWithDataset"
  /><br />
</template>
