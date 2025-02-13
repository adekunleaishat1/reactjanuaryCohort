import React, {useState,useEffect} from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { increament } from './Redux/Countslice'

const Form = () => {
    const {count} = useSelector((state)=> state.countslice)
    console.log(count);
      const dispatch = useDispatch()
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(false)
     useEffect(() => {
      axios.get("http://localhost:2345/users")
      .then((res)=>{
        console.log(res);
        setdata(res.data)
      }).catch((err)=>{
        console.log(err);
        
      })
     }, [loading])
     

    const formik = useFormik({
        initialValues:{
            username:"",
            email:"",
            password:""
        },
        validationSchema:yup.object({
           username:yup.string().min(3,"username should not be less than 3").required("username is required"),
            email:yup.string().email("must be a valid email").required("email is required"),
            password:yup.string().min(8,"password must have minimum of 8 characters").required("password is required")
        }),
        onSubmit:(value)=>{
        const existuser =  data.find((e)=> e.email === value.email )
        if (existuser) {
           toast.error("User Already exist") 
        }else{
            setloading(true)
            console.log(value);
            axios.post("http://localhost:2345/users",value)
            .then((res)=>{
              console.log(res);
              toast.success("User register successfully")
              formik.setValues({
                username:"",
                email:"",
                password:""
              })
              
            }).catch((err)=>{
              console.log(err);
              toast.error(err.message)
            }).finally(()=>{
                setloading(false)
            })
        }
          
        }
    })

    console.log(formik.errors);

   console.log(formik.values);
   
   console.log(formik.touched);
   
    
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(increament())}>Increament</button>
         <form className='w-50 mx-auto px-3 py-3' onSubmit={formik.handleSubmit} action="">
            <div className='form-group '>
                <label>Username:</label>
                <input onBlur={formik.handleBlur} value={formik.values.username} className='form-control' onChange={formik.handleChange} name='username' type="text" />
                <p className='text-danger fs-6'>{formik.touched.username && formik.errors.username}</p>
            </div>
            <div className='form-group '>
                <label>Email:</label>
                <input onBlur={formik.handleBlur} value={formik.values.email} className='form-control' onChange={formik.handleChange} name='email' type="text" />
                <p className='text-danger fs-6'>{formik.touched.email && formik.errors.email}</p>
            </div>
            <div className='form-group '>
                <label>Password:</label>
                <input onBlur={formik.handleBlur} value={formik.values.password} className='form-control' onChange={formik.handleChange} name='password' type="text" />
                <p className='text-danger fs-6'>{formik.touched.password && formik.errors.password}</p>
            </div>
            <div>
                <button disabled={loading} type='submit' className='btn btn-primary'>Submit</button>
            </div>
            <ToastContainer/>
         </form>
    </div>
  )
}

export default Form