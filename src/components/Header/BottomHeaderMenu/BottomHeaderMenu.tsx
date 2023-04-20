import React, {FC} from 'react';
import styles from "./BottomHeaderMenu.module.css";
import StaffIcon from "../../../assets/pictures/staff_logo.png";
import ComebackAlive from "../../../assets/pictures/comeback_alive.svg";
import SearchIcon from "../../../assets/icons/search_icon.svg";
import UserIcon from "../../../assets/icons/person_icon.png";
import CartIcon from "../../../assets/icons/cart-icon.png";
import LikeIcon from "../../../assets/icons/like_icon.png";
import {NavLink, useLocation} from "react-router-dom";
import GenderBar from "../HeaderElements/GenderBar/GenderBar.tsx";
import {useLocationType} from "../../../modules/global_elements/GlobalElements";

const BottomHeaderMenu: FC = () => {

    const location = useLocation<useLocationType>();

    return (
        <div className={styles.main_block}>
            <div className={styles.logo}>
                <img src={StaffIcon} alt={"logo"}/>
            </div>

            <div className={styles.menu}>
                <NavLink
                    className={({isActive}) => (isActive ? styles.genderLinkActive : styles.genderLink)}
                    to={'/male'}
                >
                    Для хлопців
                </NavLink>
                <NavLink
                    className={({isActive}) => (isActive ? styles.genderLinkActive : styles.genderLink)}
                    to={'/female'}
                >
                    Для дівчат
                </NavLink>

                <div className={styles.icons_set}>
                    <img src={ComebackAlive} alt={""}/>
                    <img src={SearchIcon} alt={""} height={25}/>
                    <img src={UserIcon} alt={""} height={25}/>
                    <img src={LikeIcon} alt={""} height={25}/>
                    <img src={CartIcon} alt={""} height={25}/>
                </div>
            </div>


            <div className={styles.submenu}>
                {
                    location.pathname.includes("female")
                        ?
                        <GenderBar propGender={"female"}/>
                        :
                        <GenderBar propGender={"male"}/>
                }
            </div>

        </div>
    );
};

export default BottomHeaderMenu;