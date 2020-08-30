class Renderer {

    renderUser(user) {
        $(".user-container").empty()
        const source = $('#user-template').html()
        const template = Handlebars.compile(source);
        const userHtml = template(user);
        $('.user-container').append(userHtml)
    }

    renderFriends(friends) {
        $(".friends-container").empty()
        const source = $('#friends-template').html();
        const template = Handlebars.compile(source);
        const friendsHtml = template({ friends });
        $('.friends-container').append(friendsHtml)
    }

    renderQuote(kanyeQuote) {
        $(".quote-container").empty()
        const source = $('#quote-template').html();
        const template = Handlebars.compile(source);
        const qouteHtml = template(kanyeQuote);
        $('.quote-container').append(qouteHtml)
    }
    renderBacon(bacon) {
        $(".meat-container").empty()
        const source = $('#bacon-template').html();
        const template = Handlebars.compile(source);
        const meatHtml = template(bacon);
        $('.meat-container').append(meatHtml)
    }

    renderPokemon(favoritPokemon) {
        $(".pokemon-container").empty()
        const source = $('#pokemon-template').html();
        const template = Handlebars.compile(source);
        const pokemonHtml = template(favoritPokemon);
        $('.pokemon-container').append(pokemonHtml)
    }

}

// render(containerId, tEmplate, data,) {
//     $(`${containerId}`).empty()
//     const source = $(`${tEmplate}`).html()
//     const template = Handlebars.compile(source);
//     const newHtml = template(data);
//     $(`${containerId}`).append(newHtml)
// }
// renderFriends(Data) {
//     this.render(".friends-container", '#friends-template',  {Data})
// }
// renderUser(Data) {
//     this.render(".user-container", '#user-template', Data)
// }
// renderQuote(Data) {
//     this.render(".quote-container", '#quote-template', Data)
// }
// renderBacon(Data){
//     this.render(".meat-container", '#bacon-template', Data)
// }
// renderPokemon(Data){
//     this.render(".pokemon-container", '#pokemon-template',Data)
// }