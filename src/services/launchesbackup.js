import axios from 'axios';

const getAllCharacters = async (state) => {
  const response = await axios.get('https://rickandmortyapi.com/api/character')
  state(response.data.results)
}

const CharacterItem = async (id, state) => {
  const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
  state(response.data)
}

export {
  getAllCharacters,
  CharacterItem
}