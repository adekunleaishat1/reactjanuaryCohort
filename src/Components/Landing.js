import { useState } from "react"


const Landing = () =>{
    const [isLoading, setIsLoading] = useState(false)
    const [username, setusername] = useState("Tolani")
    const [input, setinput] = useState("")
    const [input2, setinput2] = useState("")
    const [userray, setuserray] = useState([])
    let gender = true

    let userobj = {
        name:"Bola", class:"React"
    }
    let userarray = [
        {name:"Bola", class:"React"},
        {name:"Bolu", class:"Node"},
        {name:"Shayo", class:"Angular"},
        {name:"Titi", class:"Php"},
        {name:"Oyin", class:"Vue"},
    ]
    const click = () =>{
        setusername("Precious")
        // console.log(username);   
    }
    const Savechanges = () =>{
        let userobj = {
            input,
            input2
        }
        console.log(userobj);
        setuserray([...userray ,userobj])
        console.log(userray);
        setinput("")
        setinput2("")
    }
    const handleInputType = () =>{
        setIsLoading(isLoading ? false : true)
    }
    // const getinptchange = (l) =>{
    //     alert(l)
        
    // //   console.log(e.target.value);
    // //   setinput(e.target.value)
      
    // }
    // {conditional epression? truth expression : false expression}
    return(
        <>
        <h1>Landing page</h1>
        <p className={gender ? "text-primary": "text-success"}>{username}</p>
        <button onClick={click}>Click</button>
        <p>Name:{userobj.name } Class: {userobj.class}</p>
        <input value={input} onChange={(e)=>setinput(e.target.value)} type="text" />
        <input value={input2} onChange={(e)=>setinput2(e.target.value)} type="text" />
        <button onClick={Savechanges}>Submit</button>
        <p>{userobj.input}</p>
        
        <table>
          <thead>
            <tr>
                <th>Name</th>
                <th>Class</th>
            </tr>
          </thead>
          {userray.length == 0 ? "user is not available" :
            userray.map((user)=>(
                    <>
                        <tbody>
                            <tr>
                                <td>{user.input}</td>
                                <td>{user.input2}</td>
                            </tr>
                        </tbody>
                    
                   </>
            )   
            )
        }
        </table>
        

        <input type={isLoading? "text" :  "password"} />
        <button onClick={handleInputType}>Change</button>

        </>
    )
}


export default Landing