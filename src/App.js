import React,{useState} from 'react';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import Search from './Components/Search'
import { useNavigate } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="bgimage">
        <div className="parent">
          <h1 className="brandName">PixelHub</h1>
        </div>
        <br></br>
        <div id="hero">
          <h1>Stunning Free Images & Royality free stock</h1>
          <h2>
            Over 2.3 million+ High Quality Images Stock Images we can find for
            you{" "}
          </h2>
        </div>
        <div>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/search/:imgName" element={<Search />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
