import React , {useContext} from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context'

export default function Dashboard(){

    const { data } = useContext(Context)
    return(
        <section className='section-dash'>
        <div className='dash-income'>
            <h1 className='dash-title'>Welcome!</h1>
            <div className='dash-income-flex'>
            <p className='dash-p'>Income last <span className='dash-span'>30 days</span></p>
             <Link to='/host/income'>details</Link>
            </div>
            <h1 className='dash-price'>$2,260</h1>
        </div>

        <section className='section-review'>
         <div className='dash-review'>
           <div className='dash-review-flex'>
            <h1 style={{marginRight:'.5em'}}>Review score</h1>
            <img className='star' src='../images/star.svg'  alt='stella review'/>
            <h1 className='five'>5.0</h1>
            <h1 className='five' style={{color:'rgb(22, 22, 22,.6)'}}>/5</h1>
           </div>
           <Link to='/host/review'>details</Link>
         </div>
        </section>
            
        <section className='section-vans'>
            <div className='section-title-vans'>
             <h1>Your Listed</h1>
             <Link to='/host/vans'>View all</Link>
            </div>
            <div className='section-vans-ctn'>
               {data.map(van =>{
                return (
              <div>
               <div className='host-van'>
                  <img className='host-van-img' src={`../${van.imageUrl}`} alt='proviamo ancora' />
                  <div className='host-van-title'>
                   <h2>{van.name}</h2>
                  <p>${van.price}/day</p>
                 </div>
               </div>
              </div>
                )
               }).slice(0,3)}
            </div>
        </section>  

        </section>
    )
}