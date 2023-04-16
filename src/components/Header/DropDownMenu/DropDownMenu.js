import React, {useEffect, useState} from 'react';
import styles from "./DropDownMenu.module.css";
import DropItem from "./DropItem";
import {onSetDropDownMenu} from "../../../redux/action-creators/DropDownMenu";
import {useDispatch, useSelector} from "react-redux";
import {DropMenuList} from "../BottomHeaderMenu/ElementList_DropDownMenu";

// const DropDownMenu = ({items, category}) => {
// const DropDownMenu = ({gender, dropDownValue}) => {
const DropDownMenu = () => {
    const {dropDownValue, gender} =  useSelector(({headerState}) => (headerState));
    const dispatch = useDispatch();
    const [myList, setMyList] = useState([]);
    // console.log(dropDownValue, gender);
    // const actualGender = DropMenuList.find(el => el.gender === gender);
    // console.log(`actualGender`, actualGender)
    // const actualCategory  = actualGender.typeOfCloth.find(el => el.name = dropDownValue);
    //
    // console.log(gender, dropDownValue)
    // console.log('actualCategory',actualCategory);


    // useEffect(() => {
    //     const actualGender = DropMenuList.find(el => el.gender === gender);
    //     const actualCategory  = actualGender.typeOfCloth.find(el => el.name = dropDownValue);
    //     setMyList(actualCategory);
    // }, [dropDownValue, gender]);

    useEffect(() => {
        const actualGender = DropMenuList.find(el => el.gender === gender);
        const actualCategory  = actualGender.typeOfCloth.find(el => el.name === dropDownValue);
        setMyList(actualCategory);
    }, [dropDownValue, gender]);

    return (
        <div className={styles.mainDiv}
             onMouseOver={() => dispatch(onSetDropDownMenu(dropDownValue))}
             onMouseOut={() => dispatch(onSetDropDownMenu(""))}
        >
            <div className={styles.subDiv}>
                {
                    myList?.categories?.map((el,
                                                   index
                        ) =>

                        <div
                            key={index}
                        >
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