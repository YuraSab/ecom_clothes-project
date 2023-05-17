import React, {FC} from 'react';
import {Cloth} from "../../../db/clothes-db";
import styles from "./CategoryItem.module.css";
import {Link} from "react-router-dom";
import {useTypedSelector} from "../../../hooks/redux/useTypedSelector";

type CategoryItem_propsType = {
    item: Cloth;
}

const CategoryItem: FC<CategoryItem_propsType> = ({item}) => {
    const {gender} = useTypedSelector(state => state.headerState);

    return (
        <Link to={`/${gender}/${item.id}`} style={{textDecoration: "none", color: "black"}}>
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
        </Link>
    );
};

export default CategoryItem;