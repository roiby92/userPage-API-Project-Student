class Renderer {
    
    // render(user,friends,kanyeQoute,bacon,favoritPokemon){
    //     this.renderUser(user),
    //     this.randerFriends(friends)
    //     this.renderQoute(kanyeQoute)
    //     this.renderBacon(bacon)
    //     this.renderPokemon(favoritPokemon)
    // }
    renderUser(user){
        $(".user-container").empty()
        const source = $('#user-template').html()
        const template = Handlebars.compile(source);
        const userHtml = template(user);
        $('.user-container').append(userHtml)
    }

    renderFriends(friends){
        $(".friends-container").empty()
        const source = $('#friends-template').html();
        const template = Handlebars.compile(source);
        const friendsHtml = template({friends});
        $('.friends-container').append(friendsHtml)
    }

    renderQuote(kanyeQuote){
        $(".quote-container").empty()
        const source = $('#quote-template').html();
        const template = Handlebars.compile(source);
        const qouteHtml = template(kanyeQuote);
        $('.quote-container').append(qouteHtml) 
    }

    renderBacon(bacon){
        $(".meat-container").empty()
        const source = $('#bacon-template').html();
        const template = Handlebars.compile(source);
        const meatHtml = template(bacon);
        $('.meat-container').append(meatHtml)  
    }

    renderPokemon(favoritPokemon){
        $(".pokemon-container").empty()
        const source = $('#pokemon-template').html();
        const template = Handlebars.compile(source);
        const pokemonHtml = template(favoritPokemon);
        $('.pokemon-container').append(pokemonHtml) 
    }

}
