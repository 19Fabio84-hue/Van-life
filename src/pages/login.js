import React from 'react'
import { Link , useLocation , useNavigate } from 'react-router-dom'

export  function action(){
    console.log('action function pass test!')
}


export default function Login(){

    const [loginData , setLoginData] = React.useState({email:'' , password:''})
    const location = useLocation()
    const [error , setError] = React.useState('Utent not find!')
    const [message ,setMessage] = React.useState('')
    const navigate = useNavigate()

    function handleChange(event){
        const {name , value} = event.target
        setLoginData(prev => {
            return {...prev , [name ] : value}
        })
    }

    function submitData(){
        if(loginData.email === 'piancatellif@gmail.com' && loginData.password === '1234' ){
            setError('')
            navigate('/host/vans' , {replace : true})
            localStorage.setItem("myEmojis" , true)
        }else {
            setMessage('Utent not find!')
            return setError('Utent not find!')
        }
    }
    return(
        <div className='login-ctn'>
            { location.state ? (<h3>{location.state.message}</h3>) : (<p></p>) }
            { error ? (<h3>{message}</h3>) : (<p></p>) }
           <h1 className='login-title'>Sign in to your Account</h1>
           <form action='login' method='post'  className='email-ctn'>
            <input onChange={handleChange} className='input-email' type='email' name='email' placeholder='Enter your email' />
           <div className='password-ctn'>
            <input onChange={handleChange} className='input-password' type='password' name='password' placeholder='Enter your password' />
           </div>
           </form>
            <button onClick={submitData}  className='login-btn'>Log in</button>
          
           <div>
              <h2>Don't have a account ?  <Link>Create one</Link></h2>
           </div>
        </div>
    )
}