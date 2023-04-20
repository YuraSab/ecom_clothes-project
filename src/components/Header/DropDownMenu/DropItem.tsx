import React, {FC} from 'react';
import styles from "./DropDownMenu.module.css";

type myList_categories_Type = {
    name: string,
    link: string,
    type: string,
};
// ({el}: { el: any })
const DropItem: FC = ({el}: myList_categories_Type) => {

    function replaceWithBr() {
        return el.name.replace(/\n/g, "<br />")
    }

    return (
        <div className={el.type === "category" ? styles.category : styles.subCategory} dangerouslySetInnerHTML={{__html: replaceWithBr()}}></div>
    );
};

export default DropItem;