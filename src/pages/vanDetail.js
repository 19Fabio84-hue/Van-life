import React from 'react'
import { useParams , Link , useLocation } from 'react-router-dom'
import data from '../server'

export default function VanDetail(){
    const params = useParams()
    const selectedVan = data.filter(x => {return x.id === params.id })
    const location = useLocation()
    const typeButton = location.state.name || 'all'
    return (
        <>
        <Link to={`/vans${location.state.search}`} className='linkToVan' ><span className='arrow' >←</span><span className='span-detail'>Back to {typeButton} Vans</span></Link>
          {selectedVan.map(x => (
          <div className='params' key={params.id}>
              <img className='img-detail' src={`../${x.imageUrl}`} alt='Polizia' />
              <i className={x.type} id='type-detail'>{x.type}</i>
              <h1>{x.name}</h1>
              <p className='price detail'>${x.price}/day</p>
              <div className='van-rent'>
              <p className='detail-description'>{x.description}</p>
              </div>
              <div className='van-rent2'>

               <Link className='button' to='/vans'>Rent this Van</Link>
              </div>
               
          </div>

          )
          )}
        </>
    )
}