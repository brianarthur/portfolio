import React from 'react';
import Link from 'next/link';
import styles from '../styles/nav.module.css';

const pages = [
    { link: 'about', name: "About" },
    { link: 'work', name: "Work" },
    { link: 'projects', name: "Projects" },
]

const resume_link = 'https://drive.google.com/file/d/160-BRUjgqSWb8aMS1phKYqRQA8MN1O-I/view?usp=sharing';

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

                <li><a href={resume_link} target="_blank">Resume</a></li>
            </ul>
        </header>
    );
}

export default Nav;