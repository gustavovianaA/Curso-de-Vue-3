const app = Vue.createApp({
    data() {
        return {
            url: "http://www.thenetninja.co.uk",
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick roth', img: 'assets/1.jpg', isFav: true },
                { title: 'the way of kings', author: 'brandom sanderson', img: 'assets/2.jpg', isFav: false },
                { title: 'the final empire', author: 'brandom sanderson', img: 'assets/3.jpg', isFav: true },
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')