import React from 'react';
import styles from "./DropDownMenu.module.css";

// todo - gets args from props
const DropDownMenu = () => {

    // const DropMenuList = [
    //     {
    //         gender: "male",
    //         categories: [
    //             {
    //                 name: "ВЕРХНІЙ ОДЯГ",
    //                 link: "",
    //                 subLinks: [
    //                     {
    //                         name: "ВІТРОВКИ, КУРТКИ",
    //                         link: ""
    //                     },
    //                     {
    //                         name: "ПАРКИ ОСІНЬ-ВЕСНА",
    //                         link: ""
    //                     },
    //                     {
    //                         name: "ЗИМОВІ КУРТКИ",
    //                         link: ""
    //                     },
    //                 ]
    //             },
    //
    //
    //         ]
    //     },
    //
    //
    //     // {gender: "female"}
    // ];



    const DropMenuList = [
        {
            //male / female
            gender: "male",
            // clothes, shoes, accessories etc
            typeOfCloth: [
                {
                    name: "clothes",
                    categories: [
                        // shorts, t-shirts, thousands etc
                        {
                            name: "ВЕРХНІЙ ОДЯГ",
                            link: "",
                            type: "category"
                        },
                        {
                            name: "ВІТРОВКИ, КУРТКИ",
                            link: "",
                            type: "subcategory"
                        },
                        {
                            name: "ПАРКИ ОСІНЬ-ВЕСНА",
                            link: "",
                            type: "subcategory"
                        },
                        {
                            name: "ЗИМОВІ КУРТКИ",
                            link: "",
                            type: "subcategory"

                        },


                        {
                            name: "СВІТШОТИ, ТОЛСТОВКИ",
                            link: "",
                            type: "category"

                        },

                    //ШТАНИ
                        // ДЖИНСИ
                        // СПОРТИВНІ ШТАНИ
                        // КАРГО, ДЖОГЕРИ, ЧИНОСИ
                        // СПОРТИВНІ КОСТЮМИ
                        {
                            name: "ШТАНИ",
                            link: "",
                            type: "category"

                        },
                        {
                            name: "ДЖИНСИ",
                            link: "",
                            type: "subcategory"

                        },
                        {
                            name: "СПОРТИВНІ ШТАНИ",
                            link: "",
                            type: "subcategory"

                        },
                        {
                            name: "КАРГО, ДЖОГЕРИ, ЧИНОСИ",
                            link: "",
                            type: "subcategory"

                        },

                        {
                            name: "СПОРТИВНІ КОСТЮМИ",
                            link: "",
                            type: "category"

                        },
                        // ПОЛО ТА ФУТБОЛКИ
                        // ШОРТИ
                        // ЛІТНІ КОМПЛЕКТИ
                        // БІЛИЗНА
                        {
                            name: "ПОЛО ТА ФУТБОЛКИ",
                            link: "",
                            type: "category"

                        },
                        {
                            name: "ШОРТИ",
                            link: "",
                            type: "category"

                        },
                        {
                            name: "ЛІТНІ КОМПЛЕКТИ",
                            link: "",
                            type: "category"

                        },
                        {
                            name: "БІЛИЗНА",
                            link: "",
                            type: "category"

                        },
                    ]
                }
            ]
        },


        // {gender: "female"}
    ];

    //                         "ВІТРОВКИ, КУРТКИ\n" +
    //                         "ПАРКИ ОСІНЬ-ВЕСНА\n" +
    //                         "ЗИМОВІ КУРТКИ

    return (
        <div className={styles.mainDiv}>
            <div className={styles.subDiv}>
                {
                    // DropMenuList[0].categories.map(el => console.log(el))

                    DropMenuList[0].typeOfCloth[0].categories.map(el => <div>
                        {/*<div className={styles.category}>*/}
                        <div className={el.type === "category" ? styles.category : styles.subCategory}>{el.name}</div>
                        {/*{*/}
                        {/*    el.subLinks.map(el => <div className={styles.subCategory}>*/}
                        {/*        {el.name}*/}
                        {/*    </div>)*/}
                        {/*}*/}
                    </div>)
                }
            </div>
        </div>
    );
};

export default DropDownMenu;