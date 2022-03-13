import React from 'react'
import './App.css';
import Cards from './Components/Cards';
import Header from './Components/Header';
import Home from './Components/Home';
import History from './Components/History';


function App() {

	return (
    <>
        <Header/>
        <Home/>
        <History/>
        <Cards/>
    </>
)
}

export default App;