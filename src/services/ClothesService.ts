import {Cloth, clothes} from "../db/clothes-db";
import {linkType} from "../components/Header/BottomHeaderMenu/ElementList_DropDownMenu";
import {Gender} from "../redux/action-types";
import {clothes_description} from "../db/cloth-descroptions";


class ClothesService {
    // url on db
    // categoryURL = "";


    // todo - make fetch/axios request when will be created db
    getClothesByCategory(category: linkType, gender: Gender) {
        // this will be renewed
        return clothes
            .filter(el => el.gender === gender)
            .filter(el => el.subcategory === category);
    }

    getClothesByCategories(category: linkType[], gender: Gender) {
        // this will be renewed
        let clothesMas: Cloth[] = [];
        const genderFilter = clothes.filter(el => el.gender === gender);
        for (let i = 0; i < category.length; i++) {
            let oneOfCategoryList = genderFilter.filter(el => el.subcategory === category[i]);
            oneOfCategoryList.forEach(el => clothesMas.push(el));
        }
        return clothesMas;
    }


    getClothesById(id: number) {
        return clothes.find(el => el.id === id);
    }
    getClothesDetailsById(id: number) {
        return clothes_description.find(el => el.clothes_id === id);
    }
}

export const clothesService = new ClothesService();