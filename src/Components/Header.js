import React from 'react';
import styles from './Header.module.css';

import imageLogo from '../Assets/hplogo.svg';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
          
        <div>
         <Link to="/"><img className={styles.logoHP} src={imageLogo} /></Link>
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