const user = new APIManager()
const renderer = new Renderer()

$('#load').on('click',function(){
    user.getData()
    console.log(user);
})

$('#display').on('click' ,function(){
    renderer.renderUser(user.userData.user)
    renderer.renderQuote(user.userData.kanyeQuote.quote)
    renderer.renderFriends(user.userData.friends)
    renderer.renderBacon(user.userData.bacon.meat)
    renderer.renderPokemon(user.userData.favoritPokemon)
})