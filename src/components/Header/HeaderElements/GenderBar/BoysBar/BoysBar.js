import React, {useEffect, useState} from 'react';
import styles from "./BoysBar.module.css";
import {useDispatch} from "react-redux";
import {onSetDropDownMenu} from "../../../../../redux/action-creators/DropDownMenu";

// const BoysBar = ({setDropMenu}) => {
const BoysBar = () => {

        // const [myState, setMyState] = useState("");

        // useEffect(() => {
        //     // setDropMenu(myState);
        // }, [myState]);


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
                     onMouseOver={() => dispatch(onSetDropDownMenu("m-clothes"))}
                     onMouseOut={() => dispatch(onSetDropDownMenu(""))}
                >
                    <div className={styles.rightLink}>Одяг</div>
                </div>
                <div className={styles.right_block}
                    // onMouseOver={() => setMyState("m-shoes")}
                    // onMouseOut={() => setMyState("")}
                     onMouseOver={() => dispatch(onSetDropDownMenu("m-shoes"))}
                     onMouseOut={() => dispatch(onSetDropDownMenu(""))}
                >
                    <div className={styles.rightLink}>Взутя</div>
                </div>
                <div className={styles.right_block}
                    // onMouseOver={() => setMyState("m-backpacks")}
                    // onMouseOut={() => setMyState("")}
                     onMouseOver={() => dispatch(onSetDropDownMenu("m-backpacks"))}
                     onMouseOut={() => dispatch(onSetDropDownMenu(""))}
                >
                    <div className={styles.rightLink}>Рюкзаки та сумки</div>
                </div>
                <div className={styles.right_block}
                    // onMouseOver={() => setMyState("m-accessories")}
                    // onMouseOut={() => setMyState("")}
                     onMouseOver={() => dispatch(onSetDropDownMenu("m-accessories"))}
                     onMouseOut={() => dispatch(onSetDropDownMenu(""))}
                >
                    <div className={styles.rightLink}>Аксесуари</div>
                </div>
            </div>
        );
};


export default BoysBar;