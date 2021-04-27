import {useState, useEffect} from 'react'
import Card from './Card'
const API_KEY =`${process.env.REACT_APP_KEY}`
const Gallery = ({sub}) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    // eslint-disable-next-line
    const [isClicked, setIsClicked] = useState(false)

   

    const checkSub = (name) => {
      return name? name : 'cats'
    }

    useEffect(() => {
        fetch(`https://api.pexels.com/v1/search?query=${checkSub(sub)}&per_page=8`,{
  headers: {
    Authorization: API_KEY
  }
}).then(res => res.json())
  .then((result) => {
            setIsLoaded(true);
            setItems(result.photos);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [sub])

    const doubling = (ar) => {
      let final
      if(ar){
        const items2 = ar.map(u => Object.assign({}, u, { approved: true }));
        items2.forEach(item => item.id = `${item.id}A`)
        final = [...items, ...items2]
        const imagesArr = final.sort(() => (Math.random() > .5) ? 1 : -1)
        return imagesArr
      }
    }
   console.log(doubling(items))

   const randomClick = (e) => {
     console.log(e.target)
     
   }

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
        <div className='grid'>
            {   
                items && doubling(items).map(item => { 
                const temp = item.src.tiny.replace('h=200&w=280', 'h=100&w=100')
                
                return <Card id={item.id} onClick={randomClick} temp={temp} key={item.id} isClicked={isClicked}/>  
              }) 
            }
        </div>
        </div>
      );
    }
  }

  export default Gallery

/*

            {   
                items && doubling(items).map(item => { 
                const temp = item.src.tiny.replace('h=200&w=280', 'h=100&w=100')
                return <Card id={item.id} onClick={randomClick} temp={temp} key={item.id} isClicked={isClicked}/>  
              }) 
            }
*/