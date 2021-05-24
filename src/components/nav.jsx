import React from 'react';
import Link from 'next/link';
import styles from '../styles/nav.module.css';

const pages = [
    { link: 'about', name: "About" },
    { link: 'work', name: "Work" },
    { link: 'projects', name: "Projects" },
]

const Nav = ({page}) => {
    return (
        <header className={styles.nav}>
            <ul>
                <li><Link href="/"><a className={page === 'home' ? styles.active : ''}>Brian Arthur</a></Link></li>

                { pages.map(p => (
                    <li key={p.link}>
                        <Link href={`/${p.link}`}>
                            <a className={page === p.link ? styles.active : ''}>{p.name}</a>
                        </Link>
                    </li>
                ))}

                <li><Link href="/resume"><a>Resume</a></Link></li>
            </ul>
        </header>
    );
}

export default Nav;