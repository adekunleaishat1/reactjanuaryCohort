import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
  return (
    <div>
    <div style={{height:"100vh"}} className='bg-primary   p-4'>
       <Link to={"/home/landing"} className='p-2 text-white d-block'>Dashboard</Link>
       <Link to={"/home/count"} className='p-2 text-white d-block'>Profile</Link>
       <Link className='p-2 text-white d-block'>Document</Link>
       <Link className='p-2 text-white d-block'>Courses</Link>
    </div>


    </div>
  )
}

export default Sidenav