
"use client"
//eslint-disable-next-line react/prop-types
import axios from "axios";
import { useEffect, useState } from "react";

const PokemonPreview = ({ pokemonUrl }) => {
    const [pokemon, setPokemon] = useState(null);

    const colorByType = {
        normal: "bg-green-400",
        fire: "bg-orange-500",
        water: "bg-cyan-500",
        rock: "bg-amber-900",
        fairy: "bg-pink-500",
        electric: "bg-yellow-500",
    }

    useEffect(() => {
        axios
            .get(pokemonUrl)
            .then(({ data }) => setPokemon(data))
            .catch((err) => console.log(err));

    }, [])

    return (
        <article className="text-center  bg-white rounded-[30px] relative
        font-semibold capitalize pb-5 
        shadow-lg shadow-slate-400/10
        cursor-pointer">
            <header className="h-10">
                <img
                    className="absolute left-1/2  -translate-x-1/2 top-4 -translate-y-1/2"
                    src={pokemon?.sprites.versions["generation-v"]["black-white"]
                        .animated
                        .front_default
                    }
                />
            </header>
            <span className="text-sm text-slate-400">#POKEDEX: {pokemon?.id}</span>
            <h4>{pokemon?.name}</h4>
            <ul className="flex gap-2 justify-center">
                {pokemon?.types.map(type =>
                    <li
                        className={`bg-red-500  p-1 rounded-md px-2 text-white 
                    ${colorByType[type.type.name]}`}
                        key={type.type.name}>{type.type.name}</li>
                )}
            </ul>
        </article>
    )
}

export default PokemonPreview