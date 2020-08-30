const user = new APIManager()
const renderer = new Renderer()

$('#load').on('click',function(){
    user.getData()
    console.log(user);
})

$('#display').on('click' ,function(){
    renderer.renderUser(user.userData.user)
    renderer.renderFriends(user.userData.friends)
    renderer.renderQuote(user.userData.kanyeQuote.quote)
    renderer.renderBacon(user.userData.bacon.meat)
    renderer.renderPokemon(user.userData.favoritPokemon)
})
// renderer.renderUser(".user-container", '#user-template', user.userData.user)
// renderer.renderFriends(".friends-container", '#friends-template',  user.userData.friends)
// renderer.renderQuote(".quote-container", '#quote-template', user.userData.kanyeQuote)
// renderer.renderBacon(".meat-container", '#bacon-template', user.userData.bacon)
// renderer.renderPokemon(".pokemon-container", '#pokemon-template', user.userData.favoritPokemon)