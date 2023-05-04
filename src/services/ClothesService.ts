import {Cloth, clothes} from "../db/clothes-db";
import {linkType} from "../components/Header/BottomHeaderMenu/ElementList_DropDownMenu";

class ClothesService {
    // url on db
    // categoryURL = "";


    // todo - make fetch/axios request when will be created db
    getClothesByCategory(category: linkType, gender: "male" | "female") {
        // this will be renewed
        return clothes
            .filter(el => el.gender === gender)
            .filter(el => el.subcategory === category);
    }

    getClothesByCategories(category: linkType[], gender: "male" | "female") {
        // this will be renewed
        let clothesMas: Cloth[] = [];
        const genderFilter = clothes.filter(el => el.gender === gender);
        for (let i = 0; i < category.length; i++) {
            let oneOfCategoryList = genderFilter.filter(el => el.subcategory === category[i]);
            oneOfCategoryList.forEach(el => clothesMas.push(el));
        }
        return clothesMas;
    }

}

export const clothesService = new ClothesService();