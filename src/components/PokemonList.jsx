import React from 'react'

const PokemonList = ({ pokemons, handleDeletePokemon }) => {
  return (
    <ul className='pokemonList'>
          {
            pokemons.map((pokemon, index) => {
              return (
                <li key={index}>
                  <p>{pokemon.name}</p>
                  <button onClick={() => handleDeletePokemon(pokemon.name)}>Delete</button>
                </li>
              )
            })
          }
        </ul>
  )
}

export default PokemonList