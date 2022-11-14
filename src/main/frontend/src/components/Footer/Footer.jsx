import React from 'react';
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <img src="/images/logo_white.png" alt="" />
            <div className={styles.description}>
                <span>Team.noname</span>
                <span>email@gmail.com</span>
                <span>국내 날씨 정보 - 기상청 / 미세먼지 - 한국 환경공단</span>
            </div>
        </footer>
    );
}

