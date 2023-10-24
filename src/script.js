const { createApp, ref } = Vue

createApp({
    data() {
        return {
            message: "Vue Implementation - Calculator & Task Tagged",
            angka1: 0, 
            angka2: 0, 
            res: 0, 
            message2: "Click to mark the task!", 
            List: [
                {
                    nama: "Bima",
                    task: "ETS P-WEB", 
                    isTrue: false
                }, 
                {
                    nama: "Jeri",
                    task: "ETS Teori Graf", 
                    isTrue: false
                }, 
                {
                    nama: "Iftala",
                    task: "Web Development", 
                    isTrue: false
                }, 
                {
                    nama: "Aditya",
                    task: "ETS Matdis", 
                    isTrue: false
                }, 
                {
                    nama: "Kaisar",
                    task: "Codeforces Thing", 
                    isTrue: false
                }, 
                {
                    nama: "Moris", 
                    task: "ETS PBO", 
                    isTrue: false
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
        toogleTrue(e){
            e.isTrue = !e.isTrue
        }
    }
}).mount('#app')
