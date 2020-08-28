//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.userData = {
            user: {},
            friends: [],
            kanyeQuote: {},
            bacon: {},
            favoritPokemon: {}
        }
    }
    
    getData() {
        this.getUserDataAndFrindes()
        this.getKanyeQuote()
        this.getBacon()
        this.getFavoritPokemon()
    }

    getUserDataAndFrindes() {
        $.ajax({
            method: "GET",
            url: "https://randomuser.me/api/?results=7",
            success: data => {
                this.userData.user.name = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`
                this.userData.user.img = data.results[0].picture.large
                this.userData.user.address = `${data.results[0].location.city} , ${data.results[0].location.state}`
                this.userData.friends = data.results.filter(r => (r.id.value != data.results[0].id.value)).map(r => `${r.name.first} ${r.name.last}`)
            }
        })
    }

    getKanyeQuote() {
        $.ajax({
            method: "GET",
            url: "https://api.kanye.rest/?format=text",
            success: data => {
                this.userData.kanyeQuote.quote = data
            }
        })
    }

    getFavoritPokemon() {
        let randomId = Math.floor(Math.random() * 100) + 1
        $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${randomId}/`,
            success: data => {  
                this.userData.favoritPokemon.name = data.name
                this.userData.favoritPokemon.img = data.sprites.back_default
            }
        })
    }

    getBacon() {
        $.ajax({
            method: "GET",
            url: "https://baconipsum.com/api/?type=all-meat&paras=1",
            success: data => {
                this.userData.bacon.meat = data[0]
            }
        })
    }
}
