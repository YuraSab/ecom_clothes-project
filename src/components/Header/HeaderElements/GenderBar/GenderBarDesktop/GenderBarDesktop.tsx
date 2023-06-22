import React, {FC, useEffect} from 'react';
import styles from "./GenderBarDesktop.module.css";
import {onSetDropDownMenu, onSetGender} from "../../../../../redux/action-creators/DropDownMenu/DropDownMenu.ts";
import {DropMenuList} from "../../../HeaderLinks/ElementList_DropDownMenu.ts";
import DropDownMenu from "../../../DropDownMenu/DropDownMenuDesktop/DropDownMenu.tsx";
import {useTypedSelector} from "../../../../../hooks/redux/useTypedSelector.ts";
import {useAction} from "../../../../../hooks/redux/useAction.ts";
import {Gender} from "../../../../../redux/action-types";
import {Link} from "react-router-dom";

type GenderBar_PropsTypes = {
    propGender: Gender;
}

const GenderBarDesktop: FC<GenderBar_PropsTypes> = ({propGender}) => {

    const {dropDownValue, gender} = useTypedSelector(state => state.headerState);
    const {onSetDropDownMenu, onSetGender} = useAction();

    useEffect(() => {
        onSetGender(propGender);
    }, [propGender]);

    const genderMas = DropMenuList.find(el => el.gender === gender);


    return (
        gender && genderMas ?

            <div className={styles.mainBlock}>
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

                {
                    genderMas.gender === 'male' &&
                    <>
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
                            <div className={styles.right_block}
                                 key={index}
                                 style={{
                                     background: dropDownValue === el.name ? "white" : "none",
                                     color: dropDownValue === el.name ? "black" : "white"
                                 }}
                                 onMouseOver={() => onSetDropDownMenu(el.name)}
                                 onMouseOut={() => onSetDropDownMenu("")}
                            >
                                <Link
                                    to={`${gender}/${el.name}`}
                                    className={styles.rightLink}
                                    style={{color: dropDownValue === el.name ? "black" : "white"}}
                                >
                                    <div style={{display: "flex", justifyContent: "center", height: "25px"}}>
                                        {el.title}
                                    </div>
                                </Link>

                                <div style={{visibility: dropDownValue === el.name ? "visible" : "hidden"}}>
                                    <DropDownMenu/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            :
            null
    );
};


export default GenderBarDesktop;