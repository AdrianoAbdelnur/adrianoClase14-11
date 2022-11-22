import './App.css';
import Home from './components/layout/home/Home';
import Episodes from './components/layout/episodes/Episodes';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Inicial from './components/layout/inicial/Inicial';
import Register from './components/register/Register';
import Details from './components/layout/home/details/Details';
import React,{ useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <Header />
        <Routes>
            <Route path='*' element={<>404</>} />
            <Route path='/' element={<Inicial />} />
            <Route path='/home' element={<Home />} />
            <Route path='/details' element={<Details />} />
            <Route path='/episodes' element={<Episodes />} />
            <Route path='/register' element={<Register />} />
            
        </Routes>
        <Footer />
    </BrowserRouter>

    </div>
  );
}

export default App;
