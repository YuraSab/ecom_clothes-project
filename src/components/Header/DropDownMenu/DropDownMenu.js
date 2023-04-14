import React from 'react';
import styles from "./DropDownMenu.module.css";
import DropItem from "./DropItem";
import {onSetDropDownMenu} from "../../../redux/action-creators/DropDownMenu";
import {useDispatch} from "react-redux";

const DropDownMenu = ({items, category}) => {

    const dispatch = useDispatch();

    return (
        <div className={styles.mainDiv}
             onMouseOver={() => dispatch(onSetDropDownMenu(category))}
             onMouseOut={() => dispatch(onSetDropDownMenu(""))}
        >
            <div className={styles.subDiv}>
                {
                    items.categories.map((el, index) =>

                    <div  key={index}>
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