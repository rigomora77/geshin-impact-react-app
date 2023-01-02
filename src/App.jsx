import { BrowserRouter, Routes, Route} from 'react-router-dom';
import CharacterList from './components/CharacterList';
import CharacterItem from './components/CharacterItem';

export default function App() {

  return (
    <>    
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<CharacterList></CharacterList>}></Route>
            <Route path='character/:id'element={<CharacterItem></CharacterItem>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}