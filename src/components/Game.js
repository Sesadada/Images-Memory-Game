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
    const [isVisible, setIsVisible] = useState({
        divOne:'',
        divTwo:''
      })
    const onChange = (e) => {
    setgameInput(e.target.value) 
    }
    const passingSub = () => {
      setSubjects(gameInput)
    }  
    const updateCounter = () => {
        setCounter(0)
      }
    const minusLetter = (str) => {
        return str[str.length -1] === 'A'? str.slice(0, -1): str 
    }
    const first = isVisible.divOne
    const second = isVisible.divTwo

    const randomClick = (e) => {
      console.log(e.target)
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
        }))} else if (counter === 1  && e.target.id !== isVisible.divOne.id){ 
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
            console.log("found!")
            }}

        
    },[isVisible])
 


    

  
    return (
        <div>
          <Header />
          <Gallery sub={subject} randomClick={randomClick}/>  
          <NewInput passingSub={passingSub} onChange={onChange} gameInput={gameInput}/>
        </div>
    )
}

export default Game
