import { useEffect, useState } from 'react';
import { getAllCharacters, API_BASE} from '../services/launches';
import { Grid } from '@chakra-ui/react';


const Home = () => {

  const [characters, setCharacters] = useState(null)

  useEffect(()=>{
    getAllCharacters(setCharacters)
  },[])

  return (
    <>    
      {characters != null ? (
        characters.map(character => (
          <section
          key={character}>
            <a href={`/character/${character}`}>{character}</a>
            <img src={API_BASE + `/${character}/card`} alt="" width={200}/>     
          </section>
        ))
      ):('No data')}
    </>
  )
}

export default Home