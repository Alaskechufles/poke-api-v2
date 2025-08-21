import React from 'react'
import { useParams } from 'react-router'
import useAxios from '../hooks/useAxios'

export default function Card() {
    const { id } = useParams()
    const { data, loading } = useAxios(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <p>Card {id}</p>
            <p>{console.log(data.data)}</p>
            <p>{data.data.name}</p>
            <p>{data.data.id}</p>
            <img src={data.data.sprites.other.home.front_default} alt={"imagen de " + data.data.name} />
        </div>
    )
}
