import React , { useState} from 'react'

export const Context = React.createContext()

export default function ContextProvider({children}){
    const [userActive , setUserActive] = useState('')
    const [users , setUsers] = useState([{
        username : 'Bob' ,
        email : 'bob@gmail.com',
        password : '1234'
    }])

    return (
        <Context.Provider value={{users , setUsers ,userActive , setUserActive} }>
            {children}
        </Context.Provider>
    )
}
