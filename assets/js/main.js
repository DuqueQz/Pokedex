const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 5
let offset = 0;

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(pokemon).join('')
        pokemonList.innerHTML = newHtml 
    })
}

loadMoreButton.addEventListener('click', () => {
    loadPokemonItens
})