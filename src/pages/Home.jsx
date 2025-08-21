import React from 'react'
import useAxios from '../hooks/useAxios'
import { Link } from 'react-router'

export default function Home() {
    const { data, loading } = useAxios("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10")
    if (loading) {
        return <p>Loading...</p>
    }
    const pokemons = data.data.results

    return (
        <div className=' flex flex-col'>{console.log(data)}
            {
                pokemons.map((pokemon, index) => (
                    <div key={index}>
                        <Link to={"/" + (index + 1)}>{pokemon.name}</Link>
                    </div>
                ))
            }
        </div>
    )
}
