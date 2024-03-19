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
        },
        changeFav(book){
            book.isFav = !book.isFav
            console.log(this.books)
            //if I manipulate the object passed, the element in html will react
            //changing the book argument object, will change this.books objects 
        }
    },
    computed: {
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')