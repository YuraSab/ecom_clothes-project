import React, {useEffect} from 'react';
import styles from "./GenderBar.module.css";
import {useDispatch, useSelector} from "react-redux";
import {onSetDropDownMenu, onSetGender} from "../../../../redux/action-creators/DropDownMenu";
import {useLocation} from "react-router-dom";
import {DropMenuList} from "../../BottomHeaderMenu/ElementList_DropDownMenu";
import DropDownMenu from "../../DropDownMenu/DropDownMenu";

// const GenderBar = ({mas}) => {
const GenderBar = ({propGender}) => {


    const {dropDownValue, gender} = useSelector(({headerState}) => (headerState));

    // console.log('dropDownValue, gender', dropDownValue, gender);
    const dispatch = useDispatch();

    useEffect(() => {
        // console.log(`propGender`, propGender)
        dispatch(onSetGender(propGender));

    }, [propGender]);


    // const maleMas = DropMenuList.find(el => el.gender === 'male');
    // const femaleMas = DropMenuList.find(el => el.gender === 'female');
    const genderMas = DropMenuList.find(el => el.gender === gender);


    // const location = useLocation();
    // const localGender = location.pathname.includes('female') ? "female" : "male";


    const onSettingCloth = (cloth_par) => {
        console.log(`dffffffffffffffffffffffffffffffffffffffff`, cloth_par);
        dispatch(onSetDropDownMenu(cloth_par));
    };


    return (
        gender &&
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


            {
                genderMas.gender === 'male' && <>
                    {/*mas.gender === 'male' && <>*/}
                    <div className={styles.left_block}>
                        <div className={styles.leftLink} style={{color: "white"}}>Staff Basic</div>
                    </div>
                    <div className={styles.left_block}>
                        <div className={styles.leftLink} style={{color: "white"}}>Staff Tactical</div>
                    </div>
                </>
            }




            {
                genderMas.typeOfCloth.map((el, index) => {
                    console.log(`gggggggggggggggggggggggggggggggg`,dropDownValue)
                    return (
                        <div className={styles.right_block}
                             key={index}
                             style={{
                                 // background: "red",

                                 background: dropDownValue === el.name ? "white" : "black",
                                 color: dropDownValue === el.name ? "black" : "white"
                             }}
                            onMouseOver={() => dispatch(onSetDropDownMenu(el.name))}
                             // onMouseEnter={() => onSettingCloth(el.name)}
                            onMouseOut={() => dispatch(onSetDropDownMenu(""))}
                        >
                            <div className={styles.rightLink}>{el.title}</div>
                            {
                                <div style={{visibility: dropDownValue === el.name ? "visible" : "hidden"}}>
                                <DropDownMenu />
                                </div>
                            }
                        </div>
                        )
                })

                // {/*mas.typeOfCloth.map(el =>*/}


            }


            {/*<div className={styles.right_block}*/}
            {/*     style={{*/}
            {/*         background: dropDownValue === "m-clothes" ? "white" : "black",*/}
            {/*         color: dropDownValue === "m-clothes" ? "black" : "white"*/}
            {/*     }}*/}
            {/*     onMouseOver={() => dispatch(onSetDropDownMenu("m-clothes"))}*/}
            {/*     onMouseOut={() => dispatch(onSetDropDownMenu(""))}*/}
            {/*>*/}
            {/*    <div className={styles.rightLink}>Одяг</div>*/}
            {/*</div>*/}
            {/*<div className={styles.right_block}*/}
            {/*     style={{*/}
            {/*         background: dropDownValue === "m-shoes" ? "white" : "black",*/}
            {/*         color: dropDownValue === "m-shoes" ? "black" : "white"*/}
            {/*     }}*/}
            {/*     onMouseOver={() => dispatch(onSetDropDownMenu("m-shoes"))}*/}
            {/*     onMouseOut={() => dispatch(onSetDropDownMenu(""))}*/}
            {/*>*/}
            {/*    <div className={styles.rightLink}>Взутя</div>*/}
            {/*</div>*/}
            {/*<div className={styles.right_block}*/}
            {/*     style={{*/}
            {/*         background: dropDownValue === "m-backpacks" ? "white" : "black",*/}
            {/*         color: dropDownValue === "m-backpacks" ? "black" : "white"*/}
            {/*     }}*/}
            {/*     onMouseOver={() => dispatch(onSetDropDownMenu("m-backpacks"))}*/}
            {/*     onMouseOut={() => dispatch(onSetDropDownMenu(""))}*/}
            {/*>*/}
            {/*    <div className={styles.rightLink}>Рюкзаки та сумки</div>*/}
            {/*</div>*/}
            {/*<div className={styles.right_block}*/}
            {/*     style={{*/}
            {/*         background: dropDownValue === "m-accessories" ? "white" : "black",*/}
            {/*         color: dropDownValue === "m-accessories" ? "black" : "white"*/}
            {/*     }}*/}
            {/*     onMouseOver={() => dispatch(onSetDropDownMenu("m-accessories"))}*/}
            {/*     onMouseOut={() => dispatch(onSetDropDownMenu(""))}*/}
            {/*>*/}
            {/*    <div className={styles.rightLink}>Аксесуари</div>*/}
            {/*</div>*/}
        </div>
    );
};


export default GenderBar;