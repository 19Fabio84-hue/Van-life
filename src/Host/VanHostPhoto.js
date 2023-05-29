import React from 'react'
import data from '../server'
import { useParams } from 'react-router-dom'

export default function VanHostPhoto(){
    const params = useParams()
    const pricing = data.filter(x => { return x.id === params.id})
    return(
        <>
        {pricing.map(x=> (
            <img src={`/${x.imageUrl}`} alt='illustrativa' key={x.id}/>
        ))}
        </>
    )
}