import React from 'react'

const NewInput = ({gameInput, passingSub, onChange}) => {

    return (
       <div className='newInput'>
          <input placeholder='Choose...cats?' 
          style={{marginLeft: '1rem'}} 
          type="text" 
          value={gameInput} 
          onChange= {onChange}/>
    
          <button className='playBtn' 
          style={{marginLeft: '1rem'}} 
          onClick={passingSub}
          >Play!</button>
          
      </div>
    )
}

export default NewInput
