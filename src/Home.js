import React from 'react'
import { BsArrowDownRightSquare,BsArrowBarUp } from "react-icons/bs";
import Sidenav from './Components/Sidenav';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className='d-flex justify-between align-items-center w-100'>
        <Sidenav/>
        <div>
          <Outlet/>
        </div>
      </div>
      {/* <button className='btn btn-dark'>Click</button>
      <BsArrowDownRightSquare />
      <BsArrowBarUp size={30} />
      <footer></footer> */}
    </>
   
  )
}

export default Home