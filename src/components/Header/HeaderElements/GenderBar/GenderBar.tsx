import React, {FC, useEffect} from 'react';
import styles from "./GenderBar.module.css";
import {onSetDropDownMenu, onSetGender} from "../../../../redux/action-creators/DropDownMenu/DropDownMenu.ts";
import {DropMenuList} from "../../BottomHeaderMenu/ElementList_DropDownMenu.ts";
import DropDownMenu from "../../DropDownMenu/DropDownMenu.tsx";
import {useTypedSelector} from "../../../../hooks/redux/useTypedSelector.ts";
import {useAction} from "../../../../hooks/redux/useAction.ts";
import {Gender} from "../../../../redux/action-types";


type GenderBar_PropsTypes = {
    propGender: Gender;
}


const GenderBar: FC<GenderBar_PropsTypes> = ({propGender}) => {

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
                            <div className={styles.right_block}
                                 key={index}
                                 style={{
                                     background: dropDownValue === el.name ? "white" : "black",
                                     color: dropDownValue === el.name ? "black" : "white"
                                 }}
                                 onMouseOver={() => onSetDropDownMenu(el.name)}
                                 onMouseOut={() => onSetDropDownMenu("")}
                            >
                                <div className={styles.rightLink}>{el.title}</div>

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


export default GenderBar;