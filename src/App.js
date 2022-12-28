import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import Search from './Components/Search'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/search/:imgName' element={<Search/>}/>
        </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;
