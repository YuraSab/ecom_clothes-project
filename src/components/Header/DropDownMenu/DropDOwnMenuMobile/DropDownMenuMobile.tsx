import React, {FC, useEffect, useState} from 'react';
import styles from "./DropDownMenuMobile.module.css";
import DropItem from "../DropItem/DropItem.tsx";
import {
    DropMenuGenderList,
    DropMenuList,
    DropMenuListItem,
    DropMenuListSubItem
} from "../../BottomHeaderMenu/ElementList_DropDownMenu.ts";
import {useTypedSelector} from "../../../../hooks/redux/useTypedSelector.ts";
import ArrowLeft from "../../../../assets/icons/arrow_left.png";
import {useAction} from "../../../../hooks/redux/useAction";
import {onSetDropDownMenu} from "../../../../redux/action-creators/DropDownMenu/DropDownMenu";
import {CSSTransition} from "react-transition-group";
import "./DropDownMenuTransition.css";

type DropDownMenu_PropsTypes = {
    setBurgerMenuActive: (value: boolean) => void;
}

const DropDownMenu: FC<DropDownMenu_PropsTypes> = ({setBurgerMenuActive}) => {

    const {dropDownValue, gender} = useTypedSelector(state => state.headerState);

    const [myList, setMyList] = useState<DropMenuListItem | undefined>(undefined);
    const {onSetDropDownMenu} = useAction();


    useEffect(() => {
        const actualGender: DropMenuGenderList = DropMenuList.find(el => el.gender === gender) as DropMenuGenderList;
        const actualCategory: DropMenuListItem = actualGender.clothList.find(el => el.name === dropDownValue) as DropMenuListItem;
        setMyList(actualCategory);
    }, [dropDownValue, gender]);


    if (!myList) return null

    return (

            <CSSTransition
                in={!!myList}
                timeout={200}
                classNames="dropDownMenu"
                unmountOnExit
                appear
            >


                <div
                    onClick={() => {
                        setBurgerMenuActive(false);
                        onSetDropDownMenu("");
                    }}
                    className={styles.overlay}
                >
                    <div
                        style={{background: "black",
                            // height: '130vh'
                    }}
                        className={styles.mainDiv}
                        onClick={event => event.stopPropagation()}
                    >

                        <div className={styles.subDiv}>
                            {
                                window.innerWidth < 1025 && <>
                                    <div className={styles.goBack}
                                         onClick={() => onSetDropDownMenu("")}
                                    >
                                        <div className={styles.arrowBack}><img src={ArrowLeft} alt={"go back"}/></div>
                                        <div className={styles.textBack}>Назад</div>
                                    </div>
                                    <div className={styles.category} style={{padding: "20px 40px 20px 20px"}}>
                                        Всі товари
                                    </div>
                                </>
                            }
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

                </div>
            </CSSTransition>
    );
};

export default DropDownMenu;
