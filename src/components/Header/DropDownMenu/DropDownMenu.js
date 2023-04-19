import React, {useEffect, useState} from 'react';
import styles from "./DropDownMenu.module.css";
import DropItem from "./DropItem";
import {useSelector} from "react-redux";
import {DropMenuList} from "../BottomHeaderMenu/ElementList_DropDownMenu";

const DropDownMenu = () => {
    const {dropDownValue, gender} =  useSelector(({headerState}) => (headerState));
    const [myList, setMyList] = useState([]);

    useEffect(() => {
        const actualGender = DropMenuList.find(el => el.gender === gender);
        const actualCategory  = actualGender.typeOfCloth.find(el => el.name === dropDownValue);
        setMyList(actualCategory);
    }, [dropDownValue, gender]);

    return (
        <div className={styles.mainDiv}>
            <div className={styles.subDiv}>
                {
                    myList?.categories?.map((el, index) =>
                        <div key={index}>
                            <DropItem el={el}/>
                            <br/>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default DropDownMenu;