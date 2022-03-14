import React from 'react'
import './App.css';
import Cards from './Components/Cards';
import Header from './Components/Header';
import Home from './Components/Home';
import History from './Components/History';
import Movies from './Components/Movies';


function App() {

	return (
    <>
        <Header/>
        <Home/>
        <History/>
        <Cards/>
        <Movies/>
    </>
)
}

export default App;