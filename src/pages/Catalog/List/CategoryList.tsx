import React, {FC} from 'react';
import {linkType} from "../../../components/Header/BottomHeaderMenu/ElementList_DropDownMenu";

type CategoryList_PropsType = {
    category: linkType[] | linkType
}

const CategoryList: FC<CategoryList_PropsType> = ({category}) => {


    return (
        <div>
            {
                category &&

                Array.isArray(category) ?
                    category.map(el => <div key={el}>{el}</div>)
                    :
                    category
            }
        </div>
    );
};

export default CategoryList;