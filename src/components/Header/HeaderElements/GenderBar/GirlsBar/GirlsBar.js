import React, {useEffect, useState} from 'react';
import styles from "./GirlsBar.module.css";
// import styles from "../BoysBar/BoysBar";
import {useDispatch, useSelector} from "react-redux";
import {onSetDropDownMenu} from "../../../../../redux/action-creators/DropDownMenu";

const GirlsBar = ({setDropMenu}) => {

    // const [myState, setMyState] = useState("");
    //
    // useEffect(() => {
    //     setDropMenu(myState);
    // }, [myState]);

    const {dropDownValue} = useSelector(({dropDownValue: {dropDownValue}}) => ({dropDownValue}));

    const dispatch = useDispatch();


    return (
        <div className={styles.mainBlock}>
            <div className={styles.left_block}>
                <div className={styles.leftLink} style={{color: "#eb001c"}}>
                    Знижки
                </div>
            </div>
            <div className={styles.left_block}>
                <div className={styles.leftLink} style={{color: "#48DD00"}}>
                    Новинки
                </div>
            </div>


            <div className={styles.right_block}
                 // onMouseOver={() => setMyState("f-clothes")}
                 // onMouseOut={() => setMyState("")}
                 style={{
                     background: dropDownValue === "f-clothes" ? "white" : "black",
                     color: dropDownValue === "f-clothes" ? "black" : "white"
                 }}
                 onMouseOver={() => dispatch(onSetDropDownMenu("f-clothes"))}
                 onMouseOut={() => dispatch(onSetDropDownMenu(""))}
            >
                <div className={styles.rightLink}>Одяг</div>
            </div>
            <div className={styles.right_block}
                 // onMouseOver={() => setMyState("f-shoes")}
                 // onMouseOut={() => setMyState("")}
                 style={{
                     background: dropDownValue === "f-shoes" ? "white" : "black",
                     color: dropDownValue === "f-shoes" ? "black" : "white"
                 }}
                 onMouseOver={() => dispatch(onSetDropDownMenu("f-shoes"))}
                 onMouseOut={() => dispatch(onSetDropDownMenu(""))}
            >
                <div className={styles.rightLink}>Взуття</div>
            </div>
            <div className={styles.right_block}
                 // onMouseOver={() => setMyState("f-accessories")}
                 // onMouseOut={() => setMyState("")}
                 style={{
                     background: dropDownValue === "f-accessories" ? "white" : "black",
                     color: dropDownValue === "f-accessories" ? "black" : "white"
                 }}
                 onMouseOver={() => dispatch(onSetDropDownMenu("f-accessories"))}
                 onMouseOut={() => dispatch(onSetDropDownMenu(""))}
            >
                <div className={styles.rightLink}>Аксесуари</div>
            </div>
        </div>
    );
};

export default GirlsBar;