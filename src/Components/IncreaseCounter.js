import React from 'react'

const IncreaseCounter = (props) => {
  return (
    <>
    {/* <div>IncreaseCounter</div> */}
    <button onClick={()=>props.update(count=> count + 1)}>Increase</button>
    </>
  )
}

export default IncreaseCounter