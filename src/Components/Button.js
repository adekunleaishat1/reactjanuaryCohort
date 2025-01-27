import React from 'react'

const Button = ({click,text,styl}) => {
    // console.log(props);
    

  return (
    <div>
        <button  className={styl} onClick={click}>{text}</button>
    </div>
  )
}

export default Button