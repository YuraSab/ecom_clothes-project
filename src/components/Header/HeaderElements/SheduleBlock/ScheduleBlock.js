import React from 'react';
import styles from "./ScheduleBlock.module.css";

const ScheduleBlock = () => {
    return (
        <div className={styles.main_block}>
            <div className={styles.mode_of_operation}>Режим роботи</div>
            <div className={styles.monday_friday}>10<span>00</span> - 19<span>00</span></div>
            <div className={styles.saturday_sunday}>Нд: 11:00 - 18:00</div>
        </div>
    );
};

export default ScheduleBlock;