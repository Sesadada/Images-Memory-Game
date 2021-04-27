import React from 'react'

const NewInput = ({gameInput, passingSub, onChange}) => {
    return (
       <div className='newInput'>
          <label>Change photos!</label>
          <input placeholder='rabbits' style={{marginLeft: '1rem'}} type="text" value={gameInput} onChange= {onChange}/>
          <button style={{marginLeft: '1rem'}}onClick={passingSub}>Submit</button>
      </div>
    )
}

export default NewInput
