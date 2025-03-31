import React from 'react'
import { UserSidebar } from '../layouts/UserSidebar'
import { Outlet } from 'react-router-dom'

export const Home = () => {
  return (
    <>
        <UserSidebar/>
       

      
                <div className="app-main">
                    <Outlet/>
                </div> 
    </>
  )
}
