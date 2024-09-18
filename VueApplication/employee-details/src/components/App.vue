<script>
export default {
  name: 'App',
  data() {
    return {
      userName: 'Mayank',
      userSurName: 'Gupta',
      userAge: 36,
      details: {
        address: {
          city: 'Gurgaon'
        },
        country: 'India'
      }
    }
  },
  created() {
    console.log('Created')
  },
  mounted() {
    console.log('Mounted')
  },
  methods: {
    clickButton() {
      console.log('This is the Button click')
    }
  },
  computed: {
    fullName() {
      return this.userName + ' ' + Date.now() + ' ' + Math.random()
    }
  }
}
</script>

<template>
  <div id="app-component">
    <h1>The User Name is {{ userName + ' ' + Date.now() }}</h1>
    <h1>The User Age is {{ userAge }}</h1>
    <h2>User Belong to {{ details.address.city }}</h2>
    <input type="button" value="Click Me.." @mouseover="clickButton" />
  </div>
</template>

<style>
#app-component h1 {
  color: rgb(9, 17, 9);
}
</style>
