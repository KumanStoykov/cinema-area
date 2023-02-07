import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

const Header: React.FC = () => {

    return (
        <header className={styles.header}>
            <div className={`${styles['nav-wrap']} ${'container'}`}>
                <div className={styles.logo}><Link to={'/'}>LOGO</Link></div>
                <nav className={styles.nav}>
                    <ul className={styles['nav-list']}>
                        <li className={styles['nav-list']}><Link to={'/'}>HOME</Link></li>
                        <li className={styles['nav-list']}><Link to={'/'}>FILMS</Link></li>
                        <li className={styles['nav-list']}><Link to={'/'}>LOGIN</Link></li>
                        <li className={styles['nav-list']}><Link to={'/'}>REGISTER</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;