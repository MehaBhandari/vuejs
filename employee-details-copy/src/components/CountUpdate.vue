<script>
export default {
  data() {
    return {
      count: 0,
      details: {
        random: 0
      }
    }
  },
  mounted() {
    setInterval(() => {
      this.count = 1
      this.details.random += 1
    }, 500)
  },
  updated() {
    console.log('view updated...')
  }
}
</script>

<template>
  <h1>Stock Count Name is {{ count }}</h1>
  <h1>Stock Count Name is {{ details.random }}</h1>
</template>

<style>
.increment-class {
  color: green;
}

.decrement-class {
  color: red;
}
</style>
