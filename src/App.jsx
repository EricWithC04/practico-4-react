import { useState } from 'react'
import PokemonList from './components/PokemonList'
import './App.css'

function App() {

  const [pokemons, setPokemons] = useState([])

  const changeFirstCharToUpperCase = (arr) => {
    const completedArr = arr.map(pokemon => {
      const firstChar = pokemon.name.charAt(0).toUpperCase()
      const newName = firstChar + pokemon.name.slice(1)
      return {...pokemon, name: newName}
    })
    return completedArr
  }

  const handleBrowsePokemons = () => {
    if (!pokemons.length) {
      fetch("https://pokeapi.co/api/v2/pokemon")
        .then(res => res.json())
        .then(data => {
          const allPokemons = changeFirstCharToUpperCase(data.results)
          setPokemons(allPokemons)
        })
    }
  }

  const handleDeletePokemon = (name) => {
    const deletedPokemon = pokemons.filter(pokemon => pokemon.name !== name)
    setPokemons(deletedPokemon)
  }

  return (
    <>
      <h1>Pokemons List</h1>
      <div className="card">
        <button onClick={handleBrowsePokemons}>
          Browse Pokemons
        </button>
        <PokemonList pokemons={pokemons} handleDeletePokemon={handleDeletePokemon} />
      </div>
    </>
  )
}

export default App
