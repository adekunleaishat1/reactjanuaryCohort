import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { IsFailed,IsFetching,IsSuccessful } from './Redux/Userslice'
import { useDispatch,useSelector } from 'react-redux'
const Http = () => {
    const dispatch = useDispatch()
    const {isloading , user, error} = useSelector((state)=> state.userslice)

    
    
    useEffect(() => {
        const fetchData = async () => {
            try {
            dispatch(IsFetching())
             const response =  await axios.get('https://jsonplaceholder.typicode.com/todos')
            //  setdata(response.data)
            dispatch(IsSuccessful(response.data))
            } catch (error) {
              dispatch(IsFailed(error.message))
               console.log(error);
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
        {isloading ? <p>Loading...</p> :
          user && user.map((item, index)=>(
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