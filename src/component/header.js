import React , { useState , useContext } from 'react'
import { NavLink , useNavigate } from 'react-router-dom'
import { Context } from '../context'

export default function Header(){

    const {userActive , setUserActive} = useContext(Context)
    const navigate = useNavigate()
    const [ profileHover , setProfileHover] = useState(false)
    let logout = localStorage.getItem('logout' , false)
    function logOut(){
        setUserActive('')
        localStorage.removeItem('logout')
        localStorage.removeItem('json')
        navigate('/')
    }
    function handlelogOut(){
        if(!logout){
            return <NavLink onMouseEnter={()=>setProfileHover(true)} onMouseLeave={()=>setProfileHover(false)} 
                    className='log-in-link' to={'/login'} state={{return:'/'}} >Log in</NavLink>
        }else {
            return <NavLink onMouseEnter={()=>setProfileHover(true)} onMouseLeave={()=>setProfileHover(false)}
                      onClick={logOut} className='log-out-link'>Log out</NavLink>
        }
    }
    const [hover , setHover] = useState(false)
    return(
        <nav>
            <NavLink className={({isActive}) => isActive ? 'styles' : null} to='/'><img src='./images/logog.png' alt='logo' className='logo' /></NavLink>
            <div className='link-ctn-small' onMouseEnter={()=>setHover(true)} onMouseLeave={()=> setHover(false)}>
             <p className={hover ? 'menu-small-hover menu-small' :'menu-small'}> &#9776;</p>
             {hover && <div className={userActive === '' ?'flex-ctn-small' : 'flex-ctn-small-logout'}>
                        <NavLink  to='/host' state={{return : '/host'}}>Host</NavLink>
                        <NavLink  to='/about'>About</NavLink>
                        <NavLink  to='/vans' >Vans</NavLink>
                        {userActive === '' ? <NavLink  to='/login' state={{return :'/'}}>Log in</NavLink>
                        :<NavLink style={{textDecoration:'none'}} >{userActive}</NavLink> } 
                         {userActive !== '' && <NavLink onClick={logOut} >Log out</NavLink>} 
                       
                     </div>}
            </div>
            <div className='link-ctn'>
               <NavLink className={({isActive}) => isActive ? 'styles' : null} to='/host'>Host</NavLink>
               <NavLink className={({isActive}) => isActive ? 'styles' : null} to='/about'>About</NavLink>
               <NavLink className={({isActive}) => isActive ? 'styles' : null} to='/vans'>Vans</NavLink>               
              
                {userActive === '' ? <NavLink onMouseEnter={()=>setProfileHover(true)} onMouseLeave={()=>setProfileHover(false)}   className={({isActive}) => isActive ? 'styles' : null}>
                                        <img  className='login' src='../images/utente.png' alt='immaggine login'/>
                                        {profileHover && <div className='handle-log'> {handlelogOut()} </div>}
                                     </NavLink>   
                :<div className='logout-section' onMouseEnter={()=>setProfileHover(true)} onMouseLeave={()=>setProfileHover(false)} >
                     <p    onMouseEnter={()=>setProfileHover(true)} onMouseLeave={()=>setProfileHover(false)}
                           className='username' >
                       {userActive}</p>
                           {profileHover && <div onMouseEnter={()=>setProfileHover(true)} onMouseLeave={()=>setProfileHover(false)} className='handle-log-out'> {handlelogOut()} </div>}
                </div>
                    }
                          
            </div>
        </nav>
    )
}