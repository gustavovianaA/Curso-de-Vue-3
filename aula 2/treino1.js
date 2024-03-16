const app = Vue.createApp({

    data() {
        return {
            endGame: false,
            collected: 0,
            available: Math.floor(Math.random() * 20),
        }
    },
    methods: {
        collect() {
            this.collected++
            this.available--

            if (this.available <= 0)
                this.endGame = true

        },
        newGame() {
            this.collected = 0
            this.available = Math.floor(Math.random() * 20)
            this.endGame = false
        }
    }
})

app.mount('#app')