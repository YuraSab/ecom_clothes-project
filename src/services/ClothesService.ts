import {Cloth, clothes} from "../db/clothes-db";
import {linkType} from "../components/Header/HeaderLinks/ElementList_DropDownMenu";
import {Gender} from "../redux/action-types";
import {clothes_description} from "../db/cloth-descroptions";

class ClothesService {
    // url on db
    // categoryURL = "";

    getAllByGender(gender: Gender | "all") {
        if (gender === "male" || "female") {
            return clothes.filter(el => el.gender === gender);
        }
        return clothes;
    }

    getClothesByCategory(category: linkType, gender: Gender | "all") {
        if (gender === "male" || "female") {
            return clothes
                .filter(el => el.gender === gender)
                .filter(el => el.subcategory === category);
        }
        return clothes.filter(el => el.subcategory === category);
    }

    getClothesByCategories(category: linkType[], gender: Gender) {
        const clothesMas: Cloth[] = [];
        const genderFilter = clothes.filter(el => el.gender === gender);
        for(const el of category){
                let oneOfCategoryList = genderFilter.filter(el => el.subcategory === el.category);
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

    getNewest(gender: Gender) {
        const byGender: Cloth[] = clothes.filter(el => el.gender === gender);
        return byGender.sort((a, b) => b.id - a.id);
    }
}

export const clothesService = new ClothesService();