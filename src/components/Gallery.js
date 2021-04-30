import React, {useState, useEffect} from 'react'
import Card from './Card'
const API_KEY =`${process.env.REACT_APP_KEY}`
const Gallery = ({sub, randomClick}) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

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
            const items2 = result.photos.map(u => Object.assign({}, u, { approved: true }));
            items2.forEach(item => item.id = `${item.id}A`)
            const final = [...result.photos, ...items2]
            const imagesArr = final.sort(() => (Math.random() > .5) ? 1 : -1)
            setItems(imagesArr);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )   
    }, [sub])


    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
        <div className='grid'>
            {   
                items && items.map(item => { 
                const temp = item.src.tiny.replace('h=200&w=280', 'h=100&w=100')
                return <Card id={item.id} onClick={randomClick} temp={temp} key={item.id} />  
              }) 
            }
        </div>
        </div>
      );
    }
  }

  export default React.memo(Gallery)
