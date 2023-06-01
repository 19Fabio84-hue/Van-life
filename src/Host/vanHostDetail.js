import React , {useContext} from 'react'
import { Context } from '../context'
import { useParams } from 'react-router-dom'

export default function VanHostDetail(){
    const { data } = useContext(Context)
   const params = useParams()
   const selectedVan = data.filter(x => {return x.id === params.id})
    return (
        <>
        {selectedVan.map(x =>(
            <div key={x.id}>
            <p className='host-vans-detail-p'><span className='bold'>Name :</span> {x.name}</p>
              <p  className='host-vans-detail-p'><span className='bold'>Price :</span> ${x.price}/day</p>
              <div className='van-rent'>
              <p  className='host-vans-detail-p'><span className='bold'> Description : </span>{x.description}</p>
              <p  className='host-vans-detail-p'><span className='bold'> Visibility : </span>pubblic</p>
              </div>
            </div>
        ))}
        
        </>
    )
}