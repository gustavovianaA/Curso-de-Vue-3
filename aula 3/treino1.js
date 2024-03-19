const app = Vue.createApp({
    data() {
        return {
            selectedImage: {title: 'Title 1' , img: 'assets/g1.webp'},
            images: [
                {title: 'Title 1' , img: 'assets/g1.webp'},
                {title: 'Title 2' , img: 'assets/g2.jpg'},
                {title: 'Title 3' , img: 'assets/g3.jpg'},
                {title: 'Title 4' , img: 'assets/g4.jpg'},
                {title: 'Title 5' , img: 'assets/g5.jpg'},
                {title: 'Title 6' , img: 'assets/g6.jpg'},
                {title: 'Title 7' , img: 'assets/g7.webp'},
                {title: 'Title 8' , img: 'assets/g8.jpg'},
                {title: 'Title 9' , img: 'assets/g1.webp'},
                {title: 'Title 10' , img: 'assets/g2.jpg'},
                {title: 'Title 11' , img: 'assets/g3.jpg'},
                {title: 'Title 12' , img: 'assets/g4.jpg'},
                {title: 'Title 13' , img: 'assets/g5.jpg'},
                {title: 'Title 14' , img: 'assets/g6.jpg'},
                {title: 'Title 15' , img: 'assets/g7.webp'},
                {title: 'Title 16' , img: 'assets/g8.jpg'},
            ]
        }
    },
    methods: {
        selectImage(image){
            this.selectedImage.img = image.img
            this.selectedImage.title = image.title
        }
    }
})

app.mount('#app')