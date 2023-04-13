import React from 'react';
import styles from "./DropDownMenu.module.css";
import DropItem from "./DropItem";
import {useEffect, useState} from "react";

const DropDownMenu = ({items, category, setDropMenu}) => {

    const [myState, setMyState] = useState(category);
    // const [myState, setMyState] = useState("");


    useEffect(() => {
        setDropMenu(myState);
    }, [myState]);

    return (
        <div className={styles.mainDiv}
             onMouseOver={() => setMyState(category)}
             onMouseOut={() => setMyState("")}
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