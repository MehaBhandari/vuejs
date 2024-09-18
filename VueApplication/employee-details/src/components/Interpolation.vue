<script>
export default {
  name: 'App',
  created() {
    alert('The Component has created...')
  },
  mounted() {
    alert('The Application Component has beed rendered...')
  }
}
</script>

<template>
  <h1>Hello From TechnoFunnel Component</h1>
  <h2>Trainer Name: Mayank Gupta</h2>
  <h3>This one from RPS</h3>
  <h4>
    The Current time is {{ 'Mayank' + ' : ' + 'Gupta' + ' ' + Math.floor(Math.random() * 100) }}
  </h4>
</template>

<style>
h1 {
  color: red;
}
h2 {
  color: green;
}
h3 {
  color: grey;
}
</style>
