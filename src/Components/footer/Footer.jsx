import React from 'react';
// components
import ScrollBar from '../scroolBar/ScrollBar';
// styles
import styles from "./css/footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <span className={styles.footer_info}>made in 2023 years</span>
            <ScrollBar />
        </div>
    )
}

export default Footer;
