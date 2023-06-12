import React, {FC, useEffect, useState} from 'react';
import styles from "./SeacrhBarOverlay.module.css";
import Cross from "../../assets/icons/cross_icon.png";
import {DropMenuList} from "../../components/Header/HeaderLinks/ElementList_DropDownMenu";
import SearchUI from "../SearchUI/SearchUI";

type SearchBarOverLay_props = {
    setOnSearching: (value: boolean) => void;
}
type genderValue_type = {
    name: "Для всіх" | "Для хлопців" | "Для дівчат",
    link: "all" | "male" | "female",
}
const SearchBarOverLay: FC<SearchBarOverLay_props> = ({setOnSearching}) => {

    const [onSetGenderActive, setOnSetGenderActive] = useState<boolean>(false);
    const [genderValue, setGenderValue] = useState<genderValue_type>({name: "Для всіх", link: "all"});
    const [searchValue, setSearchValue] = useState<string>("");
    const [searchResults, setSearchResults] = useState<string[]>([]);
    const [searchOptions, setSearchOptions] = useState<string[]>([]);

    useEffect(() => {
        findSearchResults();
        document.body.style.overflowY = 'hidden';
        return (() => {
            document.body.style.overflowY = 'auto';
        })
    }, []);

    useEffect(() => {
        const lower = searchOptions?.map(el => el.toLowerCase());
        const result = lower?.filter(el => el.includes(searchValue.toLowerCase()));
        setSearchResults(result);
    }, [searchValue]);


    function findSearchResults() {
        let uniqueMas = [];
        for (let i = 0; i < DropMenuList.length; i++) {
            for (let j = 0; j < DropMenuList[i].clothList.length; j++) {
                uniqueMas.push(DropMenuList[i].clothList[j].title);
                for (let k = 0; k < DropMenuList[i].clothList[j].categories.length; k++) {
                    uniqueMas.push(DropMenuList[i].clothList[j].categories[k].name);
                }
            }
        }
        uniqueMas = uniqueMas.filter((x, i, a) => a.indexOf(x) === i);
        uniqueMas = uniqueMas.map(el => el.replace("\n", ""));
        setSearchOptions(uniqueMas)
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.titleAndCross}>
                <div>Пошук</div>
                <img
                    src={Cross}
                    alt={"close search"}
                    width={26} height={26}
                    onClick={() => setOnSearching(false)}
                />
            </div>

            <SearchUI
                setOnSetGenderActive={setOnSetGenderActive}
                setGenderValue={setGenderValue}
                setSearchValue={setSearchValue}
                setSearchResults={setSearchResults}
                onSetGenderActive={onSetGenderActive}
                genderValue={genderValue}
                searchValue={searchValue}
                searchResults={searchResults}
                setOnSearching={setOnSearching}
                styles={styles}
            />
        </div>
    );
};

export default SearchBarOverLay;