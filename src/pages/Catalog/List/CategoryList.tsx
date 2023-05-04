import React, {FC, useEffect, useState} from 'react';
import {linkType} from "../../../components/Header/BottomHeaderMenu/ElementList_DropDownMenu";
import {clothesService} from "../../../services/ClothesService";
import {Cloth} from "../../../db/clothes-db";
import {useTypedSelector} from "../../../hooks/redux/useTypedSelector";

export type CategoryList_PropsType = {
    category: linkType[] | linkType
}

const CategoryList: FC<CategoryList_PropsType> = ({category}) => {


    const {gender} = useTypedSelector(state => state.headerState);
    const ClothesService = clothesService;
    const [clothesList, setClothesList] = useState<Cloth[]>([]);
    const trueGender = gender === "female" ? "female" : "male";

    useEffect(() => {
        if (Array.isArray(category)) {
            let clothesList: Cloth[] = ClothesService.getClothesByCategories(category, trueGender);
            setClothesList(clothesList);
        } else {
            let clothesList: Cloth[] = ClothesService.getClothesByCategory(category, trueGender);
            setClothesList(clothesList);
        }
    }, [])

    return (
        <div>
            {
                clothesList.map(el => <div key={el.id}>{el.name}</div>)
            }
        </div>
    );
};

export default CategoryList;