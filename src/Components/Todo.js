import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
const Todo = () => {
    const [title, settitle] = useState("")
    const [content, setcontent] = useState("")
    const [todoarray, settodoarray] = useState(JSON.parse(localStorage.getItem("userdetail")) || [] )
    const [isEditing, setisEditing] = useState(false)
    const [editingTodoId, setEditingTodoId] = useState(null)
    const [completed, setcompleted] = useState(false)
 
    useEffect(() => {
      
      localStorage.setItem("userdetail", JSON.stringify(todoarray))
      
    }, [todoarray])
    

    const Addtodo = () => {

        if (!title || !content) {
            alert("Input fields are mandatory")
            return
        }

        // if (!isEditing) {
            let arrobj = {
                id: Date.now(),
                title,
                content,
                completed: false
            }

            settodoarray([...todoarray, arrobj])
            console.log(todoarray);
            
           
            settitle("")
            setcontent("")
        // } else {
        //     settodoarray((currenttodo) => currenttodo.map((item) => item.id === editingTodoId ? {...item, title, content} : item))
        //     setisEditing(false)
        //     settitle("")
        //     setcontent("")
        // }
    }

    const handleDelete = (id) => {
        // console.log(todoarray.filter((todo)=> todo.id !== id));
        // let newarray = todoarray.filter((todo)=> todo.id !== id)
        // settodoarray(newarray) 
        
        settodoarray((currenttodo) => currenttodo.filter((item) => item.id !== id ))
        

    }

    const handleEdit= (id) => {
       const editingTodo = todoarray.find((item) => item.id === id)
     console.log(editingTodo);
  
       settitle(editingTodo.title)
       setcontent(editingTodo.content)
       setisEditing(true)
       setEditingTodoId(editingTodo.id)
       
     }




     const savechange = () =>{
      let newtodo =  todoarray.find((todo)=>todo.id == editingTodoId)
      console.log(newtodo);
      
     newtodo.title = title
     newtodo.content = content
     settodoarray([...todoarray])

      
       
     }

  return (
    <div>
        <input value={title} onChange={(e)=>settitle(e.target.value)} type="text" />
        <input value={content} onChange={(e)=>setcontent(e.target.value)} type="text" />
        <button onClick={Addtodo}>{isEditing ? "Update todo" : "Add todo"}</button>
      

        {todoarray.map((user)=>(
            <div key={user.id}>
            <h1>Title: {user.title}</h1>
           <h1>Content: {user.content}</h1>
           <button onClick={() => handleDelete(user.id)}> Delete </button>
            <button  data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleEdit(user.id)}>Edit</button>
            <input value={completed} onChange={(e)=> setcompleted(!completed)} type="checkbox" name="" id="" />
            <Link to={`/one/${user.id}`} >See more</Link>

         </div>
        ))

    }






<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input onChange={(e)=>settitle(e.target.value)} value={title} type="text" />
        <input onChange={(e)=>setcontent(e.target.value)} value={content} type='text' />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" >Close</button>
        <button data-bs-dismiss="modal" onClick={savechange} type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>

    
  )
}

export default Todo