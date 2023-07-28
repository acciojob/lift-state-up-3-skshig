import React, { useState } from 'react'
import Child1 from './Child1';
import Child2 from './Child2';

const Parent = () => {
    let [selectedOption, setSelectedOption] = useState("")
    return (
        <div className='parent'>
            <h1>Parent</h1>
            <Child1 setSelectedOption = {setSelectedOption}
                    selectedOption = {selectedOption}/>

            <Child2 setSelectedOption = {setSelectedOption}
                    selectedOption = {selectedOption}/>
            <p>Selected Option: {selectedOption}</p>
        </div>
    )
}

export default Parent