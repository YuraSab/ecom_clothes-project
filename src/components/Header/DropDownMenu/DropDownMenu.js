import React from 'react';
import styles from "./DropDownMenu.module.css";
import {DropMenuList} from "../BottomHeaderMenu/ElementList_DropDownMenu";

// todo - gets args from props
const DropDownMenu = () => {




    return (
        <div className={styles.mainDiv}>
            <div className={styles.subDiv}>
                {
                    // DropMenuList[0].typeOfCloth[0].categories.map(el =>
                    DropMenuList[1].typeOfCloth[0].categories.map((el, index) =>
                        <div
                            key={index}
                            // className={el.type === "category" ? styles.category : styles.subCategory}>{el.name}
                            className={el.type === "category" ? styles.category : styles.subCategory}
                            // dangerouslySetInnerHTML={{__html: replaceWithBr()}}
                        >
                            {el.name}
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default DropDownMenu;