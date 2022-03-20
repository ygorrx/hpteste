import React from 'react';
import styles from './Footer.module.css'
import { ReactComponent as Logo } from '../Assets/wworld.svg'

const Footer = () => {
  return <footer className={styles.footer}>
    <Logo className={styles.logo}/>
    <p>Warner Bros. Entertainment Inc. All rights reserved.</p>
  </footer>;
};

export default Footer;