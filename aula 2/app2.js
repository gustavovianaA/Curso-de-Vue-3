const app = Vue.createApp({
    //data, functions
    //template: '<h2>template</h2>'
    data() {
        return {
            showBooks: true,
            title: 'The final empire',
            author: 'Brandom Sanderson',
            age: 45
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')