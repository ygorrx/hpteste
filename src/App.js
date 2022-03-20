import React from 'react'
import './App.css';
import Cards from './Components/Cards';
import Header from './Components/Header';
import Home from './Components/Home';
import History from './Components/History';
import Movies from './Components/Movies';
import Books from './Components/Books';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

	return (
    <>
    <BrowserRouter>
        <Header/>
        <Routes>
           <Route path ='/' element={<Home/>}/>
           <Route path ='history' element={<History/>}/>
           <Route path ='characters' element={<Cards/>}/>
           <Route path ='movies' element={<Movies/>}/>
           <Route path ='books' element={<Books/>}/>                
        </Routes>
        <Footer/>
    </BrowserRouter>
    </>
)
}

export default App;