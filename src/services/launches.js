import axios from 'axios';

const API_BASE = 'https://api.genshin.dev'


const getAllCharacters = async (state) => {
  try {
    const response = await axios.get(API_BASE + '/characters')
    state(response.data)
  } catch (error) {
    console.error(error);
  }
}

const CharacterItem = async (character, state) => {
  try {
    const response = await axios.get(API_BASE + '/characters' + `/${character}?lang=es`)
    state(response.data)
  } catch (error) {
    console.error(error);
  }
}

const SkillTalents = async (character, state) => {
  const response = await axios.get(API_BASE + '/characters' + `/${character}?lang=es`)
  state(response.data.skillTalents)
}

const getAllWeapons = async (state) => {
  try {
    const response = await axios.get(API_BASE + '/weapons')
    state(response.data)    
  } catch (error) {
    console.error(error);
  }
}

const WeaponItem = async (item, state) => {
  try {
    const response = await axios.get(API_BASE + '/weapons' + `/${item}`)
    state(response.data)    
    
  } catch (error) {
    console.error(error)
  }
}

export {
  getAllCharacters,
  CharacterItem,
  SkillTalents,
  getAllWeapons,
  WeaponItem,
  API_BASE
}