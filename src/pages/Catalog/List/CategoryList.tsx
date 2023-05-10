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

export type CategoryList_PropsType = {
    category: linkType[] | linkType;
    name: string | string[];
}
type SliderValue = { min: number, max: number };
// type SliderValue = number[] | {min: number, max: number};
//[number, number] |

const CategoryList: FC<CategoryList_PropsType> = ({category, name}) => {

    const ClothesService = clothesService;
    const [clothesList, setClothesList] = useState<Cloth[]>([]);

    const location = useLocation();
    const actualGender = location.pathname.includes('female') ? "female" : "male";

    const [price, setPrice] = useState<SliderValue>({min: 0, max: 100});
    const [filters, setFilters] = useState<boolean>(false);
    // const [sort, setSort] = useState("");

    const [minMax, setMinMax] = useState({min: 0, max: 100});
    // const [inputMinMax, setInputMinMax] = useState({min: 0, max: 100});
    // let minimum = 0;
    // let maximum = 100;


    useEffect(() => {

        if (Array.isArray(category)) {
            let clothesList: Cloth[] = ClothesService.getClothesByCategories(category, actualGender);
            let minimal = Math.min(...clothesList.map(el => el.price));
            let maximal = Math.max(...clothesList.map(el => el.price));
            setMinMax({min: minimal, max: maximal});
            console.log(minimal, maximal);
            setClothesList(clothesList);
            setPrice({min: minimal, max: maximal});
        } else {
            let clothesList: Cloth[] = ClothesService.getClothesByCategory(category, actualGender);
            let minimal = Math.min(...clothesList.map(el => el.price));
            let maximal = Math.max(...clothesList.map(el => el.price));
            console.log(minimal, maximal);
            setClothesList(clothesList);
            setPrice({min: minimal, max: maximal});
        }
    }, [category])


    // let maximal = 0;
    // let minimal = 100;
    //
    // if (clothesList.length > 0) {
    //     maximal = Math.max(...clothesList.map(el => el.price));
    //     minimal = Math.min(...clothesList.map(el => el.price));
    //     // console.log(minimal, maximal)
    // }
    // minimal > 0 && setPrice( {min: minimal, max: maximal});

    let filterCondition = price.min === 0 && price.max === 100;
    console.log(filterCondition);
    console.log("filters", filters);


    const dropFilters = () => {
        setPrice({min: 0, max: 100});
        setFilters(false);
    }

    const applyFilters = () => {
        setFilters(true);
        // setClothesList(prevState => console.log(prevState)
        // {
        // return(
        // prevState.filter()
        // )
        // })

        console.log(clothesList);
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

                    <div style={{display: "flex", flexDirection: "column", padding: "0px 15px 0px 0px"}}>

                        <label className={styles.priceTitle}>
                            ЦІНА
                        </label>
                        <div>
                            {/*{ minimum > 0 &&*/}

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
                                    onChange={(value) => setPrice({min: value[0], max: value[1]})}
                                />
                            {/*}*/}
                        </div>

                        <div style={{display: "flex", justifyContent: "space-between"}}>

                            <div>
                                <span className={styles.fromTo}>від:</span>
                                <input
                                    className={styles.priceInput}
                                    type={"number"}
                                    value={price.min}

                                    onChange={event => {
                                        if (
                                            !isNaN(parseInt(event.target.value)) &&
                                            parseInt(event.target.value) >= minMax.min &&
                                            parseInt(event.target.value) <= minMax.max
                                        ) {
                                            setPrice((prevState) => ({
                                                min: parseInt(event.target.value),
                                                max: prevState.max
                                            }));
                                        }
                                    }}
                                />
                            </div>

                            <div>
                                <span className={styles.fromTo}>до:</span>
                                <input
                                    className={styles.priceInput}
                                    type={"number"}
                                    value={price.max}
                                    onBlur={() => console.log("ooooouuuuttt!") }
                                    onChange={event => {
                                        if (
                                            !isNaN(parseInt(event.target.value)) &&
                                            parseInt(event.target.value) >= minMax.min &&
                                            parseInt(event.target.value) <= minMax.max
                                        ) {
                                            setPrice((prevState) => ({
                                                min: prevState.min,
                                                max: parseInt(event.target.value)
                                            }));
                                        }
                                    }}
                                />
                            </div>
                        </div>

                    </div>

                    <div className={styles.sizeBlock}>
                        <div className={styles.title}>Розмір</div>
                    </div>

                    <div className={styles.applyBlock}>
                        <div className={styles.apply} style={{background: "#dfddda"}}
                             onClick={() => !filterCondition &&
                                 applyFilters()
                             }
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
                             onClick={() => !filterCondition &&
                                 dropFilters()
                             }
                             style={{color: filterCondition ? "grey" : "black"}}
                        >
                            скинути фільтр
                        </div>
                    </div>

                    <div className={styles.sortBlock}>
                        <div className={styles.title}>Сортування</div>
                        <div className={styles.unset}>Cпочатку нові</div>
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