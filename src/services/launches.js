import axios from 'axios';

const API_BASE = 'https://api.genshin.dev/characters'

const getAllCharacters = async (state) => {
  const response = await axios.get(API_BASE)
  state(response.data)  
}

const CharacterItem = async (character, state) => {
  const response = await axios.get(API_BASE + `/${character}?lang=es`)
  state(response.data)  
}

const SkillTalents = async (character, state) => {
  const response = await axios.get(API_BASE + `/${character}?lang=es`)
  state(response.data.skillTalents)  
}

export {
  getAllCharacters,
  CharacterItem,
  SkillTalents,
  API_BASE
}