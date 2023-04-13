import React, {useEffect, useState} from 'react';
import styles from "./BoysBar.module.css";

const BoysBar = ({setDropMenu}) => {

    const [myState, setMyState] = useState("");

    useEffect(() => {
        setDropMenu(myState);
    }, [myState]);


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
                 onMouseOver={() => setMyState("m-clothes")}
                 onMouseOut={() => setMyState("")}
            >
                <div className={styles.rightLink}>Одяг</div>
            </div>
            <div className={styles.right_block}
                 onMouseOver={() => setMyState("m-shoes")}
                 onMouseOut={() => setMyState("")}>
                <div className={styles.rightLink}>Взутя</div>
            </div>
            <div className={styles.right_block}
                 onMouseOver={() => setMyState("m-backpacks")}
                 onMouseOut={() => setMyState("")}>
                <div className={styles.rightLink}>Рюкзаки та сумки</div>
            </div>
            <div className={styles.right_block}
                 onMouseOver={() => setMyState("m-accessories")}
                 onMouseOut={() => setMyState("")}>
                <div className={styles.rightLink}>Аксесуари</div>
            </div>
        </div>
    );
};

export default BoysBar;