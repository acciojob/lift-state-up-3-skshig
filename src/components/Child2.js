import React from 'react'

const Child2 = ({selectedOption,setSelectedOption}) => {
  return (
    <div className='child-2'>
        <h1>Child2</h1>
        <button onClick={(e)=>setSelectedOption(e.target.innerHTML)} value={selectedOption}>Option 2</button>
    </div>
  )
}

export default Child2