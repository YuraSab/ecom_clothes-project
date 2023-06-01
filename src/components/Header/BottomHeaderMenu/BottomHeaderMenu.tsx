import React, {FC, useEffect, useState} from 'react';
import styles from "./BottomHeaderMenu.module.css";
import StaffIcon from "../../../assets/pictures/staff_logo.png";
import ComebackAlive from "../../../assets/pictures/comeback_alive.svg";
import SearchIcon from "../../../assets/icons/search_icon.svg";
import UserIcon from "../../../assets/icons/person_icon.png";
import CartIcon from "../../../assets/icons/cart-icon.png";
import LikeIcon from "../../../assets/icons/like_icon.png";
import {Link, NavLink, useLocation} from "react-router-dom";
import GenderBar from "../HeaderElements/GenderBarDesktop/GenderBar.tsx";
import GenderBarMobile from "../HeaderElements/GenderBarMobile/GenderBarMobile";
import DropDownMenuMobile from "../DropDownMenu/DropDOwnMenuMobile/DropDownMenuMobile";
import {useTypedSelector} from "../../../hooks/redux/useTypedSelector";
import CrossSVG from "../../../assets/icons/cross_svg_icon.svg";
import BurgerMenuSVG from "../../../assets/icons/burger_menu_svg.jpg";
import {ActualUser} from "../../../global/user/User";
import SearchBarOverLay from "../../../ui/SearchBarOverlay/SearchBarOverLay";

const BottomHeaderMenu: FC = () => {

    const {wishList} = useTypedSelector(state => state.wishList);
    const location = useLocation();

    const [burgerMenuActive, setBurgerMenuActive] = useState<boolean>(false)
    const {dropDownValue, gender} = useTypedSelector(state => state.headerState);

    const [userWishListLength, setUserWishListLength] = useState<number>(0);

    const [onSearching, setOnSearching] = useState<boolean>(false);


    useEffect(() => {
        const userWishList = wishList.filter(el => el.id_user === ActualUser.id);
        setUserWishListLength(userWishList.length);
    }, [wishList]);

    return (

        <div className={styles.overlay}>

            <div className={styles.main_block}>

                <div className={styles.burgerMenu} onClick={() => setBurgerMenuActive(prevState => !prevState)} >
                    {
                        burgerMenuActive ?
                            <img src={CrossSVG}  alt={'burger-menu'} width={19}/>
                            :
                            <img src={BurgerMenuSVG} alt={'burger-menu'} width={19}/>
                    }
                </div>

                <div className={styles.logo}>
                    <img src={StaffIcon} alt={"logo"}/>
                </div>

                <div className={styles.menu}>
                    <div className={styles.genderLinks}>

                        <NavLink
                            className={({isActive}) => (isActive ? styles.genderLinkActive : styles.genderLink)}
                            to={'/male'}
                            style={{paddingRight: 60}}
                        >
                            Для хлопців
                        </NavLink>
                        <NavLink
                            className={({isActive}) => (isActive ? styles.genderLinkActive : styles.genderLink)}
                            to={'/female'}
                        >
                            Для дівчат
                        </NavLink>
                    </div>

                    <div className={styles.icons_set}>
                        <img className={styles.comebackAlive} src={ComebackAlive} alt={""}/>
                        <img src={SearchIcon} alt={""} height={25} onClick={() => setOnSearching(true)}/>
                        <img src={UserIcon} alt={""} height={25}/>
                        <Link to={`user/${ActualUser.id}/likes`}> <img src={LikeIcon} alt={""} height={25}/></Link>
                        <Link to={`user/${ActualUser.id}/cart`}>
                            <div style={{position: "relative"}}>
                                {
                                    userWishListLength > 0 &&
                                    <div className={styles.cartLength}>{userWishListLength > 10 ? "10+" : userWishListLength}</div>
                                }
                                <img src={CartIcon} alt={""} height={25}/>
                            </div>
                        </Link>
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

                {
                    burgerMenuActive &&
                    <GenderBarMobile
                        setBurgerMenuActive={setBurgerMenuActive} burgerMenuActive={burgerMenuActive}
                    />
                }

                {
                    dropDownValue && gender !== "" && window.innerWidth < 1026 &&
                    <DropDownMenuMobile setBurgerMenuActive={setBurgerMenuActive}/>
                }

                {
                    onSearching && <SearchBarOverLay setOnSearching={setOnSearching}/>
                }

            </div>
        </div>
    );
};

export default BottomHeaderMenu;
