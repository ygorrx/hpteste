import React from 'react';
import styles from './Header.module.css';
import {ReactComponent as Logo} from '../Assets/hplogo2.svg';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
          
        <div>
         <Link to="/"><Logo className={styles.logoHP}/></Link>
        </div>
        <div className={styles.navigation}>
        <ul className={styles.menu}>
           <NavLink to="/history">Explore the history</NavLink>
           <NavLink to="/characters">Characters</NavLink>
           <NavLink to="/movies">The Movies</NavLink>
           <NavLink to="/books">The Books</NavLink>
        </ul>
       </div>
        
      </nav>
    </header>
   );
}

export default Header