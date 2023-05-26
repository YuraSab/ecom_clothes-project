import React, {FC, useEffect, useState} from 'react';
import {linkType} from "../../../../components/Header/HeaderLinks/ElementList_DropDownMenu";
import {clothesService} from "../../../../services/ClothesService";
import {Cloth} from "../../../../db/clothes-db";
import styles from "./CategoryList.module.css";
import CategoryItem from "../../ListItem/CategoryItem";
import {useLocation} from "react-router-dom";
import "./Slider.css";
import SettingsIcon from "../../../../assets/icons/settings.png";
import CrossIcon from "../../../../assets/icons/cross_svg_icon.svg";
import ReactSliderElement from "../Filter-Sort_elelments/ReactSliderElement";
import PriceInputMinimal from "../Filter-Sort_elelments/PriceInputElement";

export type CategoryList_PropsType = {
    category: linkType[] | linkType;
    name: string | string[];
}
type SliderValue = { min: number, max: number };
type SortValue = "" | "lower-price" | "higher-price" | "newer" | "older" | "discount" | string;

const CategoryList: FC<CategoryList_PropsType> = ({category, name}) => {

    const ClothesService = clothesService;
    const [clothesList, setClothesList] = useState<Cloth[]>([]);

    const location = useLocation();
    const actualGender = location.pathname.includes('female') ? "female" : "male";

    // start min and max values
    const [minMax, setMinMax] = useState<SliderValue>({min: 0, max: 100});
    // value that typing in input
    const [inputMinMax, setInputMinMax] = useState<SliderValue>({min: 0, max: 100});
    // actual price - before applying filters and after
    const [price, setPrice] = useState<SliderValue>({min: 0, max: 100});

    // for tracking changes (both needed)
    const [inputActive, setInputActive] = useState<boolean>(false);
    const [filters, setFilters] = useState<boolean>(false);

    const [sortActive, setSortActive] = useState<boolean>(false);
    const [sort, setSort] = useState<SortValue>("");

    const [mobileSortActive, setMobileSortActive] = useState<boolean>(false);
    const [mobileFiltersActive, setMobileFiltersActive] = useState<boolean>(false);

    // track window wide changes
    const [windowWidth, setWindowWidth] = useState<number>(0);

    const sortVariants = [
        {title: "від дешевших до дорощих", value: "lower-price"},
        {title: "від дорогих до дешевших", value: "higher-price"},
        {title: "спочатку нові", value: "newer"},
        {title: "сочатку старі", value: "older"},
        {title: "спочатку зі знижками", value: "discount"},
    ];


    useEffect(() => {
        let minimal;
        let maximal;
        let clothesList: Cloth[];
        if (Array.isArray(category)) {
            clothesList = ClothesService.getClothesByCategories(category, actualGender);
        } else {
            clothesList = ClothesService.getClothesByCategory(category, actualGender);
        }
        minimal = Math.min(...clothesList.map(el => el.price));
        maximal = Math.max(...clothesList.map(el => el.price));
        setMinMax({min: minimal, max: maximal});
        setPrice({min: minimal, max: maximal});
        setInputMinMax({min: minimal, max: maximal});
        setClothesList(clothesList);
    }, [category, sort]);


    useEffect(() => {
        const trackWindowWidth = () => {
            setWindowWidth(document.body.clientWidth);
        };
        window.addEventListener("resize", trackWindowWidth)

        return (() => {
            window.removeEventListener("resize", trackWindowWidth);
        })
    }, []);


    useEffect(() => {
        // todo - useEffect setting filters to localStorage, when location changes - filters cleanings
        let sortedClothesList;
        if (clothesList.length > 0 && sort === "" || sort === "newer" || sort === "discount") {
            sortedClothesList = clothesList.sort(function (a, b) {
                return a.id - b.id;
            });
            setClothesList(sortedClothesList);
        }
        if (sort === "older") {
            sortedClothesList = clothesList.sort(function (a, b) {
                return b.id - a.id;
            });
            setClothesList(sortedClothesList);
        }
        if (sort === "higher-price") {
            sortedClothesList = clothesList.sort(function (a, b) {
                return b.price - a.price;
            });
            setClothesList(sortedClothesList);
        }
        if (sort === "lower-price") {
            sortedClothesList = clothesList.sort(function (a, b) {
                return a.price - b.price;
            });
            setClothesList(sortedClothesList);
        }
    }, [sort]);


    let filterCondition = price.min === minMax.min && price.max === minMax.max;

    const onBlur = () => {
        if (inputMinMax.min >= minMax.min && inputMinMax.min <= minMax.max
            && inputMinMax.max >= minMax.min && inputMinMax.max <= minMax.max
        ) {
            setFilters(true)
            setPrice({
                min: inputMinMax.min,
                max: inputMinMax.max
            })
        } else {
            setFilters(false)
            setInputMinMax({
                min: price.min,
                max: price.max
            })
        }
        setInputActive(false);
    };


    const applyFilters = () => {
        if (!filterCondition) {
            setFilters(true);
            let filteredMas;
            if (Array.isArray(category)) {
                filteredMas = ClothesService.getClothesByCategories(category, actualGender);
            } else {
                filteredMas = ClothesService.getClothesByCategory(category, actualGender);
            }
            filteredMas = filteredMas.filter(el => el.price >= price.min && el.price <= price.max);
            setClothesList(filteredMas);
        }
    }

    const dropFilters = () => {
        if (filters) {
            setPrice({min: minMax.min, max: minMax.max});
            setFilters(false);
            setInputActive(false)
            if (Array.isArray(category)) {
                let clothesList: Cloth[] = ClothesService.getClothesByCategories(category, actualGender);
                setClothesList(clothesList);
            } else {
                let clothesList: Cloth[] = ClothesService.getClothesByCategory(category, actualGender);
                setClothesList(clothesList);
            }
        }
    }

    const onSetOverFlow = (value: "auto" | "hidden") => {
        document.body.style.overflow = value;
    }


    return (

        <div className={styles.main}>
            <div className={styles.contentBlock}>

                <div className={styles.pathBlock}>
                    <div className={styles.caption}>
                        {name}
                    </div>
                    <div className={styles.pathList}>
                        <span>
                            Магазин
                            <span style={{padding: 10}}>&mdash;&mdash;</span>
                        </span>
                        <span>
                            {actualGender === "male" ? "Для хлопцв" : "Для дівчат"}
                            <span style={{padding: 10}}>&mdash;&mdash;</span>
                        </span>
                        <span style={{color: "black"}}>
                            {name}
                        </span>
                    </div>
                </div>

                {
                    window.innerWidth >= 770 ?
                        <div className={styles.filterSortBar}>

                            <div className={styles.priceBlock}>
                                <label className={styles.priceTitle}>
                                    ЦІНА
                                </label>
                                <div>
                                    {
                                        clothesList &&
                                        <ReactSliderElement
                                            price={price}
                                            minMax={minMax}
                                            setFilters={setFilters}
                                            setPrice={setPrice}
                                        />
                                    }
                                </div>
                                <div style={{display: "flex", justifyContent: "space-between"}}>
                                    <div>
                                        <span className={styles.fromTo}>від:</span>
                                        <PriceInputMinimal
                                            typeOfInput={"min"}
                                            inputActive={inputActive}
                                            inputMinMax={inputMinMax}
                                            setInputActive={setInputActive}
                                            setInputMinMax={setInputMinMax}
                                            price={price}
                                            onBlur={onBlur}
                                        />
                                    </div>
                                    <div>
                                        <span className={styles.fromTo}>до:</span>
                                        <PriceInputMinimal
                                            typeOfInput={"max"}
                                            inputActive={inputActive}
                                            inputMinMax={inputMinMax}
                                            setInputActive={setInputActive}
                                            setInputMinMax={setInputMinMax}
                                            price={price}
                                            onBlur={onBlur}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={styles.sizeBlock}>
                                <div className={styles.title}>Розмір</div>
                            </div>

                            <div className={styles.applyBlock}>
                                <div className={styles.apply} onClick={() => applyFilters()}>
                                    <img src={SettingsIcon} alt={"apply filters"} height={25}/>
                                    <div
                                        className={styles.applyTitle}
                                        style={{color: filterCondition ? "grey" : "black"}}
                                    >
                                        ЗАСТОСУВАТИ
                                    </div>
                                </div>
                                <div className={styles.unset}
                                     onClick={() => dropFilters()}
                                     style={{color: filterCondition ? "grey" : "black"}}
                                >
                                    скинути фільтр
                                </div>
                            </div>

                            <div className={styles.sortBlock}>
                                <div className={styles.sort} style={{
                                    background: sortActive ? "white" : "none",
                                    height: sortActive ? 322 : 60,
                                    boxShadow: sortActive ? "0 5px 28px 3px rgba(0,0,0,.3)" : "none",
                                }}>
                                    <div className={styles.sortTitle}
                                         style={{
                                             background: sortActive ? "white" : "none",
                                             borderBottom: sortActive ? "none" : "2px solid #dfddda",
                                         }}
                                         onClick={() => setSortActive(true)}
                                    >
                                        Сортування
                                        {
                                            sortActive &&
                                            <img src={CrossIcon}
                                                 alt={"close"} height={15}
                                                 onClick={(event) => {
                                                     event.stopPropagation();
                                                     setSortActive(false)
                                                 }}
                                            />
                                        }
                                    </div>
                                    {sortActive &&
                                        <div className={styles.sortList}
                                             style={{background: sortActive ? "white" : "none"}}
                                        >
                                            {
                                                sortVariants.map(el => <div
                                                    className={styles.sortItem}
                                                    onClick={() => {
                                                        setSort(el.value)
                                                        dropFilters()
                                                    }}
                                                    key={el.value}
                                                >{el.title}</div>)
                                            }
                                        </div>
                                    }
                                </div>
                                <div className={styles.unset}>{sort === "" ? "спочатку нові" : sortVariants.find(el => el.value === sort)?.title}</div>
                            </div>
                        </div>

                        :

                        <div className={styles.filterSortBar_mobile}>
                            <div className={styles.filterSortButtons_mobile}
                                 style={{borderRight: "1px #999 solid"}}
                                 onClick={() => {
                                     setMobileFiltersActive(true)
                                     onSetOverFlow("hidden")
                                 }}
                            >
                                фільтрувати
                            </div>
                            <div className={styles.filterSortButtons_mobile}
                                 onClick={() => {
                                     setMobileSortActive(true);
                                     onSetOverFlow("hidden");
                                 }}
                            >
                                сортувати
                            </div>

                            {
                                mobileFiltersActive &&
                                <div className={styles.overlay}>
                                    <div className={styles.mobileFilterBlock}>

                                        <div className={styles.title_cross_block}>
                                            <div>фільтр</div>
                                            <img src={CrossIcon} alt={"close"} height={14}
                                                 onClick={() => {
                                                     setMobileFiltersActive(false);
                                                     onSetOverFlow("auto")
                                                 }}
                                            />
                                        </div>

                                        <div style={{display: "flex"}}>
                                            <div className={styles.priceBlock}>
                                                <label className={styles.priceTitle}>
                                                    ЦІНА
                                                </label>
                                                <div>
                                                    {clothesList.length > 0 &&
                                                        <ReactSliderElement
                                                            price={price}
                                                            minMax={minMax}
                                                            setFilters={setFilters}
                                                            setPrice={setPrice}
                                                        />
                                                    }
                                                </div>
                                                <div style={{display: "flex", justifyContent: "space-between"}}>
                                                    <div>
                                                        <span className={styles.fromTo}>від:</span>
                                                        <PriceInputMinimal
                                                            typeOfInput={"min"}
                                                            inputActive={inputActive}
                                                            inputMinMax={inputMinMax}
                                                            setInputActive={setInputActive}
                                                            setInputMinMax={setInputMinMax}
                                                            price={price}
                                                            onBlur={onBlur}
                                                        />
                                                    </div>
                                                    <div>
                                                        <span className={styles.fromTo}>до:</span>
                                                        <PriceInputMinimal
                                                            typeOfInput={"max"}
                                                            inputActive={inputActive}
                                                            inputMinMax={inputMinMax}
                                                            setInputActive={setInputActive}
                                                            setInputMinMax={setInputMinMax}
                                                            price={price}
                                                            onBlur={onBlur}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={styles.sizeBlock}>
                                                <div className={styles.title}>Розмір</div>
                                            </div>
                                        </div>

                                        <div className={styles.applyBlock}>
                                            <div className={styles.apply}
                                                 onClick={() => applyFilters()}
                                            >
                                                <img src={SettingsIcon} alt={"apply filters"} height={25}/>
                                                <div
                                                    className={styles.applyTitle}
                                                    style={{color: filterCondition ? "grey" : "black"}}
                                                >
                                                    ЗАСТОСУВАТИ
                                                </div>
                                            </div>
                                            <div className={styles.unset}
                                                 onClick={() => dropFilters()}
                                                 style={{color: filterCondition ? "grey" : "black"}}
                                            >
                                                скинути фільтр
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            }
                            {
                                mobileSortActive &&
                                <div className={styles.overlay}>
                                    <div className={styles.mobileFilterBlock}
                                         style={{height: 170}}
                                    >

                                        <div className={styles.title_cross_block}>
                                            <div>
                                                сортувати
                                            </div>
                                            <img src={CrossIcon} alt={"close"} height={14}
                                                 onClick={() => {
                                                     setMobileSortActive(false);
                                                     onSetOverFlow("auto")
                                                 }}/>
                                        </div>


                                        <div className={styles.sortBlock}>
                                            <div className={styles.sort} style={{
                                                background: sortActive ? "white" : "none",
                                                height: sortActive ? 322 : 60,
                                                boxShadow: sortActive ? "0 5px 28px 3px rgba(0,0,0,.3)" : "none",
                                            }}>
                                                <div className={styles.sortTitle}
                                                     style={{
                                                         background: sortActive ? "white" : "none",
                                                         borderBottom: sortActive ? "none" : "2px solid #dfddda",
                                                     }}
                                                     onClick={() => setSortActive(true)}
                                                >
                                                    Сортування
                                                    {
                                                        sortActive &&
                                                        <div onClick={(event) => {
                                                            event.stopPropagation();
                                                            setSortActive(false)
                                                        }}>
                                                            <img src={CrossIcon} alt={"close"} height={15}/>

                                                        </div>
                                                    }
                                                </div>
                                                {sortActive &&
                                                    <div className={styles.sortList}
                                                         style={{background: sortActive ? "white" : "none"}}
                                                    >
                                                        {
                                                            sortVariants.map(el => <div
                                                                className={styles.sortItem}
                                                                onClick={() => {
                                                                    setSort(el.value)
                                                                    dropFilters()
                                                                }}
                                                                key={el.value}
                                                            >{el.title}</div>)
                                                        }
                                                    </div>
                                                }
                                            </div>
                                            <div className={styles.unset}>{sort === "" ? "спочатку нові" : sortVariants.find(el => el.value === sort)?.title}</div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                }

                <div className={styles.list}>
                    {
                        clothesList.length > 0 &&
                        clothesList.map(el => <CategoryItem key={el.id} item={el}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CategoryList;