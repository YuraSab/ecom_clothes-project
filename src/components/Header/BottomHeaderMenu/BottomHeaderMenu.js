import React from 'react';
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
import {NavLink, useLocation} from "react-router-dom";


const BottomHeaderMenu = () => {

    const location = useLocation();

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
                    // gender ?
                    location.pathname.includes("female") ?
                        <div><GirlsBar/></div>
                        :
                        <div><BoysBar/></div>
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