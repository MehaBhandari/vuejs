import { defineStore } from "pinia"
import { ref } from "vue"

const applicationStore = defineStore("applicationStore", () => {

    const count = ref(1000)
    
    function updateCount() {
        count.value = count.value + 1;
    }
    
    return { updateCount, count }

})

export default applicationStore
