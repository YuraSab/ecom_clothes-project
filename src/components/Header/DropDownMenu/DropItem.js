import React from 'react';
import styles from "./DropDownMenu.module.css";

const DropItem = ({el}) => {

    function replaceWithBr() {
        return el.name.replace(/\n/g, "<br />")
    }

    return (
        <div className={el.type === "category" ? styles.category : styles.subCategory} dangerouslySetInnerHTML={{__html: replaceWithBr()}}></div>
    );
};

export default DropItem;