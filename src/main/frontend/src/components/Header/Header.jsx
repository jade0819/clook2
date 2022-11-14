import React from 'react';
import Locationbar from "../Locationbar/Locationbar";
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <a href="" className={styles.logo}>
                <img src="/images/logo.png" alt="" />
            </a>
            <Locationbar />
        </header>
    );
}

