import React from 'react'
import styles from './footer.module.scss'

export default () => {
    return (
        <footer className={styles.footer}>
            <p>Daniel Scott - Copyright &copy; {new Date().getFullYear()}</p>
        </footer>
    )
}