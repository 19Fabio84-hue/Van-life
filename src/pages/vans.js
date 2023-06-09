import React , {useContext} from 'react'
import { Context } from '../context'
import { Link , useSearchParams } from 'react-router-dom'
export default function Vans(){
   const { data } = useContext(Context)
  let [searchParams , SetSearchParams] = useSearchParams()
     const typeFilter = searchParams.get('type')
     const displayedVans = typeFilter ? data.filter(van => van.type === typeFilter) : data
     const vanElements = displayedVans.map((prev,index) =>(
      <Link to={`/vans/${prev.id}`} state={{search : `?${searchParams}` , name : typeFilter}} style={{textDecoration:'none'}} key={index}>
         <img className='img-vans' src={prev.imageUrl} alt='img-Vans'/>
         <div className='price-ctn'>
             <Link to={`/vans/${prev.id}`} state={{search : `?${searchParams}` , name : typeFilter}} className='vans-name'>{prev.name}</Link>
             <p className='price'>${prev.price}<span className='day'>/day</span></p>
         </div>
         <i className={prev.type}>{prev.type}</i>
      </Link>
     ) 

      )
    return (
    <>
     <div className='vans-flex'>
         <h1 className='explre-vans'>Explore our van option</h1>
        <div className='option-van'>
         <button onClick={()=> SetSearchParams('type=simple')} className={`option-p link-simple ${typeFilter === 'simple' ? 'selected' : ''}`}>Simple</button>
         <button onClick={()=> SetSearchParams('type=luxury')} className={`option-p link-luxury ${typeFilter === 'luxury' ? 'selected' : ''}`}>Luxury</button>
         <button onClick={()=> SetSearchParams('type=rugged')} className={`option-p link-rugged ${typeFilter === 'rugged' ? 'selected' : ''}`}>Rugged</button>
         {typeFilter ?( <button onClick={()=> SetSearchParams('.')} className='option-clear'>Clear filter </button>) : null}
        </div>
     </div>   
      <div className='vans-ctn'>
         {vanElements}
      </div>
      </>
    )
}