import { useState } from 'react'
import PokemonList from './components/PokemonList'
import './App.css'

function App() {

  const [pokemons, setPokemons] = useState([])

  const handleBrowsePokemons = () => {
    if (!pokemons.length) {
      fetch("https://pokeapi.co/api/v2/pokemon")
        .then(res => res.json())
        .then(data => setPokemons(data.results))
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
