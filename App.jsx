import { useState, useEffect } from 'react';
import './App.css';


const App = () => {
  const [inputName, setInputName] = useState('')
  const [dataPokemon, setDataPokemon] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const getPokemon = async (PokemonName) => {
    try {
      setLoading(true)
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${PokemonName}`)
    
      if(!response.ok) {
        throw new Error("Pokemon no encontrado");
    }
    
      const data = await response.json()
      console. log(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getPokemon(inputName)
  }, [inputName])

  return(
  <>

    <form>
    <input
      type="text"
      value={inputName}
      onChange={e => setInputName(e.target.value)}
      placeholder='Introduce un nombre de pokemon'
    />
    </form>
    
{dataPokemon && (
  <>
    <h1>{dataPokemon.name}</h1>
    <img src={dataPokemon.sprites?.other?.dream_world?.front_default} alt={dataPokemon.name} />
  </>
  )}
</>

)
};

export default App;








