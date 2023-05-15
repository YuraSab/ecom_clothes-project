import React, {FC} from 'react';
import {Cloth} from "../../../db/clothes-db";
import styles from "./CategoryItem.module.css";

type CategoryItem_propsType = {
    item: Cloth;
}

const CategoryItem: FC<CategoryItem_propsType> = ({item}) => {

    return (
        <div className={styles.main}>
            <div>
                <img src={item.photo}
                     alt={item.name}
                     width={"100%"}
                />
            </div>
            <div>{item.name}</div>
            <div><b>{item.price} грн.</b></div>
        </div>
    );
};

export default CategoryItem;