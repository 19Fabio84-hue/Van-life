import React from 'react'
import { Outlet , Navigate } from 'react-router-dom'

export default function AuthRequired(){
  let json = localStorage.getItem("myEmojis")
    if(!json){
      return  <Navigate to='/login'  state={{message : 'You must log in first!'}} replace/>
    }
    return <Outlet />
}