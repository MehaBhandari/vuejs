<script>
export default {
  name: 'DynamicComponent',
  data() {
    return {
      counter: 100,
      incrementValue: 1
    }
  },
  methods: {
    updateCounter() {
      this.counter += this.incrementValue
    },
    updateIncrementCounter(event) {
      this.incrementValue = +event.target.value
    }
  }
}
</script>

<template>
  <h1>Counter Number is {{ counter }}</h1>
  <h2>Increment By: {{ incrementValue }}</h2>

  <div>
    <input type="text" :value="incrementValue" @keyup="updateIncrementCounter" />
    <hr />
    <br />
  </div>

  <input
    :data-counter="incrementValue"
    type="button"
    value="Click Data from Dataset"
    @click="updateCounter"
  /><br />
</template>
