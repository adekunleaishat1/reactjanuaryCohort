import React,{useEffect, useState, useRef} from 'react'
import axios from 'axios'
import { FaCirclePlay } from "react-icons/fa6";

const Music = () => {
    const audioref = useRef([])
    
    
    const [allmusic, setAllmusic] = useState([])
    const [auudio, setauudio] = useState(null)
    const [isplaying , setisplaying] = useState(false)
    useEffect(() => {
      axios.get("https://robo-music-api.onrender.com/music/my-api")
      .then((res)=>{
        console.log(res);
        setAllmusic(res.data)
      }).catch((err)=>{
        console.log(err);
        
      })
    }, [])

    const playAudio = (i) =>{
        console.log(audioref.current[i]);
        if (isplaying) {
            audioref.current[i].pause()
            setisplaying(false)
        }else{
            audioref.current[i].play()
            setisplaying(true)
        }
        
    //   console.log(id);
    //   let oneaudio = allmusic.find((e)=> e.id == id)
    //   console.log(oneaudio);
    //   let audio = new Audio(oneaudio.songUrl)
    //   console.log(audio);
     
    //   if (auudio == id) {
    //     setauudio(null)
    //     audio.pause()
    //   }else{
    //     setauudio(id)
    //     audio.play()
    //   }
    //   setauudio(oneaudio == null ? id : null)
    //   setisplaying(!isplaying)
     
    }

    const Nextmusic = () =>{
      
    }
    
  return (
    <div>

        {/* <audio ref={audioref} src="https://res.cloudinary.com/dakiyibak/video/upload/v1693489807/05-NF-HAPPY-_HiphopKit.com_yx438c.mp3"></audio> */}
        {/* <h1 ref={audioref}>My Music</h1> */}
        <div className='d-flex justify-content-between align-items-center w-100 flex-wrap'>
        {allmusic.map((music, index)=>(
            <>
            <div className='w-25 shadow rounded-md px-2 py-3 mt-3' key={index}>
                <audio ref={el=> audioref.current[index] = el} src={music.songUrl}></audio>
               <img className='img-fluid' src={music.songImage} alt="" />
               <h1>{music.songTitle}</h1>
               <button onClick={()=>playAudio(index)}><FaCirclePlay /></button>
            </div>
            </>
          ))}
          <div>
            <button >Prev</button>
            <button onClick={Nextmusic}>Next</button>
          </div>
        </div>
        
    </div>
  )
}

export default Music