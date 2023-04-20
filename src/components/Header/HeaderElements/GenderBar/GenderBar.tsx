import React, {FC, useEffect} from 'react';
import styles from "./GenderBar.module.css";
import {useDispatch, useSelector} from "react-redux";
import {onSetDropDownMenu, onSetGender} from "../../../../redux/action-creators/DropDownMenu";
import {DropMenuList} from "../../BottomHeaderMenu/ElementList_DropDownMenu";
import DropDownMenu from "../../DropDownMenu/DropDownMenu.tsx";


type GenderBar_PropsTypes = {
    propGender: string;
}
type DropMenuSubItem_Types = {
    name: string,
    title: string,
    categories: [],
}
type DropMenuList_Types = {
    gender: string,
    typeOfCloth: DropMenuSubItem_Types[],
}


const GenderBar: FC <GenderBar_PropsTypes> = ({propGender}) => {

    const {dropDownValue, gender} = useSelector(({headerState}) => (headerState));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(onSetGender(propGender));
    }, [propGender]);

    const genderMas: DropMenuList_Types = DropMenuList.find(el => el.gender === gender);

    return (
        gender &&
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
                genderMas.typeOfCloth.map((el, index) => {
                    return (
                        <div className={styles.right_block}
                             key={index}
                             style={{
                                 background: dropDownValue === el.name ? "white" : "black",
                                 color: dropDownValue === el.name ? "black" : "white"
                             }}
                             onMouseOver={() => dispatch(onSetDropDownMenu(el.name))}
                             onMouseOut={() => dispatch(onSetDropDownMenu(""))}
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
    );
};


export default GenderBar;