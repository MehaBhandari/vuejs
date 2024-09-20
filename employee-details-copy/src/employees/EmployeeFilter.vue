<script setup>
import { ref, watch } from 'vue'
const filterText = ref('')
var props = defineProps(['employeeList'])
var emit = defineEmits(['notifyFiltered'])

watch(filterText, function (newValue) {
  var filteredList = props.employeeList.filter(function (employee) {
    return employee.name.indexOf(newValue) > -1
  })

  emit('notifyFiltered', filteredList)
})
</script>

<template>
  <div class="filter-container">
    <label>Filter Employee by Name</label>
    <input type="text" v-model="filterText" />
  </div>
</template>

<style>
.filter-container {
  margin-left: 20px;
}
</style>
