import { useState, useEffect } from 'react'
import { UserSidebar } from './components/layouts/UserSidebar'

import { Route, Routes, useLocation } from 'react-router-dom'
import { UserProfile } from './components/user/UserProfile'
import { SignIn } from './components/common/SignIn'
import { SignUp } from './components/common/SignUp'
import { Home } from './components/owner/Home'
import { AddOffer } from './components/owner/AddOffer'
import axios from 'axios'
import { Loader } from './components/common/Loader'

import { OwnerSidebar } from './components/owner/OwnerSidebar'
import PrivateRouting from './hooks/PrivateRouting'

import { ViewOffers } from './components/owner/ViewOffers'
import { OwnerNavbar } from './components/owner/OwnerNavbar'
import { Hero } from './components/common/Hero'
import { OnlySide } from './components/owner/OnlySide'
import { Footer } from './components/common/Footer'
import { OwnerRest } from './components/owner/OwnerRest'
import { ViewRest } from './components/owner/ViewRest'

import { Demo } from './components/admin/Demo'
import { ForgotPass } from './components/common/ForgotPass'
import { ResetPass } from './components/common/ResetPass'



axios.defaults.baseURL = "http://localhost:3000";

function App() {
  
  return (
  <>

      <Routes>

        <Route path='/' element={<Hero/>}/>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/forgotpass' element={<ForgotPass />} />
        <Route path='/resetpass/:token' element={<ResetPass />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/loader' element={<Loader />} />


        <Route path='' element={<PrivateRouting />}>

          <Route path='/user' element={<UserSidebar />} >
          </Route>
          <Route path='/userprofile' element={<UserProfile/>} />
           
            <Route path='/demo' element={<Demo/>}/>

          <Route path='/rest' element={<OwnerSidebar />}/>

            <Route path='/addoffer' element={<AddOffer />} />
          
          <Route path='/viewoffer' element={<ViewOffers />} />
          <Route path='/viewrest' element={<ViewRest />} />
          <Route path='/addrest' element={<OwnerRest/>}/>
          <Route path='/onlyside' element={<OnlySide/>} />
        

        </Route>

      </Routes>
  
    </>

  )
}

export default App
