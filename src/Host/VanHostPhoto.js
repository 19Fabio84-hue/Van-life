import React , {useContext} from 'react'
import { Context } from '../context'
import { useParams } from 'react-router-dom'

export default function VanHostPhoto(){
  const { data } = useContext(Context)
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