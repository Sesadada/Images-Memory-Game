import React from 'react'

const Card = ({temp, onClick, id}) => {
    
    return (
        <div className='hiddenImages' onClick={onClick}>
            <img id={id} className='hidden' alt='Game Card'src={temp}/>
        </div>
    )
}

export default Card


