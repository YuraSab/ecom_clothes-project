import React, {FC} from 'react';
import ReactSliderElement from "../Filter-Sort_elelments/ReactSliderElement";
import PriceInputMinimal from "../Filter-Sort_elelments/PriceInputElement";
import SettingsIcon from "../../../../assets/icons/settings_gray_icon.png";
import CrossIcon from "../../../../assets/icons/cross_black_icon.svg";
import styles from "../List/CategoryList.module.css";
import {Cloth} from "../../../../db/clothes-db";
import {SliderValue, SortValue, SortVariant} from "../List/CategoryList";

interface FilterSortBarDesktop_props {
    clothesList: Cloth[],
    price: SliderValue,
    inputActive: boolean,
    setInputActive: (value: boolean) => void,
    inputMinMax: SliderValue,
    setInputMinMax: (cb: (value: SliderValue) => SliderValue) => void,
    sort: SortValue,
    setSort: (value: SortValue) => void,
    sortActive: boolean,
    setSortActive: (value: boolean) => void,
    setPrice: (value: SliderValue) => void,
    minMax: SliderValue,
    onBlur: () => void,
    sortVariants: SortVariant[],
    filterCondition: boolean,
    setFilters: (value: boolean) => void,
    applyFilters: () => void,
    dropFilters: () => void,
}


const FilterSortBarDesktop: FC<FilterSortBarDesktop_props> = ({
                                  clothesList,
                                  price,
                                  inputActive,
                                  setInputActive,
                                  inputMinMax,
                                  setInputMinMax,
                                  sort,
                                  setSort,
                                  sortActive,
                                  setSortActive,
                                  setPrice,
                                  minMax,
                                  onBlur,
                                  sortVariants,
                                  filterCondition,
                                  setFilters,
                                  applyFilters,
                                  dropFilters,
                              }) => {
    return (
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
                                sortVariants.map((el: SortVariant) => <div
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
                <div className={styles.unset}>
                    {sort === "" ? "спочатку нові" : sortVariants.find((el: SortVariant) => el.value === sort)?.title}
                </div>
            </div>
        </div>
    );
};

export default FilterSortBarDesktop;