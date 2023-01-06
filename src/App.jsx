import { BrowserRouter, Routes, Route} from 'react-router-dom';
import CharacterList from './components/CharacterList';
import CharacterItem from './components/CharacterItem';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';

export default function App() {

  return (
    <>
      <NavBar/>
      <BrowserRouter>      
        <Routes>          
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/character' element={<CharacterList></CharacterList>}></Route>
          <Route path='character/:id'element={<CharacterItem></CharacterItem>}></Route>
        </Routes>
        </BrowserRouter>             
    </>
  )
}