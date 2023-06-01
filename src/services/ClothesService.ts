import {Cloth, clothes} from "../db/clothes-db";
import {DropMenuList, linkType} from "../components/Header/HeaderLinks/ElementList_DropDownMenu";
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


    // getClothesByGenderAndSearchWorld(gender: Gender | "all", searchWord: string, categories: linkType[]) {
    //     let byGender: Cloth[];
    //     if(gender === "male" || gender === "female") {
    //         byGender = clothes.filter(el => el.gender === gender)
    //     } else {
    //         byGender = clothes;
    //     }
    //
    //     let byGenderAndName: Cloth[] = byGender.filter(el => el.name.includes(searchWord));
    //
    //     let byGenderAndCategory: Cloth[];
    //     for(let i = 0; i < categories.length; i++) {
    //         let uniqueMas: linkType[];
    //         for (let i = 0; i < DropMenuList.length; i++) {
    //             for (let j = 0; j < DropMenuList[i].clothList.length; j++) {
    //                 for (let k = 0; k < DropMenuList[i].clothList[j].categories.length; k++) {
    //                     let link = DropMenuList[i].clothList[j].categories[k].name;
    //                     // @ts-ignore
    //                     let isProper = link.includes(searchWord);
    //                     if (isProper) {
    //                         uniqueMas.push(DropMenuList[i].clothList[j].categories[k].link);
    //                     }
    //                 }
    //             }
    //         }
    //         // let isProper = byGender.filter(el => el.subcategory === )
    //     }
    //
    //
    //
    //     // return byGender.filter(el => el.name.includes(searchWord));
    // }


    getClothesByGenderAndSearchWorld(gender: Gender | "all", searchWord: string) {
        let byGender: Cloth[];
        if(gender === "male" || gender === "female") {
            byGender = clothes.filter(el => el.gender === gender);
        } else {
            byGender = clothes;
        }
        return byGender.filter(el => el.name.includes(searchWord));
    }

//    let uniqueMas = [];
//         if (searchingValue !== "all") {
//             for (let i = 0; i < DropMenuList.length; i++) {
//                 for (let j = 0; j < DropMenuList[i].clothList.length; j++) {
//                     for (let k = 0; k < DropMenuList[i].clothList[j].categories.length; k++) {
//                         let name = DropMenuList[i].clothList[j].categories[k].name;
//                         // @ts-ignore
//                         let isProper = name.includes(searchingValue);
//                         if (isProper) {
//                             uniqueMas.push(DropMenuList[i].clothList[j].categories[k].link);
//                         }
//                     }
//                 }
//             }
//         }
}

export const clothesService = new ClothesService();