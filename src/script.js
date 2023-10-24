const { createApp, ref } = Vue

createApp({
    data() {
        return {
            message: "Vue Implementation - Calculator & Task Tagged",
            angka1: 0, 
            angka2: 0, 
            res: 0, 
            message2: "Click to mark the task!",
            searchName: '', 
            searchTask: '',  
            List: [
                {
                    nama: "Bima",
                    task: "ETS P-WEB", 
                    isTrue: false
                }, 
                {
                    nama: "Abdi",
                    task: "ETS Kalkulus", 
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
        }, 
        ByNameSearch(){
            let flag = 1
            for (let i of this.List){
                if(i.nama === this.searchName){
                    this.toogleTrue(i)
                    flag = 0
                    break
                }
            }
            if(flag){
                alert("Nama tidak ada")
            }
        },
        ByTaskSearch(){
            let flag = 1
            for (let i of this.List){
                if(i.task === this.searchTask){
                    this.toogleTrue(i)
                    flag = 0
                    break
                }
            }
            if(flag){
                alert("Task tidak ada")
            }
        },
    }
}).mount('#app')
