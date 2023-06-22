import React, {FC} from 'react';
import ReactSlider from "react-slider";

type SliderValue = { min: number, max: number };
type ReactSliderElement_props = {
    price: SliderValue,
    minMax: SliderValue,
    setFilters: (value: boolean) => void;
    setPrice: (value: SliderValue) => void;
}

const ReactSliderElement: FC<ReactSliderElement_props> = ({price, minMax, setFilters, setPrice}) => {
    return (
        <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            defaultValue={[price.min, price.max]}
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
    );
};

export default ReactSliderElement;