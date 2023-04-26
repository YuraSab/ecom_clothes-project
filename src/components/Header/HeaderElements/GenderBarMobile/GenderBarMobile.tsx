import React, {FC, useEffect} from 'react';
import {Gender} from "../../../../redux/action-types";
import {useTypedSelector} from "../../../../hooks/redux/useTypedSelector";
import styles from "./GenderBarMobile.module.css";
import {NavLink} from "react-router-dom";
import DropDownMenu from "../../DropDownMenu/DropDownMenu";
import {DropMenuList} from "../../BottomHeaderMenu/ElementList_DropDownMenu";
import {onSetDropDownMenu} from "../../../../redux/action-creators/DropDownMenu/DropDownMenu";
import {useAction} from "../../../../hooks/redux/useAction";

type GenderBarMobile_PropsTypes = {
    propGender: Gender,
    setBurgerMenuActive: (value: boolean) => void;
}

const GenderBarMobile: FC<GenderBarMobile_PropsTypes> = ({propGender, setBurgerMenuActive}) => {

    const {dropDownValue, gender} = useTypedSelector(state => state.headerState);

    const {onSetDropDownMenu, onSetGender} = useAction();

    const genderMas = DropMenuList.find(el => el.gender === gender);
    console.log(genderMas)

    useEffect(() => {
        return (() => {
                window.addEventListener("resize", () => {
                    if (document.body.clientWidth > 1025) {
                        setBurgerMenuActive(false);
                    }
                })
            }
        )
    }, []);


    return (
        gender && genderMas ?

            <div className={styles.mainDiv}>
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


                <div>
                    <div className={styles.left_block}>
                        <div className={styles.leftLink} style={{color: "#eb001c"}}>
                            знижки
                        </div>
                    </div>
                    <div className={styles.left_block}>
                        <div className={styles.leftLink} style={{color: "#48DD00"}}>
                            новинки
                        </div>
                    </div>
                </div>


                {
                    genderMas.gender === 'male' && <>
                        <div className={styles.left_block}>
                            <div className={styles.leftLink} style={{color: "white"}}>Staff Basic</div>
                        </div>
                        <div className={styles.left_block}>
                            <div className={styles.leftLink} style={{color: "white"}}>Staff Tactical</div>
                        </div>
                    </>
                }


                {
                    genderMas.clothList.map((el, index) => {
                        return (
                            <div className={styles.left_block}
                                 key={index}
                                 style={{
                                     // background: dropDownValue === el.name ? "white" : "black",
                                     background: dropDownValue === el.name ? "white" : "none",
                                     color: dropDownValue === el.name ? "black" : "white"
                                 }}
                                // onMouseOver={() => onSetDropDownMenu(el.name)}
                                // onMouseOut={() => onSetDropDownMenu("")}
                            >
                                <div className={styles.leftLink}>{el.title}</div>

                                <div style={{visibility: dropDownValue === el.name ? "visible" : "hidden"}}>
                                    <DropDownMenu/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            : null
    );
};

export default GenderBarMobile;