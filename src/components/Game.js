import {useEffect, useState} from 'react'
import Gallery from './Gallery'
import NewInput from './NewInput'
import Header from './Header'

const Game = () => {
    const [gameInput, setgameInput] = useState('')
    const [subject, setSubjects] = useState('')
    const [coupleFound, setCoupleFound] = useState(0)
    const [attempts, setAttempts] = useState(0)
    const [counter, setCounter] = useState(0)
    const [message, setMessage] = useState('')
    const [isWon, setIsWon] = useState(true)
    const [gridVis, setGridVis] = useState('messageHidden')
    const [historial, setHistorial] = useState([])
    const [isVisible, setIsVisible] = useState({
        divOne:'',
        divTwo:''
      })

    const onChange = (e) => {
    setgameInput(e.target.value) 
    }
     
    const updateCounter = () => {
      setCounter(0)
    }

    const checker = (actual) => {
      if(actual === historial[historial.length -1] && historial.length !== 0){
        window.location.hash = 'reload';
        localStorage.setItem('repeated', actual)
        window.location.reload();
        
      } else if(actual === '' && historial.length !== 0){
        window.location.hash = 'reload';
        localStorage.setItem('repeated', actual)
        window.location.reload();
      }
    }

    
    const passingSub = () => {
      gameInput && setHistorial([...historial, gameInput])
      checker(gameInput)
      setSubjects(gameInput)
      setTimeout(()=> setGridVis('messageVisible'), 700)
      //setGridVis('messageVisible')
      setCoupleFound(0)
      setAttempts(0)
      setMessage(null)
      updateCounter()
      setIsWon(false)
      setIsVisible({
        divOne: '',
        divTwo:''
      })
    }  

    useEffect(() => {
    document.addEventListener("DOMContentLoaded", function(event) { 
      if(window.location.hash === "#reload"){
        let final = localStorage.getItem('repeated')
        setgameInput(final)
        console.log('final', final)
        passingSub()
        window.location.hash = '';
        }})
   }, [subject])



    const minusLetter = (str) => {
        return str[str.length -1] === 'A'? str.slice(0, -1): str 
    }
    const first = isVisible.divOne
    const second = isVisible.divTwo

    const randomClick = (e) => {

        setMessage(null)
        if(counter === 0 || second !== '') {
          if(first.className === 'foundImages' && second.className === 'foundImages'){
            setIsVisible({
              divOne: '',
              divTwo: ''
            })
          } else if(second && first.className !== 'foundImages'){
          first.className = 'hidden'
          second.className = 'hidden'
          setIsVisible({
            divOne: '',
            divTwo: ''
          })
          updateCounter()
        }
          e.target.firstChild.className = 'images'
          setCounter(counter+1)
          setIsVisible(prevState => ({...prevState, divOne: e.target.firstChild
        }))} else if (counter === 1  && e.target.firstChild.id !== isVisible.divOne.id){ 
          e.target.firstChild.className = 'images'
          setIsVisible(prevState => ({...prevState, divTwo: e.target.firstChild  
          }))
          setCounter(0)
          setAttempts(attempts + 1)
      } 
    } 
  

    useEffect(()=> {
            if(first && second){
            if(parseInt(minusLetter(first.id)) === parseInt(minusLetter(second.id))){
            first.className='foundImages'
            second.className='foundImages'
            first.parentNode.className = 'untouchable'
            second.parentNode.className = 'untouchable'
            setCoupleFound(coupleFound + 1)
            setMessage('You found a couple!')
            }}



        
    },[isVisible, subject])

    return (
        <div>
          <Header 
      setIsWon= {setIsWon}
      isWon={isWon}
      isVisible={isVisible}
      setCoupleFound= {setCoupleFound} 
      setAttempts={setAttempts}
      setMessage={setMessage}
      updateCounter={updateCounter}
      setIsVisible={setIsVisible}
      message={message}
      attempts={attempts}
      coupleFound={coupleFound}
      passingSub={passingSub}
      setGameInput={setgameInput}
      setGridVis= {setGridVis}
      gridVis={gridVis}
          />
                    <div className={isWon? 'messageVisible': 'messageHidden'}>
          <NewInput passingSub={passingSub} onChange={onChange} gameInput={gameInput}/>
          </div>
          <div className={gridVis}>
          <Gallery historial={historial} setHistorial={setHistorial} winnerClass={coupleFound} sub={subject} randomClick={randomClick}/> 
          </div> 

        </div>
    )
}

export default Game
