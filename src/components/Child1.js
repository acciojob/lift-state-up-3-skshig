import React from 'react'

const Child1 = ({selectedOption,setSelectedOption}) => {
  return (
    <div className='child-1'>
        <div>Child1</div>
        <button onClick={(e)=>setSelectedOption(e.target.innerHTML)} value={selectedOption}>Option 1</button>
    </div>
  )
}

export default Child1