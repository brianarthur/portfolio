import React from 'react';
import Nav from './nav';
import styles from '../styles/home.module.css';

const Layout = ({ page, children }) => {

    return (
        <>
            <Nav page={page} />
            
            <div className={page === 'home' ? '' : styles.container }>{children}</div>
        </>
    );
}

export default Layout;