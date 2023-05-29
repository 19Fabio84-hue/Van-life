import React from 'react'
import {Link , NavLink , useParams , Outlet } from 'react-router-dom'
import data from '../server'

export default function VanHostId(){
    const styles = {color : 'red'}
    const params = useParams()
    const selectedVan = data.filter(x => {return x.id === params.id })
    return(
        <div className='host-vans-detail'>
          <Link to='..' relative='path' className='linkToVan' ><span className='arrow' >←</span><span className='span-detail'>Back to the Vans</span></Link>
          {selectedVan.map(x => (
          <div className='params' key={params.id}>             
              <div className='host-van'>
                <img className='host-van-img2' src={`/${x.imageUrl}`} alt='proviamo ancora' />
                <div className='host-van-title2'>
                <i className={x.type} id='type-detail'>{x.type}</i>   
                 <h2>{x.name}</h2>
                 <p>${x.price}/day</p>
                </div>
            </div>
            <div className='link-ctn'>
             <NavLink style={({isActive})=> isActive ? styles : null} to={`/host/vans/${x.id}`} end={true} className='link-host-vans-detail'>Detail</NavLink>
             <NavLink style={({isActive})=> isActive ? styles : null} to={`/host/vans/${x.id}/pricing`} className='link-host-vans-detail'>Pricing</NavLink>
             <NavLink style={({isActive})=> isActive ? styles : null} to={`/host/vans/${x.id}/photo`} className='link-host-vans-detail'>Foto</NavLink>
            </div>
            <Outlet/>              
          </div>

          )
          )}
        </div>
    )
}