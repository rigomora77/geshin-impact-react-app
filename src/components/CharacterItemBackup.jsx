import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CharacterItem, API_BASE } from '../services/launches';

const Character = () => {
  const [character, setCharacter] = useState(null)
   
  const params = useParams()  
  useEffect(()=>{
    CharacterItem(params.id, setCharacter)
  },[])

  return (
    <>
    {character != null ? (
      <div>
        <h2>Personaje con el id {params.id}</h2>
        <p>con el título: {character.title} </p>
        <p>con la vision: {character.vision}</p>
        <p>descripción: {character.description}</p>
        <p>cumpleaños: {character.birthday}</p>
        <img src={API_BASE + `/${params.id}/card`} alt="" /> 
      </div>
    ):('No data')}
    </>
  )
};

export default Character;
