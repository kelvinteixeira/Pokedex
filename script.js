const getPokemon = id => `https://pokeapi.co/api/v2/pokemon/${id}/`


const fetchPokemonI = () => {
  const pokemonPromises = []

  for (let i = 1; i <= 151; i++) {
    pokemonPromises.push(fetch(getPokemon(i)).then(response => response.json()))
  }

  function createCard(pokemons)  {
    return pokemons.reduce((card, {
      name,
      id,
      types
    }) => { 
      const Elementstypes = types.map(typeInfo => typeInfo.type.name)
      card += `
          <li class="card ${Elementstypes[0]}">
          <img class="poke-pic"  alt="${name}" src="http://pokeres.bastionbot.org/images/pokemon/${id}.png"}
          <h2 class="poke-name">Nº${id}  ${name}</h2>
          <p class="poke-type">${Elementstypes.join(' | ')}</p>
          </li>`
      return card
    }, '')

  }

  const insertPokemon = pokemons => {
    const ul = document.querySelector('[data-js="pokedex"]')
    ul.innerHTML = pokemons
  }

  Promise.all(pokemonPromises)
    .then(createCard)
    .then(insertPokemon)
}
fetchPokemonI()






















const fetchPokemonII = () => {
  const pokemonPromisesII = []

  for (let i = 152; i >= 152 && i <= 251; i++) {
    pokemonPromisesII.push(fetch(getPokemon(i)).then(response => response.json()))
  } // multiplos requests

  Promise.all(pokemonPromisesII)
    .then(pokemons => {

      const lisPokemons = pokemons.reduce((accumulator, pokemon) => {
        const types = pokemon.types.map(typeInfo => typeInfo.type.name)
        accumulator += `
          <li class="card">
          <img class="poke-pic" ${types[0]} alt="${pokemon.name}" src="http://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"}
           <h2 class="poke-name"> Nº${pokemon.id}. ${pokemon.name}</h2>
           <p class="poke-type">${types.join(' | ')}</p>
          </li>`
        return accumulator
      }, '')

      const ul = document.querySelector('[data-js="pokedex"]')
      ul.innerHTML = lisPokemons
    })
}

const fetchPokemonIII = () => {
  const pokemonPromisesIII = []

  for (let i = 252; i >= 252 && i <= 386; i++) {
    pokemonPromisesIII.push(fetch(getPokemon(i)).then(response => response.json()))
  } // multiplos requests

  Promise.all(pokemonPromisesIII)
    .then(pokemons => {

      const lisPokemons = pokemons.reduce((accumulator, pokemon) => { //redução de array em uma string
        const types = pokemon.types.map(typeInfo => typeInfo.type.name)
        accumulator += `
          <li class="card">
          <img class="poke-pic" ${types[0]} alt="${pokemon.name}" src="http://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"}
           <h2 class="poke-name"> Nº${pokemon.id}. ${pokemon.name}</h2>
           <p class="poke-type">${types.join(' | ')}</p>
          </li>`
        return accumulator
      }, '')

      const ul = document.querySelector('[data-js="pokedex"]')
      ul.innerHTML = lisPokemons
    })
}

const fetchPokemonIV = () => {
  const pokemonPromisesIV = []

  for (let i = 387; i >= 387 && i <= 493; i++) {
    pokemonPromisesIV.push(fetch(getPokemon(i)).then(response => response.json()))
  } // multiplos requests

  Promise.all(pokemonPromisesIV)
    .then(pokemons => {

      const lisPokemons = pokemons.reduce((accumulator, pokemon) => { //redução de array em uma string
        const types = pokemon.types.map(typeInfo => typeInfo.type.name)
        accumulator += `
          <li class="card">
          <img class="poke-pic" ${types[0]} alt="${pokemon.name}" src="http://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"}
           <h2 class="poke-name"> Nº${pokemon.id}. ${pokemon.name}</h2>
           <p class="poke-type"${types.join(' | ')}</p>
          </li>`
        return accumulator
      }, '')

      const ul = document.querySelector('[data-js="pokedex"]')
      ul.innerHTML = lisPokemons
    })
}

const fetchPokemonV = () => {
  const pokemonPromisesV = []

  for (let i = 494; i >= 494 && i <= 649; i++) {
    pokemonPromisesV.push(fetch(getPokemon(i)).then(response => response.json()))
  } // multiplos requests

  Promise.all(pokemonPromisesV)
    .then(pokemons => {

      const lisPokemons = pokemons.reduce((accumulator, pokemon) => { //redução de array em uma string
        const types = pokemon.types.map(typeInfo => typeInfo.type.name)
        accumulator += `
          <li class="card">
          <img class="poke-pic" ${types[0]} alt="${pokemon.name}" src="http://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"}
           <h2 class="poke-name"> Nº${pokemon.id}. ${pokemon.name}</h2>
           <p class="poke-type">${types.join(' | ')}</p>
          </li>`
        return accumulator
      }, '')

      const ul = document.querySelector('[data-js="pokedex"]')
      ul.innerHTML = lisPokemons
    })
}

const fetchPokemonVI = () => {
  const pokemonPromisesVI = []

  for (let i = 650; i >= 650 && i <= 721; i++) {
    pokemonPromisesVI.push(fetch(getPokemon(i)).then(response => response.json()))
  } // multiplos requests

  Promise.all(pokemonPromisesVI)
    .then(pokemons => {

      const lisPokemons = pokemons.reduce((accumulator, pokemon) => { //redução de array em uma string
        const types = pokemon.types.map(typeInfo => typeInfo.type.name)
        accumulator += `
          <li class="card">
          <img class="poke-pic" ${types[0]} alt="${pokemon.name}" src="http://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"}
           <h2 class="poke-name"> Nº${pokemon.id}. ${pokemon.name}</h2>
           <p class="poke-type">${types.join(' | ')}</p>
          </li>`
        return accumulator
      }, '')

      const ul = document.querySelector('[data-js="pokedex"]')
      ul.innerHTML = lisPokemons
    })
}

const fetchPokemonVII = () => {
  const pokemonPromisesVII = []

  for (let i = 722; i >= 722 && i <= 809; i++) {
    pokemonPromisesVII.push(fetch(getPokemon(i)).then(response => response.json()))
  } // multiplos requests

  Promise.all(pokemonPromisesVII)
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

const fetchPokemonVIII = () => {
  const pokemonPromisesVIII = []

  for (let i = 810; i >= 810 && i <= 898; i++) {
    pokemonPromisesVIII.push(fetch(getPokemon(i)).then(response => response.json()))
  } // multiplos requests

  Promise.all(pokemonPromisesVIII)
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