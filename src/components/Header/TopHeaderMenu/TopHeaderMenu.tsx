import React, {FC, useState} from 'react';
import styles from "./TopHeaderMenu.module.css";
import Phone_Icon from "../../../assets/icons/phone_icon.png";
import ScheduleBlock from "../HeaderElements/SheduleBlock/ScheduleBlock.tsx";


const TopHeaderMenu: FC = () => {

    const [showSchedule, setShowSchedule] = useState<boolean>(false);

    return (
        <div className={styles.overlay}>
            <div className={styles.main_block}>
                <div className={`${styles.child_block} ${styles.left_block}`}>
                    <div>НОВИНИ І ВІДГУКИ</div>
                    <div>МАГАЗИНИ</div>
                    <div>ПРО НАС</div>
                    <div>ДОСТАВКА, ОПЛАТА, ПОВЕРНЕННЯ</div>
                    <div>РОБОТА В КОМПАНІЇ</div>
                </div>

                <div
                    className={`${styles.child_block} ${styles.right_block}`}
                    onMouseOver={() => setShowSchedule(true)}
                    onMouseOut={() => setShowSchedule(false)}
                >
                    <div><img src={Phone_Icon} alt={'phone-icon'} className={styles.phone_icon}/></div>
                    <div className={styles.numbers}>098 161-36-32</div>
                    <div className={styles.numbers}>050 362-04-05</div>
                </div>

                {
                    showSchedule && <ScheduleBlock/>
                }
            </div>
        </div>
    );
};

export default TopHeaderMenu;