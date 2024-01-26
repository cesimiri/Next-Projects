
"use client"
import PokemonPreview from "./pokemonPreview"
const PokemonList = ({pokemons}) =>{
    return(
        <section className="pt-4 grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))]
        gap-4">

            {
                pokemons.map(pokemon=> (
                    <PokemonPreview key={pokemon.url} pokemonUrl={pokemon.url}/>
                ))
            }
        </section>
    )
}

export default PokemonList