import {useState, useEffect} from 'react'
const Header = (props) => {
    
    const {setCoupleFound, message, setMessage, 
        setGameInput, attempts, coupleFound, isVisible, 
        isWon, setIsWon, isPlaying, setIsPlaying} = props
    
    const [isWinning, setIsWinning] = useState(false)

    useEffect(()=> {
        if(coupleFound === 8){
            setIsWon(true)
            setIsPlaying(false)
            setIsWinning(true)
            setGameInput('')
            setMessage(`You found 8 pairs of cards in ${attempts} attempts!`)
            setCoupleFound(0)
            isVisible.divOne.className = 'foundImages'
            isVisible.divTwo.className = 'foundImages'
            isVisible.divOne.parentNode.className = 'untouchable'
            isVisible.divTwo.parentNode.className = 'untouchable'
          } else if(isWon === false){
              setIsWinning(false)
          }
    },[setIsWon, attempts,setIsPlaying, setIsWinning, setGameInput, setMessage, setCoupleFound, isVisible.divOne, isVisible.divTwo, isWon, coupleFound])
    console.log('isplaying from header',isPlaying)

    return (
        <div>
          <h1>Sirio  Memory Game</h1>
          <h4 className={isWinning? 'messageVisible':'messageHidden'}>{message}</h4>
          <div className={isPlaying? 'points':'hidden'}>
          <p className={isWinning? 'messageHidden':'attempts'}> Attempts: {attempts} </p>     
          <p className={isWinning? 'messageHidden':'couples'}><b style={{color:'#062af8'}}>{message}</b> Couples found: {coupleFound}</p>
        </div>
            
        </div>
    )
}

export default Header
