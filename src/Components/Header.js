import React from 'react';
import styles from './Header.module.css';
import {ReactComponent as Logo} from '../Assets/hplogo.svg'

import { NavLink, Link, useLocation } from 'react-router-dom';
import useMedia from './Hooks/useMedia';

const Header = () => {

  const mobile = useMedia('(max-width: 768px)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const {pathname} = useLocation();

React.useEffect(() => {
  setMobileMenu(false);
}, [pathname]);


  return (
    <>
   
    <header className={styles.header}>
    <Link to="/"><Logo className={styles.logoHP}/></Link>
   
    {mobile && (
      <button aria-label="Menu" className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`} onClick={() => setMobileMenu(!mobileMenu)}></button>
    )}
        <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        
        
        <div className={`${mobile ? styles.navMobile : styles.navigation} ${mobileMenu && styles.navMobileActive}`}>
        <ul className={`${mobile ? styles.navMobile : styles.menu} ${mobileMenu && styles.navMobileActive}`}>
           <NavLink to="/history">Explore the history</NavLink>
           <NavLink to="/characters">Characters</NavLink>
           <NavLink to="/movies">The Movies</NavLink>
           <NavLink to="/books">The Books </NavLink>
        </ul>
       </div>
        
      </nav>
    </header>
    </>
   );
}

export default Header