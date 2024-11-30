import Header from '@/components/Header'
import Register from '@/components/Register'
import SidebarAdmin from '@/components/SidebarAdmin'
import React from 'react'

const page = () => {
  return (
    <>
        <Header/>
        <div className="flex">
            <SidebarAdmin/>
            <div className="mx-auto">
                <Register/>

            </div>
           

        </div>
        
    </>
  )
}

export default page