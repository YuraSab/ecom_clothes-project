import React, {useEffect, useState} from 'react';
import styles from "./BoysBar.module.css";
import {useDispatch, useSelector} from "react-redux";
import {onSetDropDownMenu} from "../../../../../redux/action-creators/DropDownMenu";

// const BoysBar = ({setDropMenu}) => {
const BoysBar = () => {

    // const [myState, setMyState] = useState("");

    // useEffect(() => {
    //     // setDropMenu(myState);
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


            <div className={styles.left_block}>
                <div className={styles.leftLink} style={{color: "white"}}>Staff Basic</div>
            </div>
            <div className={styles.left_block}>
                <div className={styles.leftLink} style={{color: "white"}}>Staff Tactical</div>
            </div>
            <div className={styles.right_block}
                // onMouseOver={() => setMyState("m-clothes")}
                // onMouseOut={() => setMyState("")}
                 style={{
                     background: dropDownValue === "m-clothes" ? "white" : "black",
                     color: dropDownValue === "m-clothes" ? "black" : "white"
                 }}
                 onMouseOver={() => dispatch(onSetDropDownMenu("m-clothes"))}
                 onMouseOut={() => dispatch(onSetDropDownMenu(""))}
            >
                <div className={styles.rightLink}>Одяг</div>
            </div>
            <div className={styles.right_block}
                // onMouseOver={() => setMyState("m-shoes")}
                // onMouseOut={() => setMyState("")}
                 style={{
                     background: dropDownValue === "m-shoes" ? "white" : "black",
                     color: dropDownValue === "m-shoes" ? "black" : "white"
                 }}
                 onMouseOver={() => dispatch(onSetDropDownMenu("m-shoes"))}
                 onMouseOut={() => dispatch(onSetDropDownMenu(""))}
            >
                <div className={styles.rightLink}>Взутя</div>
            </div>
            <div className={styles.right_block}
                // onMouseOver={() => setMyState("m-backpacks")}
                // onMouseOut={() => setMyState("")}
                 style={{
                     background: dropDownValue === "m-backpacks" ? "white" : "black",
                     color: dropDownValue === "m-backpacks" ? "black" : "white"
                 }}
                 onMouseOver={() => dispatch(onSetDropDownMenu("m-backpacks"))}
                 onMouseOut={() => dispatch(onSetDropDownMenu(""))}
            >
                <div className={styles.rightLink}>Рюкзаки та сумки</div>
            </div>
            <div className={styles.right_block}
                // onMouseOver={() => setMyState("m-accessories")}
                // onMouseOut={() => setMyState("")}
                 style={{
                     background: dropDownValue === "m-accessories" ? "white" : "black",
                     color: dropDownValue === "m-accessories" ? "black" : "white"
                 }}
                 onMouseOver={() => dispatch(onSetDropDownMenu("m-accessories"))}
                 onMouseOut={() => dispatch(onSetDropDownMenu(""))}
            >
                <div className={styles.rightLink}>Аксесуари</div>
            </div>
        </div>
    );
};


export default BoysBar;