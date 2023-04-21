import React, {FC, useEffect, useState} from 'react';
import styles from "./DropDownMenu.module.css";
import DropItem from "./DropItem.tsx";
import {
    DropMenuGenderList,
    DropMenuList,
    DropMenuListItem,
    DropMenuListSubItem
} from "../BottomHeaderMenu/ElementList_DropDownMenu.ts";
import {useTypedSelector} from "../../../hooks/redux/useTypedSelector.ts";


const DropDownMenu: FC = () => {
    const {dropDownValue, gender} = useTypedSelector(state => state.headerState);

    const [myList, setMyList] = useState<DropMenuListItem | undefined>(undefined);

    useEffect(() => {
        const actualGender: DropMenuGenderList = DropMenuList.find(el => el.gender === gender) as DropMenuGenderList;
        const actualCategory: DropMenuListItem = actualGender.clothList.find(el => el.name === dropDownValue) as DropMenuListItem;
        setMyList(actualCategory);
    }, [dropDownValue, gender]);


    if(!myList) return null


    return (
            <div className={styles.mainDiv}>
                <div className={styles.subDiv}>
                    {
                        myList.categories.map((el: DropMenuListSubItem, index: number) =>
                            <div key={index}>
                                <DropItem subItem={el}/>
                                <br/>
                            </div>
                        )
                    }
                </div>
            </div>
    );
};

export default DropDownMenu;