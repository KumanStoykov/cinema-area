import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

const Header: React.FC = () => {

    return (
        <header className={styles.header}>
            <div className={`${styles['nav-wrap']} ${'container'}`}>
                <div className={styles.logo}><Link to={'/'}>LOGO</Link></div>
                <div className={styles['nav-search-wrap']}>
                    <nav className={styles.nav}>
                        <ul className={styles['nav-list']}>
                            <li className={styles['nav-list']}><Link to={'/'}>Login</Link></li>
                            <li className={styles['nav-list']}><Link to={'/'}>Register</Link></li>
                            <li className={styles['nav-list']}><Link to={'/'}>My-History</Link></li>
                        </ul>
                    </nav>
                    <div className={styles['search-wrap']}>
                        <form className={styles['search-form']}>
                            <input className={styles['search-input']} type='text' />
                            <button className={styles['search-btn']}>search</button>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;