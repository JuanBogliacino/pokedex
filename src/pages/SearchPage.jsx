import { useContext, useState, useRef, useEffect } from "react"
import { PokemonContext } from '../context/PokemonContext'
import { CardPokemon } from "../components/CardPokemon"

function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search == ''
      return
    }

    if (search == '') {
      setError('No se puede hacer una busqueda vacía')
      return
    }
    
    setError(null)
  }, [search])

  return { search, setSearch, error }
}

const SearchPage = () => {
  const { globalPokemons } = useContext(PokemonContext)
  const { search,  setSearch, error} = useSearch()

	const handleChange = (event) => {
		const newSearch = event.target.value
		setSearch(newSearch)
	  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const searchPokemons = globalPokemons.filter(pokemon =>
    pokemon.name.startsWith(search)
  );
    
  return (
    <>
     <header className='header-home'>
        <form onSubmit={handleSubmit}>
					<div className='form-group'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='icon-search'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
							/>
						</svg>
						<input
							type='search'
							name='valueSearch'
							id=''
							value={search}
							onChange={handleChange}
							placeholder='Buscar pokemon'
              className="input-search"
						/>
					</div>
				</form>
        {error && <p style={{color: 'red'}}>{error}</p>}
     </header>
     
     {
      search != '' && (
        <section>
          {
            searchPokemons.length > 0
            ? (
              <article>
                <p className='p-search'>Se encontraron <span>{searchPokemons.length}</span> resultados:</p>
               <div className="card-list-pokemon pokemon-list">
                {searchPokemons.map(pokemon => (
                <CardPokemon pokemon={pokemon} key={pokemon.id} />
                ))}
               </div>
              </article>
              )
            :
            <div className="no-results-pokemon">
             <h2>no se encontraron pokemones</h2>
             <img src="https://i.blogs.es/4e1365/pikach/450_1000.jpg" alt="poke-img" />
            </div>
          }
        </section>
      )
     }
    </>
  )
}

export default SearchPage