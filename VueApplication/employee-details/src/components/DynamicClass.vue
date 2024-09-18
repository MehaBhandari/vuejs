<script>
export default {
  data() {
    var myData = 10
    console.log(myData)
    return {
      appliedClass: 'header-class',
      doApply: true,
      doImplement: true,
      someId: 'mayank',
      firstClass: 'header-class',
      secondClass: 'other-class',
      colorVariable: 'blue',
      age: myData + 100
    }
  },
  methods: {
    changeColor() {
      this.doApply = !this.doApply
      this.someId = 'mayank'
      this.colorVariable = 'purple'
      this.firstClass = 'dhsgfk'
    }
  }
}
</script>

<template>
  <h1 :id="someId" :class="{ 'header-class': doApply, 'other-class': doImplement }" s>
    doApply is Updated on
  </h1>

  <h2 :class="[someId == 'mayank' ? firstClass : '', secondClass]">This will Change Color</h2>

  <h2 :class="[firstClass, secondClass]">This will Change Color</h2>

  <h3 class="abc zyz technofunnel" :class="someId == 'mayank' ? 'header-class' : 'other-class'">
    Simple Binding
  </h3>

  <h4 :style="{ color: colorVariable }">This is Color Div</h4>

  <input type="text" value="TechnoFunnel" :disabled="doApply" />
  <input type="button" value="Click" @click="changeColor" />
</template>

<style>
.header-class {
  color: green;
}

.other-class {
  border: 1px solid red;
}
</style>
