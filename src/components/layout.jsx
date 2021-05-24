import React from 'react';
import Nav from './nav';

const Layout = ({ page, children }) => {

    return (
        <>
            <Nav page={page} />
            {children}
        </>
    );
}

export default Layout;