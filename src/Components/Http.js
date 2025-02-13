import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Http = () => {
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState(null)
    
    useEffect(() => {

        const fetchData = async () => {
            try {
            setloading(true)
             const response =  await axios.get('https://jsonplaceholder.typicode.com/todos')
             setdata(response.data)
             setloading(false)
            } catch (error) {
                seterror(error)
               console.log(error);
             setloading(false)
                 
            }
        }
      fetchData()
    //   axios.get("https://jsonplaceholder.typicode.com/todos")
    //   .then((res)=>{
    //     console.log(res.data);
    //     setdata(res.data)
    //   }).catch((err)=>{
    //     console.log(err);
        
    //   })
      
    }, [])
    
  return (
    <div>
      <h1>API</h1>
      <div>
        {loading ? <p>Loading...</p> :
          data && data.map((item, index)=>(
                <>
                <div className='d-flex justify-content-between items-center' key={index}>
                    <h1>{item.userId}</h1>
                    <h1>{item.title}</h1>
                    <input type="checkbox" value={item.completed} name="" />
                    <Link>See more</Link>
                </div> 
                </>
            ))
        }
      </div>

    </div>
  )
}

export default Http