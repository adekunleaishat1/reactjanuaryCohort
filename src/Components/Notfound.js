import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
    const navigate = useNavigate()
    const goback = () =>{
       navigate('/')
    }
  return (
    <div>
        <p>404</p>
        <h1>This is not the page you are looking for</h1>
        <button onClick={goback}>Go back</button>
    </div>
  )
}

export default Notfound 