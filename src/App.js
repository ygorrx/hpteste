import React from 'react'
import './App.css';
import Cards from './Components/Cards';
import Header from './Components/Header';
import Home from './Components/Home';
import History from './Components/History';
import Movies from './Components/Movies';
import Books from './Components/Books';
import Footer from './Components/Footer';


function App() {

	return (
    <>
        <Header/>
        <Home/>
        <History/>
        <Cards/>
        <Movies/>
        <Books/>
        <Footer/>
    </>
)
}

export default App;