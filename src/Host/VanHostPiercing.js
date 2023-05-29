import React from 'react'
import data from '../server'
import { useParams } from 'react-router-dom'

export default function VanHostPiercing(){
    const params = useParams()
    const pricing = data.filter(x => { return x.id === params.id})
    return(
        <>
        {pricing.map(x=> (
            <h1 key={x.id} className='margin'>${x.price}/day</h1>
        ))}
        </>
    )
}