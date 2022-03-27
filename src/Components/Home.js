import React from 'react'
import styles from './Home.module.css';
import logoMain from '../Assets/hp-logo-main.svg';
import History from './History';


const Home = () => {
  return (
    <>
    <div className={styles.home}>
        <img className={styles.logo} src={logoMain} />
        <h1 className={styles.title}>Welcome to the world of magic!</h1>        
    </div>
   
    </>
  )
}

export default Home