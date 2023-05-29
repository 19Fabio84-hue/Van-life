import React from 'react'
import { NavLink , Outlet } from 'react-router-dom'

export default function Host(){
    const styles = {color:'red'}
    return(
        <>
        <div className='host'>
         <NavLink style={({isActive})=> isActive ? styles : null} to='/host' end={true}>Dashboard</NavLink>
         <NavLink style={({isActive})=> isActive ? styles : null} to='/host/income'>Income</NavLink>
         <NavLink style={({isActive})=> isActive ? styles : null} to='/host/vans'>Vans</NavLink>
         <NavLink style={({isActive})=> isActive ? styles : null} to='/host/review'>Review</NavLink>
        </div>
        <Outlet/>
        </>
    )
}