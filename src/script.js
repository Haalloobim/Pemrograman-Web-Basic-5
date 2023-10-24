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
    methods: {
        plus(){
            this.res = this.angka1 + this.angka2
        }, 
        min(){
            this.res = this.angka1 - this.angka2
        },
        kali(){
            this.result = this.angka1 * this.angka2
        }, 
        bagi(){
            this.res = this.angka1 / this.angka2
        },
    }
}).mount('#app')
