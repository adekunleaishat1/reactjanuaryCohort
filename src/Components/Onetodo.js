import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Onetodo = () => {
    const {id} = useParams()
    // const [onetodo, setonetodo] = useState(null)
  const users =  JSON.parse(localStorage.getItem("userdetail"))
  let one = users.find((user)=> user.id == id)
 
  return (
    <div>
        <h1>{one.title}</h1>
        <h1>{one.content}</h1>
    </div>
  )
}

export default Onetodo