import React, {FC, useEffect, useState} from 'react';
import styles from "./SeacrhBarOverlay.module.css";
import Cross from "../../assets/icons/cross_icon.png";
import DownIcon from "../../assets/icons/down.png";
import LoopIcon from "../../assets/icons/loop_black.png";
import {DropMenuList} from "../../components/Header/HeaderLinks/ElementList_DropDownMenu";
import {Link} from "react-router-dom";

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
            <div className={styles.searchArea}>
                <div
                    className={`${styles.passiveOption} ${styles.optionText}`}
                    onClick={() => setOnSetGenderActive(prevState => !prevState)}
                >
                    <span>{genderValue.name}</span>
                    <img src={DownIcon} alt={"more options"} width={14} height={14}/>
                </div>

                <div className={styles.searchInput}>
                    <input
                        type={"text"}
                        placeholder={"Введіть текст для пошуку"}
                        onChange={(event) => setSearchValue(event.target.value)}
                    />
                </div>

                <div className={styles.searchLoop}>
                    <Link to={`/search/${genderValue.link}/${searchValue}`}>
                        <img src={LoopIcon} alt={"search"} width={33} height={33}
                             onClick={() => setOnSearching(false)}/>
                    </Link>
                </div>
            </div>
            <div className={styles.genderOptions}>
                <div className={styles.overlayForGenderOptions}>
                    {
                        onSetGenderActive &&
                        <>
                            <div
                                onClick={() => {
                                    setOnSetGenderActive(false);
                                    setGenderValue({name: "Для хлопців", link: "male"});
                                }}
                                className={`${styles.oneOption} ${styles.optionText}`}
                            >
                                Для хлопців
                            </div>
                            <div
                                onClick={() => {
                                    setOnSetGenderActive(false);
                                    setGenderValue({name: "Для дівчат", link: "female"});
                                }}
                                className={`${styles.oneOption} ${styles.optionText}`}
                            >
                                Для дівчат
                            </div>
                        </>
                    }
                </div>
                <div className={styles.searchOptions}>
                    {
                        searchResults.length > 0 && searchValue !== "" &&
                        searchResults
                            .map((el, index) => {
                                    return (
                                        index < 9 &&
                                        <Link
                                            to={`/search/${genderValue.link}/${el}`} key={el}
                                            style={{textDecoration: "none", color: "black"}}>
                                            <div className={styles.searchOptionItem} onClick={() => setOnSearching(false)}>
                                                <img src={LoopIcon} alt={"search"} width={16} height={16}/>
                                                {el}
                                            </div>
                                        </Link>
                                    )
                                }
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default SearchBarOverLay;