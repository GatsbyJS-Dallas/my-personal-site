import React from 'react'
import { Link } from 'gatsby'

import styles from './header.module.scss'

export default () => {
    return (
        <header className={styles.header}>
            <h1>Daniel Scott</h1>
            <ul>
                <li>
                    <Link activeClassName={styles.navItemActive} to="/">Home</Link>
                </li>
                <li>
                    <Link activeClassName={styles.navItemActive} to="/about">About</Link>
                </li>
                <li>
                    <Link activeClassName={styles.navItemActive} to="/contact">Contact</Link>
                </li>
                <li>
                    <Link activeClassName={styles.navItemActive} to="/blog">Blog</Link>
                </li>
            </ul>
        </header>
    )
}