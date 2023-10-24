const { createApp, ref } = Vue

createApp({
    data() {
        return {
            message: "Vue Implementation - Calculator & Task Tagged",
            angka1: 0, 
            angka2: 0, 
            res: 0, 
            List: [
                {
                    nama: "Bima",
                    task: "ETS P-WEB", 
                    isTrue: true
                }, 
                {
                    nama: "Jeri",
                    task: "ETS Teori Graf", 
                    isTrue: true
                }, 
                {
                    nama: "Iftala",
                    task: "Web Development", 
                    isTrue: true
                }, 
                {
                    nama: "Aditya",
                    task: "ETS Matdis", 
                    isTrue: true
                }, 
                {
                    nama: "Kaisar",
                    task: "Codeforces Thing", 
                    isTrue: true
                }, 
                {
                    nama: "Moris", 
                    task: "ETS PBO", 
                    isTrue: true
                }
            ],
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
            this.res = this.angka1 * this.angka2
        }, 
        bagi(){
            this.res = this.angka1 / this.angka2
        },
    }
}).mount('#app')
