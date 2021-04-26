import {useState, useEffect} from 'react'

const API_KEY =`${process.env.REACT_APP_KEY}`

const Gallery = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
  
    useEffect(() => {
        fetch("https://api.pexels.com/v1/search?query=cats&orientation=landscape&per_page=16",{
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
    }, [])

console.log(items)
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
            {
                isLoaded  && items.map(item => (
            <img key={item.id} alt='A sky from api' src={item.src.tiny} />
          )) 
          }
        </div>
      );
    }
  }

  export default Gallery

  /*

  */