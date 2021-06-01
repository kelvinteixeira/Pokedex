const numPokemon = 10

function fetchPokemon() {
  for(i = 1; i <= numPokemon; i++) {
    getPokemon(i)
  }
}


function getPokemon(id) {
  let api_url = `https://pokeapi.co/api/v2/pokemon/${id}/`

  fetch(api_url)
    .then(response => response.json())
    .then(data => {
      pokemons = data;
      console.log(pokemons.name)
    })
    .catch(err => console.log(err));

}

fetchPokemon()