import React from 'react';
import '../ThemeControler'
import ThemeControler from '../ThemeControler';
import styles from './Header.module.css'
import { Theme1 } from '../../utils';

function Header() {
  return <div className={`${styles.header}`}>
    <h1>calc</h1>
    <ThemeControler />
  </div>;
}

export default Header;
