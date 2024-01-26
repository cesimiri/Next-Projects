
"use client"
import { useState, useEffect } from "react";
import axios from 'axios';
import PokemonList from "./PokemonList";

export default function Pokedex() {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=480';

    const [allPokemons, setAllPokemons] = useState([]);
    const [pokemonName , setPokemonName] = useState ("");

    // filtro para que devuelva solo el nuevo listado del pokemon encontrado
    const pokemonByName = allPokemons.filter(pokemon => pokemon.name.includes(pokemonName))
    
    //que busque por medio del boton buscar
    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log(e.target.pokemonName.value)
        setPokemonName(e.target.pokemonName.value.toLowerCase());
    }

    // buscador por input
    const handleChangePokemonName = (e)=>{
        setPokemonName(e.target.value.toLowerCase())
    }

    useEffect(() => {
        axios
            .get(url)
            .then(({ data }) => setAllPokemons(data.results) )
            .catch((err) => console.log(err));

    }, [])

    return (
        <section className="w-screen h-screen bg-slate-200 p-4 py-5 overflow-y-auto">
            <form onSubmit={handleSubmit}>
                <div className="bg-white p-4 flex rounded-2xl text-lg">
                    <input
                        className="text-blue-700 outline-none flex-1"
                        type="text"
                        placeholder="Search Your Pokemon"
                        name= "pokemonName"
                        autoComplete="off"
                        onChange={handleChangePokemonName}
                    />
                    <button className="bg-red-600 hover:bg-red-950 
                        border-2 border-cyan-400 
                        rounded-xl 
                        shadow-lg shadow-red-600">
                        Search
                    </button>
                </div>
            </form>
            {/* al inicio que mostrara todos pero ya filtrado por busqueda que solo muestre eso
            <PokemonList pokemons={allPokemons}/> */}
            <PokemonList pokemons={pokemonByName}/>
        </section>


    )
}
