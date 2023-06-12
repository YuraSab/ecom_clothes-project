import React, {FC} from 'react';
import styles from "../List/CategoryList.module.css";

type SliderValue = { min: number, max: number };
type PriceInputMinimal_props = {
    typeOfInput: "min" | "max";
    inputActive: boolean;
    inputMinMax: SliderValue;
    price: SliderValue;
    onBlur: () => void;
    setInputActive: (value: boolean) => void;
    setInputMinMax: (cb: (value: SliderValue) => SliderValue) => void;
};

const PriceInputMinimal: FC<PriceInputMinimal_props> = ({typeOfInput, inputActive, inputMinMax, price, onBlur, setInputActive, setInputMinMax}) => {
    return (
        <input
            className={styles.priceInput}
            type={"number"}
            value={typeOfInput === "min" ?
                (inputActive ? inputMinMax.min : price.min)
                :
                (inputActive ? inputMinMax.max : price.max)
            }
            onBlur={() => onBlur()}
            onChange={event => {
                setInputActive(true);
                setInputMinMax((prevState) => (
                    typeOfInput === "min" ?
                        {
                            min: parseInt(event.target.value),
                            max: prevState.max
                        }
                        :
                        {
                            min: prevState.min,
                            max: parseInt(event.target.value)
                        }
                ))
            }}
        />
    );
};

export default PriceInputMinimal;