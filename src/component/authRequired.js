import React from 'react'
import { Outlet , Navigate } from 'react-router-dom'

export default function AuthRequired(){
  let json = localStorage.getItem("json" , false)
    if(!json){
      return  <Navigate to='/login'  state={{return :'/host',message : 'You must log in first!'}} replace/>
    }
    return <Outlet />
}