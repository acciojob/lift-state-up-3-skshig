import React from 'react'

const Child1 = ({selectedOption,setSelectedOption}) => {
  return (
    <div className='child-1'>
        <h1>Child1</h1>
        <button onClick={(e)=>setSelectedOption(e.target.innerHTML)} value={selectedOption}>Option 1</button>
    </div>
  )
}

export default Child1