import React from 'react'

const Card = ({temp, isClicked, onClick, id}) => {

    return (
        <div className={isClicked? null:'hidden'} onClick={onClick}>
            <img id={id} className='images' alt='Game Card'src={temp}/>
        </div>
    )
}

export default Card