const fetchPokemonI = () => {
  const getPokemon = id => `https://pokeapi.co/api/v2/pokemon/${id}/`
  const pokemonPromises = []

  for (let i = 1; i <= 151; i++) {
    pokemonPromises.push(fetch(getPokemon(i)).then(response => response.json()))
  } // multiplos requests

  Promise.all(pokemonPromises)
    .then(pokemons => {
  
      const lisPokemons = pokemons.reduce((accumulator, pokemon) => { //redução de array em uma string
        const types = pokemon.types.map(typeInfo => typeInfo.type.name)
        accumulator += `
          <li class="card">
          <img class="poke-pic" ${types[0]} alt="${pokemon.name}" src="http://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"}
           <h2 class="poke-name">Nº${pokemon.id}. ${pokemon.name}</h2>
           <p class="poke-type"> ${types.join(' | ')}</p>
          </li>`
        return accumulator
      }, '')

      const ul = document.querySelector('[data-js="pokedex"]')
      ul.innerHTML = lisPokemons
    })
}

fetchPokemonI()


const fetchPokemonII = () => {
  const getPokemonII = id2 => `https://pokeapi.co/api/v2/pokemon/${id2}/`
  const pokemonPromisesII = []

  for (let i = 152; i >= 152 && i <= 251; i++) {
    pokemonPromisesII.push(fetch(getPokemonII(i)).then(response => response.json()))
  } // multiplos requests

  Promise.all(pokemonPromisesII)
    .then(pokemons => {
  
      const lisPokemons = pokemons.reduce((accumulator, pokemon) => { //redução de array em uma string
        const types = pokemon.types.map(typeInfo => typeInfo.type.name)
        accumulator += `
          <li class="card">
          <img class="poke-pic" ${types[0]} alt="${pokemon.name}" src="http://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"}
           <h2 class="poke-name"> Nº${pokemon.id}. ${pokemon.name}</h2>
           <p class="poke-type"> ${types.join(' | ')}</p>
          </li>`
        return accumulator
      }, '')

      const ul = document.querySelector('[data-js="pokedex"]')
      ul.innerHTML = lisPokemons
    })
}

const fetchPokemonIII = () => {
  const getPokemonIII = id3 => `https://pokeapi.co/api/v2/pokemon/${id3}/`
  const pokemonPromisesIII = []

  for (let i = 252; i >= 252 && i <= 386; i++) {
    pokemonPromisesIII.push(fetch(getPokemonIII(i)).then(response => response.json()))
  } // multiplos requests

  Promise.all(pokemonPromisesIII)
    .then(pokemons => {
  
      const lisPokemons = pokemons.reduce((accumulator, pokemon) => { //redução de array em uma string
        const types = pokemon.types.map(typeInfo => typeInfo.type.name)
        accumulator += `
          <li class="card">
          <img class="poke-pic" ${types[0]} alt="${pokemon.name}" src="http://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"}
           <h2 class="poke-name"> Nº${pokemon.id}. ${pokemon.name}</h2>
           <p class="poke-type"> ${types.join(' | ')}</p>
          </li>`
        return accumulator
      }, '')

      const ul = document.querySelector('[data-js="pokedex"]')
      ul.innerHTML = lisPokemons
    })
}

const fetchPokemonIV = () => {
  const getPokemonIV = id3 => `https://pokeapi.co/api/v2/pokemon/${id3}/`
  const pokemonPromisesIV = []

  for (let i = 387; i >= 387 && i <= 493; i++) {
    pokemonPromisesIV.push(fetch(getPokemonIV(i)).then(response => response.json()))
  } // multiplos requests

  Promise.all(pokemonPromisesIV)
    .then(pokemons => {
  
      const lisPokemons = pokemons.reduce((accumulator, pokemon) => { //redução de array em uma string
        const types = pokemon.types.map(typeInfo => typeInfo.type.name)
        accumulator += `
          <li class="card">
          <img class="poke-pic" ${types[0]} alt="${pokemon.name}" src="http://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"}
           <h2 class="poke-name"> Nº${pokemon.id}. ${pokemon.name}</h2>
           <p class="poke-type"> ${types.join(' | ')}</p>
          </li>`
        return accumulator
      }, '')

      const ul = document.querySelector('[data-js="pokedex"]')
      ul.innerHTML = lisPokemons
    })
}






















// const numPokemon = 10
// let pokemon
// let card

// function fetchPokemon() {
//   for (i = 1; i <= numPokemon; i++) {
//     getPokemon(i)
//   }
// }

// function getPokemon(id) {
//   let api_url = `https://pokeapi.co/api/v2/pokemon/${id}/`

//   fetch(api_url)
//     .then(response => response.json())
//     .then(data => {
//       pokemon = data;
//       console.log(pokemon.name)
//     })
//     .catch(err => console.log(err));
// }

// fetchPokemon()
// createCard()

// function createCard() {
//   card = `
//   <div class="card">
//     <img id="pic" class="item-pic" src="">
//     <h2 id="number" class="item-id">_ID_</h3>
//     <h2 id="name" class="item-name">_NAME_</h2>
//     <h3 id="type" class="item-type">_TYPE_</h3>
//   </div> `

//   return card
// }