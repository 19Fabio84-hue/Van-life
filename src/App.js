import React from 'react'
import { Routes , Route  } from 'react-router-dom'
import './server'
import AuthRequired from './component/authRequired'
import Layout from './component/layout'
import Home from './pages/home'
import About from './pages/about'
import Vans from './pages/vans'
import Login from './pages/login'
import VanDetail from './pages/vanDetail'
import Host from './Host/host'
import Dashboard from './Host/dashboard'
import Income from './Host/income'
import VansHost from './Host/vansHost'
import VanHostId from './Host/vanHostId'
import VanHostDetail from './Host/vanHostDetail'
import VanHostPiercing from './Host/VanHostPiercing'
import VanHostPhoto from './Host/VanHostPhoto'
import Review from './Host/review'

export default function App(){
  
    return(
        <div className='root-ctn'>
          <Routes>
            
            <Route element={<Layout />}>
              <Route path='*' element={<h1>Page not found!</h1>} />
              <Route index element={<Home />}/>
              <Route path="about" element={ <About />} />
              <Route path='vans' element={<Vans /> }/>
              <Route path='login' element={<Login /> }/>
              <Route path='vans/:id' element={ <VanDetail />}/>
              <Route element={<AuthRequired />}>
               <Route path='host' element={<Host />}>
                <Route index element={<Dashboard />} />
                <Route path='income' element={<Income />} />                
                <Route path='vans' element={<VansHost />} />
                  <Route path='vans/:id' element={<VanHostId/>}>
                   <Route index element={<VanHostDetail />} />                
                   <Route path='pricing' element={<VanHostPiercing />} />
                   <Route path='photo' element={<VanHostPhoto />} />
                  </Route>
                <Route path='review' element={<Review />} />
               </Route>              

              </Route>
            </Route>

           </Routes>
        </div>
    )
}
