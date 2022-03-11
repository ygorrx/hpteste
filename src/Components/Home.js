import React from 'react'
import styles from './Home.module.css';
import {ReactComponent as LogoMain} from '../Assets/hp-logo-main.svg';


const Home = () => {
  return (
    <div className={styles.home}>
        <LogoMain className={styles.logo}/>
        <h1 className={styles.title}>Welcome to the world of magic!</h1>        
    </div>
  )
}

export default Home