import React , { useState , useContext , useEffect } from 'react'
import { Link , useLocation , useNavigate } from 'react-router-dom'
import { Context } from '../context'

export default function Login(){

    const {users , setUsers , setUserActive } = useContext(Context)
  
    const location = useLocation()
    const navigate = useNavigate()
    const [ email , setEmail] = useState('')
    const [ password , setPassword] = useState('')
    const [name , setName] = useState('')
    const [ createOne , setCreateOne] = useState(false)
    const [error , setError] = useState('Utent not find!')
    const [message ,setMessage] = useState('')
    
    useEffect(()=>{
        localStorage.setItem('users', JSON.stringify(users))
    },[users])

    function submitData(){
        const findUtent = users.find(user=> user.email === email && user.password === password)
        if(findUtent){
            setUserActive(findUtent.username)
            localStorage.setItem("json" , true)
            localStorage.setItem('logout' , true)
            localStorage.setItem('username' , findUtent.username)
            setError('')
            navigate(`${location.state.return}`)
        }else {
            setMessage('Utent not find!')
        }
    }
    function createNewAccount(){
        const newUsers = {
            username : name ,
            email : email ,
            password : password
        }
        setUsers([...users , newUsers])
        setUserActive(newUsers.username)
        localStorage.setItem('json' , true)
        localStorage.removeItem('logout')
        localStorage.setItem('username' , newUsers.username)
        navigate(`${location.state.return}`)
    }
    window.addEventListener('beforeunload', function() {
        setUserActive('')
        localStorage.removeItem('logout')
        localStorage.removeItem('json')
        localStorage.removeItem('username')
      });
    return(
        <div className='login-ctn'>
            { location.state ? <h3>{location.state.message}</h3> : <p></p> }
            {!createOne && <h3>email : bob@gmail.com  <br></br> password : a234 <br></br>   is active</h3>}
            { error ? <h3>{message}</h3> : <p></p> }
           <h1 className='login-title'>{createOne ? 'Create your account' : 'Sign in to your Account'}</h1>
           <form action='login' method='post'  className='email-ctn'>
            <input onChange={(e)=> setEmail(e.target.value)} className='input-email' type='email' name='email' placeholder='Enter your email' />
           <div className='password-ctn'>
            <input onChange={(e)=>setPassword(e.target.value)} className='input-password' type='password' name='password' placeholder='Enter your password' />
            {createOne && <input onChange={(e)=>setName(e.target.value)} type='text' name='name' placeholder='Enter Your Name' className='input-password' />}
           </div>
           </form>
            {createOne ?<button onClick={createNewAccount}  className='login-btn'>Create Account</button>
             : <button onClick={submitData}  className='login-btn'>Log in</button>}
          
           <div>
              {createOne ? <h2>Do you have a account ?  <Link state={{return:'/'}} onClick={()=>setCreateOne(false)}>Log in</Link></h2>
              : <h2>Don't have a account ?  <Link state={{return:'/'}} onClick={()=>setCreateOne(true)}>Create one</Link></h2>}
           </div>
        </div>
    )
}