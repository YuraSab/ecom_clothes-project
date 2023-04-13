import React, {useEffect, useState} from 'react';
import styles from "./GirlsBar.module.css";
import {useDispatch} from "react-redux";
import {onSetDropDownMenu} from "../../../../../redux/action-creators/DropDownMenu";

const GirlsBar = ({setDropMenu}) => {

    // const [myState, setMyState] = useState("");
    //
    // useEffect(() => {
    //     setDropMenu(myState);
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


            <div className={styles.right_block}
                 // onMouseOver={() => setMyState("f-clothes")}
                 // onMouseOut={() => setMyState("")}
                 onMouseOver={() => dispatch(onSetDropDownMenu("f-clothes"))}
                 onMouseOut={() => dispatch(onSetDropDownMenu(""))}
            >
                <div className={styles.rightLink}>Одяг</div>
            </div>
            <div className={styles.right_block}
                 // onMouseOver={() => setMyState("f-shoes")}
                 // onMouseOut={() => setMyState("")}
                 onMouseOver={() => dispatch(onSetDropDownMenu("f-shoes"))}
                 onMouseOut={() => dispatch(onSetDropDownMenu(""))}
            >
                <div className={styles.rightLink}>Взуття</div>
            </div>
            <div className={styles.right_block}
                 // onMouseOver={() => setMyState("f-accessories")}
                 // onMouseOut={() => setMyState("")}
                 onMouseOver={() => dispatch(onSetDropDownMenu("f-accessories"))}
                 onMouseOut={() => dispatch(onSetDropDownMenu(""))}
            >
                <div className={styles.rightLink}>Аксесуари</div>
            </div>
        </div>
    );
};

export default GirlsBar;