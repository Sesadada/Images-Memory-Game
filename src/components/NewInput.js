import {useState} from 'react'

const NewInput = ({gameInput, passingSub, onChange}) => {
    const [placeH, setPlaceH] = useState('Choose...cats?')
const styles = {
    color: 'purple',
    fontSize: '13px',
}

    return (
       <div className='newInput'> 
        <label style={styles}> <b>Choose the images for the cards and play!</b></label> <br/>

       <label style={styles}>Try to find the 8 matching couples in less attempts possibles :)</label> <br/>
      
   
          <input placeholder={placeH} 
          style={{marginLeft: '1rem'}} 
          type="text" 
          value={gameInput} 
          onClick={()=>setPlaceH('')}
          onChange= {onChange}/>
    
          <button className='playBtn' 
          style={{marginLeft: '1rem'}} 
          onClick={passingSub}
          >Play!</button>
          
      </div>
    )
}

export default NewInput
