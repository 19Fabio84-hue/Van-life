import React from 'react'
import { NavLink , useNavigate } from 'react-router-dom'


export default function Header(){
    const returnLogin = useNavigate()
    function logOut(){
        localStorage.removeItem("myEmojis")
        returnLogin('/login')
    }
    return(
        <nav>
            <NavLink className={({isActive}) => isActive ? 'styles' : null} to='/'><img src='./images/logog.png' alt='logo' className='logo' /></NavLink>
            <div className='link-ctn'>
               <NavLink className={({isActive}) => isActive ? 'styles' : null} to='/host'>Host</NavLink>
               <NavLink className={({isActive}) => isActive ? 'styles' : null} to='/about'>About</NavLink>
               <NavLink className={({isActive}) => isActive ? 'styles' : null} to='/vans'>Vans</NavLink>               
               <NavLink className={({isActive}) => isActive ? 'styles' : null} to='/login'><img className='login' src='../images/utente.png' alt='immaggine login'/></NavLink>
               <button onClick={logOut}>x</button>               
            </div>
        </nav>
    )
}