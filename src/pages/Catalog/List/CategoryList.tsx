import React, {FC, useEffect, useState} from 'react';
import {linkType} from "../../../components/Header/BottomHeaderMenu/ElementList_DropDownMenu";
import {clothesService} from "../../../services/ClothesService";
import {Cloth} from "../../../db/clothes-db";
import styles from "./CategoryList.module.css";
import CategoryItem from "../ListItem/CategoryItem";
import {useLocation} from "react-router-dom";
import ReactSlider from "react-slider";
import "./Slider.css";
import SettingsIcon from "../../../assets/icons/settings.png";
import CrossIcon from "../../../assets/icons/cross_svg_icon.svg";

export type CategoryList_PropsType = {
    category: linkType[] | linkType;
    name: string | string[];
}
type SliderValue = { min: number, max: number };
type SortValue = "" | "lower-price" | "higher-price" | "newer" | "older" | "discount";

// від дешевших до дорощих, від дорогих до дешевших, спочатку нові, сочатку старі, спочатку зі знижками
// lower-price, higher-price, newer, older, discount
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

    const sortVariants = [
        {title: "від дешевших до дорощих", value: "lower-price"},
        {title: "від дорогих до дешевших", value: "higher-price"},
        {title: "спочатку нові", value: "newer"},
        {title: "сочатку старі", value: "older"},
        {title: "спочатку зі знижками", value: "discount"},
    ];


    useEffect(() => {
        if (Array.isArray(category)) {
            let clothesList: Cloth[] = ClothesService.getClothesByCategories(category, actualGender);
            let minimal = Math.min(...clothesList.map(el => el.price));
            let maximal = Math.max(...clothesList.map(el => el.price));
            setMinMax({min: minimal, max: maximal});
            setClothesList(clothesList);
            setPrice({min: minimal, max: maximal});
            setInputMinMax({min: minimal, max: maximal});
        } else {
            let clothesList: Cloth[] = ClothesService.getClothesByCategory(category, actualGender);
            let minimal = Math.min(...clothesList.map(el => el.price));
            let maximal = Math.max(...clothesList.map(el => el.price));
            setMinMax({min: minimal, max: maximal});
            setClothesList(clothesList);
            setPrice({min: minimal, max: maximal});
            setInputMinMax({min: minimal, max: maximal});
        }
    }, [category])


    let filterCondition = price.min === minMax.min && price.max === minMax.max;


    const onBlur = () => {
        // console.log(event.target.value)
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


                <div className={styles.filterSortBar}>


                    <div className={styles.priceBlock}>
                        <label className={styles.priceTitle}>
                            ЦІНА
                        </label>
                        <div>
                            {clothesList.length > 0 &&
                                <ReactSlider
                                    className="horizontal-slider"
                                    thumbClassName="example-thumb"
                                    trackClassName="example-track"
                                    defaultValue={[price.min, price.max]}
                                    // min={0}
                                    // max={100}
                                    // min={0}
                                    // max={3000}
                                    min={minMax.min}
                                    max={minMax.max}
                                    value={[price.min, price.max]}
                                    ariaValuetext={state => `Thumb value ${state.valueNow}`}
                                    renderThumb={(props) => <div {...props}></div>}
                                    pearling
                                    minDistance={10}
                                    onChange={(value) => {
                                        setFilters(true)
                                        setPrice({min: value[0], max: value[1]})
                                    }}
                                />
                            }
                        </div>

                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <div>
                                <span className={styles.fromTo}>від:</span>
                                <input
                                    className={styles.priceInput}
                                    type={"number"}
                                    // value={inputMinMax.min}
                                    value={inputActive ? inputMinMax.min : price.min}
                                    onBlur={() => onBlur()}

                                    onChange={event => {
                                        setInputActive(true);
                                        setInputMinMax((prevState) => ({
                                            min: parseInt(event.target.value),
                                            max: prevState.max
                                        }))
                                    }}
                                />
                            </div>
                            <div>
                                <span className={styles.fromTo}>до:</span>
                                <input
                                    className={styles.priceInput}
                                    type={"number"}
                                    // value={inputMinMax.max}
                                    value={inputActive ? inputMinMax.max : price.max}
                                    onBlur={() => onBlur()}

                                    onChange={event => {
                                        setInputActive(true);
                                        setInputMinMax((prevState) => ({
                                            min: prevState.min,
                                            max: parseInt(event.target.value)
                                        }))
                                    }}
                                />
                            </div>
                        </div>
                    </div>


                    <div className={styles.sizeBlock}>
                        <div className={styles.title}>Розмір</div>
                    </div>


                    <div className={styles.applyBlock}>
                        <div className={styles.apply}
                             style={{background: "#dfddda"}}
                             onClick={() => applyFilters()}
                        >
                            <div>
                                <img src={SettingsIcon} alt={"apply filters"} height={25} style={{padding: "0 10px"}}/>
                            </div>
                            <div
                                className={styles.applyTitle}
                                style={{padding: "0 10px", color: filterCondition ? "grey" : "black"}}
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
                            // padding: "5%",
                            // border: sortActive ? "1px grey solid" : "1px white solid",
                            height: sortActive ? 322 : 60,
                            zIndex: 49,
                            boxShadow: sortActive ? "0 5px 28px 3px rgba(0,0,0,.3)" : "none",
                        }}>
                            <div className={styles.sortTitle}
                                 style={{
                                     // padding: "22px 21px 0 21px",
                                     background: sortActive ? "white" : "none",
                                     display: "flex",
                                     alignItems: "center",
                                     justifyContent: "space-between",
                                     padding: "0 21px",
                                     height: 60,
                                     borderBottom: sortActive ? "none" : "2px solid #dfddda",
                                     cursor: "pointer"
                                 }}
                                 onClick={() => setSortActive(true)}

                            >
                                Сортування
                                {
                                    sortActive &&
                                    <div  onClick={(event) => {
                                        event.stopPropagation();
                                        setSortActive(false)
                                    }}>
                                <img src={CrossIcon} alt={"close"} height={15}/>

                                    </div>
                                }
                            </div>
                            {sortActive &&
                                <div className={styles.sortList}
                                     style={{
                                         background: sortActive ? "white" : "none",
                                         // padding: "0 20px",
                                         zIndex: 48,
                                         // padding: "22px 20px 0 20px",
                                         // border: "2px black solid"

                                     }}
                                >
                                    {
                                        sortVariants.map(el => <div className={styles.sortItem}>{el.title}</div>)
                                    }
                                </div>
                            }
                        </div>
                        <div className={styles.unset}>{sort === "" ? "спочатку нові" : sort}</div>
                    </div>

                </div>


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