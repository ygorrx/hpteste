import React from 'react';
import styles from './Header.module.css';
import {ReactComponent as Logo} from '../Assets/hplogo.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>
          <Logo className={styles.logoHP}/>
        </div>
        <div className={styles.navigation}>
        <ul className={styles.menu}>
            <a href='#'>Explore the history</a>
            <a href='#'>Characters</a>
            <a href='#'>The Movies</a>
            <a href='#'>The Books</a>
        </ul>
       </div>
        
      </nav>
    </header>
   );
}

export default Header