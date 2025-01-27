import React from 'react'

const DisplayCounter = (props) => {
    console.log(props);
    
  return (
    <>
    <h1>{props.counter}</h1>
    {/* <div>DisplayCounter</div> */}
    </>
  )
}

export default DisplayCounter