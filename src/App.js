import './App.css'
import mystyl from './Style'

const App = () => {
 
  return (
    <div >
       <h1 className='App'> welcome to react class</h1>
       <p style={mystyl}>Internal styling</p>
       <p style={mystyl.header}>Internal sub styling</p>
       <p style={{color:"green", fontFamily:"revert", fontSize:"50px"}}>Inline styling</p>
    </div>
  )

}


export default App