import { useState } from 'react'
import './App.css'
import Button from './Components/Button'
import mystyl from './Style'
import DisplayCounter from './Components/DisplayCounter'
import IncreaseCounter from './Components/IncreaseCounter'

const App = (props) => {
  const [count, setcount] = useState(0)

  const clickme = () =>{
    console.log('Button clicked')
  }
 
  const clickyou = () =>{
    console.log("Button props");
    
  }
  return (
    <div >
      <DisplayCounter counter={count} />
      <IncreaseCounter update={setcount}/>
       <h1 className='App'> welcome to react class</h1>
       <Button click={clickme} text="Signup" styl={"btn btn-dark"}/>

       <p style={mystyl}>Internal styling</p>
       <p style={mystyl.header}>Internal sub styling</p>
       <p style={{color:"green", fontFamily:"revert", fontSize:"50px"}}>Inline styling</p>
       <Button click={clickyou} text="Login" styl={"btn btn-success"}/>
    </div>
  )

}


export default App