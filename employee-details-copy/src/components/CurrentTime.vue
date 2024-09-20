<script>
export default {
  name: 'CurrentTime',
  data() {
    return {
      time: this.showTime(),
      userName: 'TechnoFunnel'
    }
  },
  methods: {
    showTime() {
      return new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
    },
    getUserName() {
      return this.userName
    }
  },
  mounted() {
    setInterval(() => {
      this.time = this.showTime()
    }, 1000)
  }
}
</script>

<template>
  <h1>Current Time is {{ time }}</h1>
  <h2>User Name is {{ getUserName() }}</h2>
</template>
