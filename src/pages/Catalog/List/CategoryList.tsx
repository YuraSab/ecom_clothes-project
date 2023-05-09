import React, {FC, useEffect, useState} from 'react';
import {linkType} from "../../../components/Header/BottomHeaderMenu/ElementList_DropDownMenu";
import {clothesService} from "../../../services/ClothesService";
import {Cloth} from "../../../db/clothes-db";
import styles from "./CategoryList.module.css";
import CategoryItem from "../ListItem/CategoryItem";
import {useLocation} from "react-router-dom";
import ReactSlider from "react-slider";
import "./Slider.css";

export type CategoryList_PropsType = {
    category: linkType[] | linkType;
    name: string | string[];
}
type SliderValue = number | [number, number];

const CategoryList: FC<CategoryList_PropsType> = ({category, name}) => {

    const ClothesService = clothesService;
    const [clothesList, setClothesList] = useState<Cloth[]>([]);

    const location = useLocation();
    const actualGender = location.pathname.includes('female') ? "female" : "male";

    const [price, setPrice] = useState<SliderValue>([0, 100]);



    useEffect(() => {
        if (Array.isArray(category)) {
            let clothesList: Cloth[] = ClothesService.getClothesByCategories(category, actualGender);
            setClothesList(clothesList);
        } else {
            let clothesList: Cloth[] = ClothesService.getClothesByCategory(category, actualGender);
            setClothesList(clothesList);
        }
    }, [category])





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

                {/*<div className={styles.container}>*/}
                {/*    <div*/}
                {/*        // className={`${styles.minValue} ${styles.numberVal}`}*/}
                {/*    >*/}
                {/*        <input type={"number"} min={0} max={10000} value={2500} disabled/>*/}
                {/*    </div>*/}
                {/*    &nbsp; -*/}
                {/*    <div className={styles.rangeSlider}>*/}
                {/*        <div className={styles.progress}></div>*/}
                {/*        <input type="range"*/}
                {/*               // className={rangeMin}*/}
                {/*               min={0} max={10000} value={2500}/>*/}
                {/*        <input type="range"*/}
                {/*               // className={range - max}*/}
                {/*               min={0} max={10000} value={7500}/>*/}
                {/*    </div>*/}
                {/*    - &nbsp;*/}
                {/*    <div*/}
                {/*        // className={`${styles.minValue} ${styles.numberVal}`}*/}
                {/*    >*/}
                {/*        <input type={"number"} min={0} max={10000} value={7500} disabled/>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div>

                    <ReactSlider
                        className="horizontal-slider"
                        thumbClassName="example-thumb"
                        trackClassName="example-track"
                        defaultValue: SliderValue ={[0, 100]}
                        min={0}
                        max={100}
                        // ariaLabel={['Lower thumb', 'Upper thumb']}
                        ariaValuetext={state => `Thumb value ${state.valueNow}`}
                        renderThumb={(props) => <div {...props}></div>}
                        // renderThumb={<div className={"example-thumb"}></div>}
                        pearling
                        minDistance={10}
                        // onChange={(value, index) => console.log(`onChange: ${JSON.stringify({ value, index })}`)}
                        onChange={(value) => setPrice(value)}
                    />
                    <hr/><br/>
                    <b>From: {price[0]}</b><br/>
                    <hr/><br/>
                    <b>To: {price[1]}</b><br/>
                    <hr/><br/>

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