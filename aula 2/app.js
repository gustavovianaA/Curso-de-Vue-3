const app = Vue.createApp({
    //data, functions
    //template: '<h2>template</h2>'
    data() {
        return {
            title: 'The final empire',
            author: 'Brandom Sanderson',
            age: 45
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        }
    }
})

app.mount('#app')