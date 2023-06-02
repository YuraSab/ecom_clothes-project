import {Cloth, clothes} from "../db/clothes-db";
import {linkType} from "../components/Header/HeaderLinks/ElementList_DropDownMenu";
import {Gender} from "../redux/action-types";
import {clothes_description} from "../db/cloth-descroptions";

class ClothesService {
    // url on db
    // categoryURL = "";

    getAllByGender(gender: Gender | "all") {
        // this will be renewed
        if (gender === "male" || gender === "female") {
            return clothes
                .filter(el => el.gender === gender);
        } else if(gender === "all"){
            return clothes;
        }

    }

    // todo - make fetch/axios request when will be created db
    getClothesByCategory(category: linkType, gender: Gender | "all") {
        // this will be renewed
        if (gender === "male" || "female") {
            return clothes
                .filter(el => el.gender === gender)
                .filter(el => el.subcategory === category);
        } else {
            return clothes
                .filter(el => el.subcategory === category);
        }
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

    getClothesByGenderAndSearchWorld(gender: Gender | "all", searchWord: string) {
        let byGender: Cloth[];
        if (gender === "male" || gender === "female") {
            byGender = clothes.filter(el => el.gender === gender);
        } else {
            byGender = clothes;
        }
        return byGender.filter(el => el.name.includes(searchWord));
    }
}

export const clothesService = new ClothesService();