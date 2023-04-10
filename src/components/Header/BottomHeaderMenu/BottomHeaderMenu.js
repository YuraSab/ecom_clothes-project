import React, {useState} from 'react';
import styles from "./BottomHeaderMenu.module.css";
import StaffIcon from "../../../assets/icons/staff_logo.png";
import ComebackAlive from "../../../assets/icons/comeback_alive.svg";
import SearchIcon from "../../../assets/icons/search_icon.svg";
import UserIcon from "../../../assets/icons/person_icon.png";
import CartIcon from "../../../assets/icons/cart-icon.png";
import LikeIcon from "../../../assets/icons/like_icon.png";
import BoysBar from "../HeaderElements/GenderBar/BoysBar/BoysBar";
import GirlsBar from "../HeaderElements/GenderBar/GirlsBar/GirlsBar";
import DropDownMenu from "../DropDownMenu/DropDownMenu";


const BottomHeaderMenu = () => {

    // prob stage
    const [gender, setGender] = useState(true);


    return (
        <div className={styles.main_block}>
            <div className={styles.logo}>
                <img src={StaffIcon} alt={"logo"}/>
            </div>

            <div className={styles.menu}>
                <div className={styles.gender} onClick={() => setGender(true)}>
                    Для хлопців
                </div>
                <div className={styles.gender}  onClick={() => setGender(false)}>
                    Для дівчат
                </div>

                <div className={styles.icons_set}>
                    <img src={ComebackAlive} alt={""} className={styles.icon}/>
                    <img src={SearchIcon} alt={""} className={styles.icon} height={25}/>
                    <img src={UserIcon} alt={""} className={styles.icon} height={25}/>
                    <img src={LikeIcon} alt={""} className={styles.icon} height={25}/>
                    <img src={CartIcon} alt={""} className={styles.icon} height={25}/>
                </div>
            </div>



            <div className={styles.submenu}>
                {
                    gender ?
                        <div><BoysBar/></div>
                        :
                        <div><GirlsBar/></div>
                }
            </div>



            <div>
            {/*    todo  - logical operation with dropdown menu     */}
                <DropDownMenu

                />
            </div>

        </div>
    );
};

export default BottomHeaderMenu;