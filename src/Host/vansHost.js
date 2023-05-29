import React from 'react'
import { Link  } from 'react-router-dom'
import data from '../server'
export default function VansHost(){
    return(
        <div className='vanshost'>
        <h1>Your Listed vans</h1>
        {data.map(van => (
           <Link key={van.id} to={`/host/vans/${van.id}`}>
            <div className='host-van'>
                <img className='host-van-img' src={`../${van.imageUrl}`} alt='proviamo ancora' />
                <div className='host-van-title'>
                 <h2>{van.name}</h2>
                 <p>${van.price}/day</p>
                </div>
            </div>
           </Link>
        ))}
        </div>
    )
}