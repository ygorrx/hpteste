import React from 'react'
import styles from './Home.module.css';
import logoMain from '../Assets/hp-logo-main.svg';
import Head from './Head'



const Home = () => {
  return (
    <>
    <Head title="Home" />
    <div className={styles.home}>
        <img className={styles.logo} src={logoMain} alt='logo' />
        <h1 className={styles.title}>Welcome to the world of magic!</h1>        
    </div>
   
    </>
  )
}

export default Home