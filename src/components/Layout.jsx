import React from 'react';
import Nav from './Nav';
import Header from './Header';
import styles from '../styles/home.module.css';

const Layout = ({ page, id, children }) => {

    return (
        <>
            <Header page={page} id={id} />
            <Nav page={page} />
            <div className={page === 'home' ? '' : styles.container }>{children}</div>
        </>
    );
}

export default Layout;