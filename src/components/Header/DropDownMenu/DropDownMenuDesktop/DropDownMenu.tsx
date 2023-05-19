import React, {FC, useEffect, useState} from 'react';
import styles from "./DropDownMenu.module.css";
import DropItem from "../DropItem/DropItem.tsx";
import {
    DropMenuGenderList,
    DropMenuList,
    DropMenuListItem,
    DropMenuListSubItem
} from "../../HeaderLinks/ElementList_DropDownMenu.ts";
import {useTypedSelector} from "../../../../hooks/redux/useTypedSelector.ts";
import {Link} from "react-router-dom";


const DropDownMenu: FC = () => {
    const {dropDownValue, gender} = useTypedSelector(state => state.headerState);
    const [myList, setMyList] = useState<DropMenuListItem | undefined>(undefined);


    useEffect(() => {
        const actualGender: DropMenuGenderList = DropMenuList.find(el => el.gender === gender) as DropMenuGenderList;
        const actualCategory: DropMenuListItem = actualGender.clothList.find(el => el.name === dropDownValue) as DropMenuListItem;
        setMyList(actualCategory);
    }, [dropDownValue, gender]);


    if (!myList) return null


    return (

        <div
            className={styles.mainDiv}
            style={{height: window.innerWidth <= 1025 ? "100%" : 335}}
            // next two rows aren`t necessary but can be in adventure (everything works anyway)
            // onMouseOver={() => onSetDropDownMenu(dropDownValue)}
            // onMouseOut={() => onSetDropDownMenu("")}
        >
            <div className={styles.subDiv}>
                {
                    myList.categories.map((el: DropMenuListSubItem, index: number) =>
                        <Link to={`/${gender}/${el.link}`} style={{textDecoration: "none"}} key={index}>
                            <div>
                                <DropItem subItem={el}/>
                                <br/>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>

    );
};

export default DropDownMenu;