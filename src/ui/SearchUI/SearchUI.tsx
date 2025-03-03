import React, {FC} from 'react';
import DownIcon from "../../assets/icons/down_black_icon.png";
import {Link} from "react-router-dom";
import LoopIcon from "../../assets/icons/loop_black_icon.png";
import {genderValue_type} from "../../pages/Search/Search";

type SearchUI_props = {
    setOnSearching: (value: boolean) => void;
    styles: any;
    setOnSetGenderActive: (value: boolean) => void;
    setGenderValue: (value: genderValue_type) => void;
    setSearchValue: (value: string) => void;
    setSearchResults: (value: string[]) => void;
    // setSearchOptions: (value: string[]) => void;
    onSetGenderActive: boolean;
    genderValue: genderValue_type;
    searchValue: string
    searchResults: string[],
    // searchOptions: string[],
    // findSearchResults: () => void;
}

const SearchUI: FC<SearchUI_props> = ({
                                          setOnSearching,
                                          styles,
                                          setOnSetGenderActive,
                                          setGenderValue,
                                          setSearchValue,
                                          setSearchResults,
                                          // setSearchOptions,
                                          onSetGenderActive,
                                          genderValue,
                                          searchValue,
                                          searchResults,
                                          // searchOptions,
                                          // findSearchResults,
                                      }) => {


    return (
        <div className={styles.parentDiv}>

            <div className={styles.searchArea}>
                <div
                    className={`${styles.passiveOption} ${styles.optionText}`}
                    // @ts-ignore
                    onClick={() => setOnSetGenderActive(prevState => !prevState)}
                >
                    <span>
                        {/*{genderValue.name}*/}
                        {genderValue.name === "Для всіх" && "All"}
                        {genderValue.name === "Для хлопців" && "Male"}
                        {genderValue.name === "Для дівчат" && "Female"}
                    </span>
                    <img src={DownIcon} alt={"more options"} width={14} height={14}/>
                </div>

                <div className={styles.searchInput}>
                    <input
                        type={"text"}
                        // placeholder={"Введіть текст для пошуку"}
                        placeholder={"Enter text to search"}
                        value={searchValue}
                        onChange={(event) => setSearchValue(
                            event.target.value
                                .replace("\n", "")
                                .replace("-", "")
                                .replace(",", "")
                                .replace(" ", " ")
                        )}
                    />
                </div>

                <div className={styles.searchLoop}>
                    <Link to={`/search/${genderValue.link}/${searchValue === "" ? "all" : searchValue}`}>
                        <img src={LoopIcon} alt={"search"}
                             width={33} height={33}
                             onClick={() => {
                                 setOnSearching(false);
                                 setSearchResults([]);
                                 setOnSetGenderActive(false);
                             }}
                        />
                    </Link>
                </div>
            </div>


            <div className={styles.genderOptions}>

                <div className={styles.overlayForGenderOptions}>
                    {
                        onSetGenderActive &&
                        <div style={{position: "relative", borderRight: "1px solid #b3b3b3", borderBottom: "1px solid #b3b3b3"}}>
                            {/*<Link to={`/search/${genderValue.link}/${searchValue === "" ? "all" : searchValue}`}>*/}
                            <div
                                onClick={() => {
                                    setOnSetGenderActive(false);
                                    setGenderValue({name: "Для всіх", link: "all"});
                                }}
                                className={`${styles.oneOption} ${styles.optionText}`}
                            >
                                All
                            </div>
                            {/*</Link>*/}
                            {/*<Link to={`/search/${genderValue.link}/${searchValue === "" ? "all" : searchValue}`}>*/}
                            <div
                                onClick={() => {
                                    setOnSetGenderActive(false);
                                    setGenderValue({name: "Для хлопців", link: "male"});
                                    // setGenderValue({name: "Male", link: "male"});
                                }}
                                className={`${styles.oneOption} ${styles.optionText}`}
                            >
                                Male
                            </div>
                            {/*</Link>*/}
                            {/*<Link to={`/search/${genderValue.link}/${searchValue === "" ? "all" : searchValue}`}>*/}
                            <div
                                onClick={() => {
                                    setOnSetGenderActive(false);
                                    setGenderValue({name: "Для дівчат", link: "female"});
                                    // setGenderValue({name: "Female", link: "female"});
                                }}
                                className={`${styles.oneOption} ${styles.optionText}`}
                            >
                                Female
                            </div>
                            {/*</Link>*/}
                        </div>
                    }
                </div>

                {/*<div className={styles.searchOptions}>*/}
                {/*    {*/}
                {/*        searchResults.length > 0 && searchValue !== "" &&*/}
                {/*        searchResults.map((el, index) => {*/}
                {/*            return (*/}
                {/*                index < 9 &&*/}
                {/*                <Link*/}
                {/*                    to={`/search/${genderValue.link}/${el}`}*/}
                {/*                    key={el}*/}
                {/*                    style={{textDecoration: "none", color: "black"}}*/}
                {/*                    >*/}
                {/*                        <div className={styles.searchOptionItem}*/}
                {/*                             onClick={() => {*/}
                {/*                                 setOnSearching(false);*/}
                {/*                                 setOnSetGenderActive(false);*/}
                {/*                                 console.log("oj")*/}
                {/*                             }}*/}
                {/*                        >*/}
                {/*                            <img src={LoopIcon} alt={"search"} width={16} height={16}/>*/}
                {/*                            {el}*/}
                {/*                        </div>*/}
                {/*                    </Link>*/}
                {/*                )*/}
                {/*            }*/}
                {/*        )*/}
                {/*    }*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default SearchUI;