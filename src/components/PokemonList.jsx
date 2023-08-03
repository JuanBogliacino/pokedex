import { useContext } from "react"
import { PokemonContext } from "../context/PokemonContext"
import { CardPokemon } from "./CardPokemon"

const PokemonList = () => {
    const { allPokemons, loading, filteredPokemons } = useContext(PokemonContext)

  return (
    <>
     {
      loading 
      ? <h1 style={{textAlign:'center'}}>Cargando...</h1>
      : (
        <section>
          {
            filteredPokemons.length > 0 
            ? (
              <>
               <p className='p-search'>Se encontraron <span>{filteredPokemons.length}</span> resultados:</p>
               <div className="card-list-pokemon pokemon-list">
                {filteredPokemons.map((pokemon, index) => <CardPokemon pokemon={pokemon} key={index} />)}
               </div>
              </>
            ) : (
              <>
               <div className="card-list-pokemon pokemon-list">
                {allPokemons.map(pokemon => <CardPokemon pokemon={pokemon} key={pokemon.id} />)}
               </div>
              </>
            )
          }
        </section>
      )
     }
    </>
  )
}

export default PokemonList