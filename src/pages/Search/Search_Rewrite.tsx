import React from 'react';
import {DropMenuList, linkType} from "../../components/Header/HeaderLinks/ElementList_DropDownMenu";
import {Gender} from "../../redux/action-types";

const SearchRewrite = () => {

    function findSearchResults() {
        let uniqueMasOfTitles: string[] = [];
        let uniqueMasOfSubCategories = [];
        for (let i = 0; i < DropMenuList.length; i++) {
            for (let j = 0; j < DropMenuList[i].clothList.length; j++) {
                uniqueMasOfTitles.push(DropMenuList[i].clothList[j].title);
                for (let k = 0; k < DropMenuList[i].clothList[j].categories.length; k++) {
                    uniqueMasOfTitles.push(DropMenuList[i].clothList[j].categories[k].name);
                    uniqueMasOfSubCategories.push(DropMenuList[i].clothList[j].categories[k]);
                }
            }
        }
        console.log(uniqueMasOfTitles);
    }

    findSearchResults();


    // function findSearchResults() {
    //     let uniqueMasOfTitles = [];
    //     let uniqueMasOfSubCategories = [];
    //     for (let i = 0; i < DropMenuList.length; i++) {
    //         for (let j = 0; j < DropMenuList[i].clothList.length; j++) {
    //             uniqueMasOfTitles.push(DropMenuList[i].clothList[j].title);
    //             for (let k = 0; k < DropMenuList[i].clothList[j].categories.length; k++) {
    //                 uniqueMasOfTitles.push(DropMenuList[i].clothList[j].categories[k].name);
    //                 uniqueMasOfSubCategories.push(DropMenuList[i].clothList[j].categories[k]);
    //             }
    //         }
    //     }
    //     uniqueMasOfTitles = uniqueMasOfTitles.filter((x, i, a) => a.indexOf(x) === i);
    //     // uniqueMasOfTitles = uniqueMasOfTitles.map(el => el.replace("_", " "));
    //     uniqueMasOfTitles = uniqueMasOfTitles.map(el => el.replace("\n", "").replace("-", " ").replace(",", "").replace("_", " "));
    //     // uniqueMasOfTitles = uniqueMasOfTitles.map(el => el
    //     //     .split("_").join(" ")
    //     //     .split("\n").join(" ")
    //     //     .split("-").join(" "));
    //     setSearchOptions(uniqueMasOfTitles);
    //
    //     uniqueMasOfSubCategories = uniqueMasOfSubCategories.filter(el => el.name.toLowerCase().includes(searchValue.toLowerCase()));
    //     let linkMas: linkType[] = uniqueMasOfSubCategories.map(el => el.link);
    //     linkMas = linkMas.filter((x, i, a) => a.indexOf(x) === i);
    //
    //     const masBySubCategories = linkMas.map(el => ClothesService.getClothesByCategory(el, genderOfLink as Gender || "all"));
    //     uniqueMasOfSubCategories = masBySubCategories.map((item) => item)
    //         .filter((name, index, currentVal) => currentVal.indexOf(name) === index);
    //
    //     let byName = ClothesService.getClothesByGenderAndSearchWorld(genderOfLink as Gender || "all", searchingValue as string);
    //     let bySubCategory = [];
    //     for (let i = 0; i < uniqueMasOfSubCategories.length; i++) {
    //         for (let j = 0; j < uniqueMasOfSubCategories[i].length; j++) {
    //             bySubCategory.push(uniqueMasOfSubCategories[i][j]);
    //         }
    //     }
    //     let searchResults = [...bySubCategory, ...byName];
    //     searchResults = searchResults
    //         .filter((name, index, currentVal) => currentVal.indexOf(name) === index);
    //     searchResults = searchResults
    //         .sort(function (a, b) {
    //             return b.id - a.id;
    //         })
    //
    //     if (searchingValue === "all") {
    //         let allElements = ClothesService.getAllByGender(genderOfLink as Gender | "all");
    //         allElements &&
    //         setActualMas(allElements);
    //     } else {
    //         setActualMas(searchResults);
    //     }
    // }


    return (
        <div>

        </div>
    );
};

export default SearchRewrite;