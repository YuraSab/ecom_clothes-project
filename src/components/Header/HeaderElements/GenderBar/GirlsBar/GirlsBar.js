import React from 'react';
import styles from "./GirlsBar.module.css";

const GirlsBar = () => {
    return (
        <div className={styles.mainBlock}>
            {/*<div className={styles.genderActivities} style={{color: "#eb001c"}}>Знижки</div>*/}
            {/*<div className={styles.genderActivities} style={{color: "#48DD00"}}>Новинки</div>*/}
            {/*<div className={styles.clothesType}>Одяг</div>*/}
            {/*<div className={styles.clothesType}>Взутя</div>*/}
            {/*<div className={styles.clothesType}>Аксесуари</div>*/}
            <div className={styles.left_block}>
                <div className={styles.leftLink} style={{color: "#eb001c"}}>
                    Знижки
                </div>
            </div>
            <div className={styles.left_block}>
                <div className={styles.leftLink} style={{color: "#48DD00"}}>
                    Новинки
                </div>
            </div>


            <div className={styles.right_block}>
                <div className={styles.rightLink}>Одяг</div>
            </div>
            <div className={styles.right_block}>
                <div className={styles.rightLink}>Взуття</div>
            </div>
            <div className={styles.right_block}>
                <div className={styles.rightLink}>Аксесуари</div>
            </div>
        </div>
    );
};

export default GirlsBar;