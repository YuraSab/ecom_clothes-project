import React, {FC, useEffect, useState} from 'react';
// import styles from "../../components/Header/SearchBarOverlay/SeacrhBarOverlay.module.css";
import DownIcon from "../../assets/icons/down.png";
import {Link} from "react-router-dom";
import LoopIcon from "../../assets/icons/loop_black.png";
import {DropMenuList} from "../../components/Header/HeaderLinks/ElementList_DropDownMenu";
import {genderValue_type} from "../../pages/Search/Search";

type SearchUI_props = {
    setOnSearching: (value: boolean) => void;
    styles: any;
    setOnSetGenderActive: (value: boolean) => void;
    setGenderValue: (value: genderValue_type) => void;
    setSearchValue: (value: string) => void;
    setSearchResults: (value: string[]) => void;
    setSearchOptions: (value: string[]) => void;
    onSetGenderActive: boolean;
    genderValue: genderValue_type;
    searchValue: string
    searchResults: string[],
    searchOptions: string[],
    findSearchResults: () => void;
}

const SearchUI: FC<SearchUI_props> = ({
                                          setOnSearching,
                                          styles,
                                          setOnSetGenderActive,
                                          setGenderValue,
                                          setSearchValue,
                                          setSearchResults,
                                          setSearchOptions,
                                          onSetGenderActive,
                                          genderValue,
                                          searchValue,
                                          searchResults,
                                          searchOptions,
                                          findSearchResults,
                                      }) => {

    // const [onSetGenderActive, setOnSetGenderActive] = useState<boolean>(false);
    // const [genderValue, setGenderValue] = useState<genderValue_type>({name: "Для всіх", link: "all"});
    // const [searchValue, setSearchValue] = useState<string>("");
    // const [searchResults, setSearchResults] = useState<string[]>([]);
    // const [searchOptions, setSearchOptions] = useState<string[]>([]);


    // useEffect(() => {
    //     findSearchResults();
    // }, []);
    //
    // useEffect(() => {
    //     const lower = searchOptions?.map(el => el.toLowerCase());
    //     const result = lower?.filter(el => el.includes(searchValue.toLowerCase()));
    //     setSearchResults(result);
    // }, [searchValue]);




    return (
        <div className={styles.parentDiv}>
            <div className={styles.searchArea}>
                <div
                    className={`${styles.passiveOption} ${styles.optionText}`}
                    // @ts-ignore
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
                    <Link to={`/search/${genderValue.link}/${searchValue === "" ? "all" : searchValue}`}>
                        <img src={LoopIcon} alt={"search"}
                             width={33} height={33}
                             onClick={() => {
                                 setOnSearching(false);
                                 setSearchResults([]);
                             }}
                        />
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

export default SearchUI;