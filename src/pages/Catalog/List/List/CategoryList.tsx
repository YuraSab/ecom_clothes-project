import React, {FC, useEffect, useState} from 'react';
import {linkType} from "../../../../components/Header/HeaderLinks/ElementList_DropDownMenu";
import {clothesService} from "../../../../services/ClothesService";
import {Cloth} from "../../../../db/clothes-db";
import styles from "./CategoryList.module.css";
import CategoryItem from "../../ListItem/CategoryItem";
import {useLocation} from "react-router-dom";
import "./Slider.css";
import FilterSortBarDesktop from "../Filter-Sort_Bar/FilterSortBarDesktop";
import FilterSortBarMobile from "../Filter-Sort_Bar/FilterSortBarMobile";

export type CategoryList_PropsType = {
    category: linkType[] | linkType;
    name: string | string[];
}
export type SliderValue = { min: number, max: number };
export type SortValue = "" | "lower-price" | "higher-price" | "newer" | "older" | "discount" | string;
export type SortVariant = {title: string, value: SortValue};

const CategoryList: FC<CategoryList_PropsType> = ({category, name}) => {

    const ClothesService = clothesService;
    const location = useLocation();
    const actualGender = location.pathname.includes('female') ? "female" : "male";

    const [clothesList, setClothesList] = useState<Cloth[]>([]);
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
    const [showLikes, setShowLikes] = useState<boolean>(true);

    const sortVariants: SortVariant[] = [
        {title: "від дешевших до дорощих", value: "lower-price"},
        {title: "від дорогих до дешевших", value: "higher-price"},
        {title: "спочатку нові", value: "newer"},
        {title: "сочатку старі", value: "older"},
        {title: "спочатку зі знижками", value: "discount"},
    ];

    useEffect(() => {
        let clothesList: Cloth[];
        if (Array.isArray(category)) {
            clothesList = ClothesService.getClothesByCategories(category, actualGender);
        } else {
            clothesList = ClothesService.getClothesByCategory(category, actualGender);
        }
        let minimal = Math.min(...clothesList.map(el => el.price));
        let maximal = Math.max(...clothesList.map(el => el.price));
        setMinMax({min: minimal, max: maximal});
        setPrice({min: minimal, max: maximal});
        setInputMinMax({min: minimal, max: maximal});
        setClothesList(clothesList);
    }, [category, sort]);

    useEffect(() => {
        const trackWindowWidth = () => {
            setWindowWidth(document.body.clientWidth);
        };
        window.addEventListener("resize", trackWindowWidth);
        window.scrollTo(0, 0);

        return (() => {
            window.removeEventListener("resize", trackWindowWidth);
        });
    }, []);

    useEffect(() => {
        // todo - useEffect setting filters to localStorage, when location changes - filters cleanings
        let sortedClothesList;
        if (clothesList.length > 0 && sort === "" || sort === "newer" || sort === "discount") {
            sortedClothesList = clothesList.sort((a, b) => a.id - b.id);
            setClothesList(sortedClothesList);
        } else if (sort === "older") {
            sortedClothesList = clothesList.sort((a, b) => b.id - a.id);
            setClothesList(sortedClothesList);
        } else if (sort === "higher-price") {
            sortedClothesList = clothesList.sort((a, b) => b.price - a.price);
            setClothesList(sortedClothesList);
        } else if (sort === "lower-price") {
            sortedClothesList = clothesList.sort((a, b) => a.price - b.price);
            setClothesList(sortedClothesList);
        }
    }, [sort]);

    useEffect(() => {
        if(mobileSortActive || mobileFiltersActive){
            setShowLikes(false);
        }
    }, [mobileSortActive, mobileFiltersActive]);

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
                        <FilterSortBarDesktop
                            clothesList = {clothesList}
                            price = {price}
                            inputActive = {inputActive}
                            setInputActive = {setInputActive}
                            inputMinMax = {inputMinMax}
                            setInputMinMax = {setInputMinMax}
                            sort = {sort}
                            setSort = {setSort}
                            sortActive = {sortActive}
                            setSortActive = {setSortActive}
                            setPrice = {setPrice}
                            minMax = {minMax}
                            onBlur = {onBlur}
                            sortVariants = {sortVariants}
                            filterCondition = {filterCondition}
                            setFilters = {setFilters}
                            applyFilters = {applyFilters}
                            dropFilters = {dropFilters}
                        />
                        :
                        <FilterSortBarMobile
                            clothesList={clothesList}
                            price={price}
                            inputActive={inputActive}
                            setInputActive={setInputActive}
                            inputMinMax={inputMinMax}
                            setInputMinMax={setInputMinMax}
                            sort={sort}
                            setSort={setSort}
                            sortActive={sortActive}
                            setSortActive={setSortActive}
                            setPrice={setPrice}
                            minMax={minMax}
                            onBlur={onBlur}
                            sortVariants={sortVariants}
                            filterCondition={filterCondition}
                            setFilters={setFilters}
                            applyFilters={applyFilters}
                            dropFilters={dropFilters}
                            onSetOverFlow={onSetOverFlow}
                            mobileFiltersActive={mobileFiltersActive}
                            setMobileFiltersActive={setMobileFiltersActive}
                            mobileSortActive={mobileSortActive}
                            setMobileSortActive={setMobileSortActive}
                            setShowLikes={setShowLikes}
                    />

                }
                {
                    clothesList.length > 0 ?
                        <div className={styles.list}>
                            {clothesList.map(el => <CategoryItem showLikes={showLikes} key={el.id} item={el}/>)}
                        </div>
                        :
                        <div className={styles.noItems}>Немає товару в наявності</div>
                }
            </div>
        </div>
    );
};
export default CategoryList;