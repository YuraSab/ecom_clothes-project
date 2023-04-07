import React from 'react';
import styles from "./BoysBar.module.css";

const BoysBar = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={styles.genderActivities} style={{color: "#eb001c"}}>Знижки</div>
            <div className={styles.genderActivities} style={{color: "#48DD00"}}>Новинки</div>
            <div className={styles.genderActivities}>Staff Basic</div>
            <div className={styles.genderActivities}>Staff Tactical</div>
            <div className={styles.clothesType}>Одяг</div>
            <div className={styles.clothesType}>Взутя</div>
            <div className={styles.clothesType}>Рюкзаки та сумки</div>
            <div className={styles.clothesType}>Аксесуари</div>

        </div>
    );
};

export default BoysBar;