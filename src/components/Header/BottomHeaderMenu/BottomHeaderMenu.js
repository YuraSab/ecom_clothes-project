import React, {useEffect} from 'react';
import styles from "./BottomHeaderMenu.module.css";
import StaffIcon from "../../../assets/pictures/staff_logo.png";
import ComebackAlive from "../../../assets/pictures/comeback_alive.svg";
import SearchIcon from "../../../assets/icons/search_icon.svg";
import UserIcon from "../../../assets/icons/person_icon.png";
import CartIcon from "../../../assets/icons/cart-icon.png";
import LikeIcon from "../../../assets/icons/like_icon.png";
import BoysBar from "../HeaderElements/GenderBar/BoysBar/BoysBar";
import GirlsBar from "../HeaderElements/GenderBar/GirlsBar/GirlsBar";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import {NavLink, useLocation} from "react-router-dom";
import {DropMenuList} from "./ElementList_DropDownMenu";
import {useDispatch, useSelector} from "react-redux";
import GenderBar from "../HeaderElements/GenderBar/GenderBar";
import {onSetGender} from "../../../redux/action-creators/DropDownMenu";


const BottomHeaderMenu = () => {

    const location = useLocation();

    // const {dropDownValue, } = useSelector(({dropDownValue: {dropDownValue}}) => ({dropDownValue}));
    const {dropDownValue, gender} =  useSelector(({headerState}) => (headerState));

    // console.log(`dasd`,dropDownValue, gender)

    const maleMas = DropMenuList.find(el => el.gender === 'male');
    const femaleMas = DropMenuList.find(el => el.gender === 'female');
    // console.log(maleMas)
    // console.log(femaleMas)
    // console.log(dropDownValue, gender);

    const dispatch = useDispatch();



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
                        // <div><GirlsBar/></div>
                        // <div><GenderBar mas={femaleMas}/></div>
                        <div><GenderBar propGender={"female"}/></div>
                        :
                        // <div><BoysBar/></div>
                    // <div><GenderBar mas={maleMas}/></div>
                    <div><GenderBar  propGender={"male"}/></div>
                }
            </div>



            {
                // dropDownValue.length > 0 && gender !== "" && <DropDownMenu gender={gender} dropDownValue={dropDownValue}/>
                // dropDownValue.length > 0 && <DropDownMenu gender={gender} dropDownValue={dropDownValue}/>
                // dropDownValue !== "" && <DropDownMenu/>

                // <div hidden={!(dropDownValue === "clothes")}>
                //     <DropDownMenu category={"m-clothes"} items={DropMenuList[0].typeOfCloth[0]}/>
                // </div>
                // <div hidden={dropDownValue !== "m-clothes"}><DropDownMenu category={"m-clothes"} items={DropMenuList[0].typeOfCloth[0]}/></div>
            }




            {/*<div hidden={!(dropDownValue === "m-clothes")}>*/}
            {/*    <DropDownMenu category={"m-clothes"} items={DropMenuList[0].typeOfCloth[0]}/>*/}
            {/*</div>*/}

            {/*<div hidden={!(dropDownValue === "m-clothes")}><DropDownMenu category={"m-clothes"}*/}
            {/*                                                             items={DropMenuList[0].typeOfCloth[0]}/>*/}
            {/*</div>*/}
            {/*<div hidden={!(dropDownValue === "m-shoes")}><DropDownMenu category={"m-shoes"}*/}
            {/*                                                           items={DropMenuList[0].typeOfCloth[1]}/>*/}
            {/*</div>*/}
            {/*<div hidden={!(dropDownValue === "m-backpacks")}><DropDownMenu category={"m-backpacks"}*/}
            {/*                                                               items={DropMenuList[0].typeOfCloth[2]}/>*/}
            {/*</div>*/}
            {/*<div hidden={!(dropDownValue === "m-accessories")}><DropDownMenu category={"m-accessories"}*/}
            {/*                                                                 items={DropMenuList[0].typeOfCloth[3]}/>*/}
            {/*</div>*/}
            {/*<div hidden={!(dropDownValue === "f-clothes")}><DropDownMenu category={"f-clothes"}*/}
            {/*                                                             items={DropMenuList[1].typeOfCloth[0]}/>*/}
            {/*</div>*/}
            {/*<div hidden={!(dropDownValue === "f-shoes")}>*/}
            {/*    <DropDownMenu category={"f-shoes"} items={DropMenuList[1].typeOfCloth[1]}/>*/}
            {/*</div>*/}
            {/*<div hidden={!(dropDownValue === "f-accessories")}>*/}
            {/*    <DropDownMenu category={"f-accessories"} items={DropMenuList[1].typeOfCloth[2]}/>*/}
            {/*</div>*/}

        </div>
    );
};

export default BottomHeaderMenu;