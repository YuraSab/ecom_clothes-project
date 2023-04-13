import React, {useEffect, useState} from 'react';
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
import {DropMenuList} from "./ElementList_DropDownMenu";


const BottomHeaderMenu = () => {

    const location = useLocation();

    const [dropMenu, setDropMenu] = useState("");
    // console.log(dropMenu)


    useEffect(() => {


        return (() => setDropMenu(""))
    }, []);

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
                    location.pathname.includes("female") ?
                        <div><GirlsBar setDropMenu={setDropMenu}/></div>
                        :
                        <div><BoysBar setDropMenu={setDropMenu}/></div>
                }
            </div>

            {/*<div>*/}
                <div hidden={dropMenu === "m-clothes" ? false : true}><DropDownMenu setDropMenu={setDropMenu} category={"m-clothes"} items={DropMenuList[0].typeOfCloth[0]}/></div>
                <div hidden={dropMenu === "m-shoes" ? false : true}><DropDownMenu setDropMenu={setDropMenu} category={"m-shoes"} items={DropMenuList[0].typeOfCloth[1]}/></div>
                <div hidden={dropMenu === "m-backpacks" ? false : true}><DropDownMenu setDropMenu={setDropMenu} category={"m-backpacks"} items={DropMenuList[0].typeOfCloth[2]}/></div>
                <div hidden={dropMenu === "m-accessories" ? false : true}><DropDownMenu setDropMenu={setDropMenu} category={"m-accessories"} items={DropMenuList[0].typeOfCloth[3]}/></div>
                <div hidden={dropMenu === "f-clothes" ? false : true}><DropDownMenu setDropMenu={setDropMenu} category={"f-clothes"} items={DropMenuList[1].typeOfCloth[0]}/></div>
                <div hidden={dropMenu === "f-shoes" ? false : true}><DropDownMenu setDropMenu={setDropMenu} category={"f-shoes"} items={DropMenuList[1].typeOfCloth[1]}/></div>
                <div hidden={dropMenu === "f-accessories" ? false : true}><DropDownMenu setDropMenu={setDropMenu} category={"f-accessories"} items={DropMenuList[1].typeOfCloth[2]}/></div>

                {/*{dropMenu === "m-clothes" && <DropDownMenu setDropMenu={setDropMenu} category={"m-clothes"} items={DropMenuList[0].typeOfCloth[0]}/>}*/}
                {/*{dropMenu === "m-shoes" && <DropDownMenu setDropMenu={setDropMenu} category={"m-shoes"} items={DropMenuList[0].typeOfCloth[1]}/>}*/}
                {/*{dropMenu === "m-backpacks" && <DropDownMenu setDropMenu={setDropMenu} category={"m-backpacks"} items={DropMenuList[0].typeOfCloth[2]}/>}*/}
                {/*{dropMenu === "m-accessories" && <DropDownMenu setDropMenu={setDropMenu} category={"m-accessories"} items={DropMenuList[0].typeOfCloth[3]}/>}*/}
                {/*{dropMenu === "f-clothes" && <DropDownMenu setDropMenu={setDropMenu} category={"f-clothes"} items={DropMenuList[1].typeOfCloth[0]}/>}*/}
                {/*{dropMenu === "f-shoes" && <DropDownMenu setDropMenu={setDropMenu} category={"f-shoes"} items={DropMenuList[1].typeOfCloth[1]}/>}*/}
                {/*{dropMenu === "f-accessories" && <DropDownMenu setDropMenu={setDropMenu} category={"f-accessories"} items={DropMenuList[1].typeOfCloth[2]}/>}*/}
            {/*</div>*/}
        </div>
    );
};

export default BottomHeaderMenu;