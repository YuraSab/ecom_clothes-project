import React, {FC, useEffect, useState} from 'react';
import {linkType} from "../../../components/Header/BottomHeaderMenu/ElementList_DropDownMenu";
import {clothesService} from "../../../services/ClothesService";
import {Cloth} from "../../../db/clothes-db";
import styles from "./CategoryList.module.css";
import CategoryItem from "../ListItem/CategoryItem";
import {useLocation} from "react-router-dom";

export type CategoryList_PropsType = {
    category: linkType[] | linkType;
    name: string | string[];
}

const CategoryList: FC<CategoryList_PropsType> = ({category, name}) => {

    const ClothesService = clothesService;
    const [clothesList, setClothesList] = useState<Cloth[]>([]);

    const location = useLocation();
    const actualGender = location.pathname.includes('female') ? "female" : "male";

    useEffect(() => {
        if (Array.isArray(category)) {
            let clothesList: Cloth[] = ClothesService.getClothesByCategories(category, actualGender);
            setClothesList(clothesList);
        } else {
            let clothesList: Cloth[] = ClothesService.getClothesByCategory(category, actualGender);
            setClothesList(clothesList);
        }
    }, [])

    return (
        <div className={styles.main}>
            <div className={styles.contentBlock}>

                <div className={styles.pathBlock}>
                    <div className={styles.caption}>
                        {name}
                    </div>
                    <div className={styles.pathList}>
                        <span>
                            Магазин
                            <span style={{padding: 10}}>&mdash;&mdash;</span>
                        </span>
                        <span>
                            {actualGender === "male" ? "Для хлопцв" : "Для дівчат"}
                            <span style={{padding: 10}}>&mdash;&mdash;</span>
                        </span>
                        <span style={{color: "black"}}>
                            {name}
                        </span>
                    </div>
                </div>

                <div className={styles.list}>
                    {
                        clothesList.map(el => <CategoryItem key={el.id} item={el}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CategoryList;