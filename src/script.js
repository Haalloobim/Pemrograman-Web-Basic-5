const { createApp, ref } = Vue

createApp({
    data() {
        return {
            message: "Vue Implementation - Calculator",
            angka1: 0, 
            angka2: 0, 
            operasi: 0,
            res: 0, 
        }
    },
    
}).mount('#app')
