import { useState } from "react"


const Landing = () =>{
    const [username, setusername] = useState("Tolani")
    // let username = "Tolani"
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
    return(
        <>
        <h1>Landing page</h1>
        <p>{username}</p>
        <button onClick={click}>Click</button>
        <p>Name:{userobj.name } Class: {userobj.class}</p>
        {/* <p>{userarray[0].name} {userarray[0].class}</p> */}
        {/* {
            userarray.map((user)=>{
                return(
                    <>
                    <h1>{user.name}</h1>
                    <h1>{user.class}</h1>
                   </>
                )
               
            })
        } */}
        
        <table>
          <thead>
            <tr>
                <th>Name</th>
                <th>Class</th>
            </tr>
          </thead>
          {
            userarray.map((user)=>(
                    <>
                        <tbody>
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.class}</td>
                            </tr>
                        </tbody>
                    
                   </>
            )   
            )
        }
        </table>
        

        </>
    )
}


export default Landing