import {useState} from 'react'
import Gallery from './Gallery'
import NewInput from './NewInput'
import Header from './Header'
const Game = () => {
    const [gameInput, setgameInput] = useState('')
    const [subject, setSubjects] = useState('')
    const onChange = (e) => {
    setgameInput(e.target.value) 
    }
    const passingSub = () => {
      setSubjects(gameInput)
    }

    return (
        <div>
          <Header />
          <Gallery sub={subject}/>  
          <NewInput passingSub={passingSub} onChange={onChange} gameInput={gameInput}/>
        </div>
    )
}

export default Game
