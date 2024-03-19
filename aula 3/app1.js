const app = Vue.createApp({
    //data, functions
    //template: '<h2>template</h2>'
    data() {
        return {
            showBooks: true,
            title: 'The final empire',
            author: 'Brandom Sanderson',
            age: 45,
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        //passing the event object as a parameter
        handleEvent(e, data) {
            console.log(e)
            alert(e.type)

            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app')