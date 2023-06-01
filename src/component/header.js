import React , { useState } from 'react'
import { NavLink , useNavigate } from 'react-router-dom'


export default function Header(){
    const returnLogin = useNavigate()
    function logOut(){
        localStorage.removeItem("myEmojis")
        returnLogin('/login')
    }
    const [hover , setHover] = useState(false)
    return(
        <nav>
            <NavLink className={({isActive}) => isActive ? 'styles' : null} to='/'><img src='./images/logog.png' alt='logo' className='logo' /></NavLink>
            <div className='link-ctn-small' onMouseEnter={()=>setHover(true)} onMouseLeave={()=> setHover(false)}>
             <p className={hover ? 'menu-small-hover menu-small' :'menu-small'}> &#9776;</p>
             {hover && <div className='flex-ctn-small'>
                        <NavLink  to='/host'>Host</NavLink>
                        <NavLink  to='/about'>About</NavLink>
                        <NavLink  to='/vans'>Vans</NavLink>
                        <NavLink  to='/login'><img className='login' style={{backgroundColor:'#FFF'}} src='../images/utente.png' alt='immaggine login'/></NavLink>
                     </div>}
            </div>
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