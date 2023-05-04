import {DropDownValue, Gender} from "../../../redux/action-types";

export const DropMenuList: DropMenuGenderList[] = [
    {
        //male / female
        gender: "male",
        clothList: [
            {
                name: "clothes",
                title: "Одяг",
                categories: [
                    // ВЕРХНІЙ ОДЯГ
                    {
                        name: "ВЕРХНІЙ ОДЯГ",
                        link: "outerwear",
                        type: "category"
                    },
                    {
                        name: "ВІТРОВКИ, КУРТКИ",
                        link: "jackets_and_wind-jackets",
                        type: "subcategory"
                    },
                    {
                        name: "ПАРКИ ОСІНЬ-ВЕСНА",
                        link: "autumn-spring-parks",
                        type: "subcategory"
                    },
                    {
                        name: "ЗИМОВІ КУРТКИ",
                        link: "winter-jackets",
                        type: "subcategory"
                    },
                    {
                        name: "СВІТШОТИ, ТОЛСТОВКИ",
                        link: "sweatshirts",
                        type: "category"
                    },
                    // ШТАНИ
                    {
                        name: "ШТАНИ",
                        link: "pants",
                        type: "category"
                    },
                    {
                        name: "ДЖИНСИ",
                        link: "jeans",
                        type: "subcategory"
                    },
                    {
                        name: "СПОРТИВНІ ШТАНИ",
                        link: "sport-pants",
                        type: "subcategory"
                    },
                    {
                        name: "КАРГО, ДЖОГЕРИ, ЧИНОСИ",
                        link: "cargos_joggers_chinos",
                        type: "subcategory"
                    },
                    {
                        name: "СПОРТИВНІ КОСТЮМИ",
                        link: "track-suits",
                        type: "category"
                    },
                    // ПОЛО ТА ФУТБОЛКИ
                    {
                        name: "ПОЛО ТА ФУТБОЛКИ",
                        link: "polo_and_t-shirts",
                        type: "category"
                    },
                    // ШОРТИ
                    {
                        name: "ШОРТИ",
                        link: "shorts",
                        type: "category"
                    },
                    // ЛІТНІ КОМПЛЕКТИ
                    {
                        name: "ЛІТНІ КОМПЛЕКТИ",
                        link: "summer-sets",
                        type: "category"
                    },
                    // БІЛИЗНА
                    {
                        name: "БІЛИЗНА",
                        link: "underwear",
                        type: "category"
                    },
                ]
            },
            // shoes
            {
                name: "shoes",
                title: "Взуття",
                categories: [
                    {
                        name: "ЗИМОВЕ ВЗУТТЯ",
                        link: "winter-shoes",
                        type: "category"
                    },
                    {
                        name: "КРОСІВКИ, КЕДИ",
                        link: "sneakers",
                        type: "category"
                    },
                ]
            },
            // bags
            {
                name: "backpacks_and_bags",
                title: "Рюкзаки та сумки",
                categories: [
                    // РЮКЗАКИ
                    {
                        name: "РЮКЗАКИ",
                        link: "backpacks",
                        type: "category"
                    },
                    // СУМКИ НА ПОЯС
                    {
                        name: "СУМКИ НА ПОЯС",
                        link: "belt-bags",
                        type: "category"
                    },
                    // СУМКИ ЧЕРЕЗ ПЛЕЧЕ
                    {
                        name: "СУМКИ ЧЕРЕЗ ПЛЕЧЕ",
                        link: "shoulder-bags",
                        type: "category"
                    },
                ]
            },
            // accessories
            {
                name: "accessories",
                title: "Аксесуари",
                categories: [
                    // КЕПКИ, ПАНАМИ
                    {
                        name: "КЕПКИ, ПАНАМИ",
                        link: "caps_and_panamas",
                        type: "category"
                    },
                    // ЗИМОВІ ШАПКИ
                    {
                        name: "ЗИМОВІ ШАПКИ",
                        link: "winter-hats",
                        type: "category"
                    },
                    // ШАРФИ, РУКАВИЧКИ
                    {
                        name: "ШАРФИ, РУКАВИЧКИ",
                        link: "scarves_and_gloves",
                        type: "category"
                    },
                    // ШКАРПЕТКИ
                    {
                        name: "ШКАРПЕТКИ",
                        link: "socks",
                        type: "category"
                    },
                    // РЕМЕНІ, ОКУЛЯРИ, СТІКЕРИ, ГАМАНЦІ
                    {
                        name: "РЕМЕНІ, ОКУЛЯРИ, \nСТІКЕРИ, ГАМАНЦІ",
                        link: "belts_glasses_stickers_wallets",
                        type: "category"
                    },
                ]
            },
        ]
    },

    // FEMALE

    {
        //male / female
        gender: "female",
        // typeOfCloth
        clothList: [
            {
                name: "clothes",
                title: "Одяг",
                categories: [
                    // ВЕРХНІЙ ОДЯГ
                    {
                        name: "ВЕРХНІЙ ОДЯГ",
                        link: "outerwear",
                        type: "category"
                    },
                    {
                        name: "ВІТРОВКИ, КУРТКИ",
                        link: "jackets_and_wind-jackets",
                        type: "subcategory"
                    },
                    {
                        name: "ПАЛЬТО",
                        link: "coats",
                        type: "subcategory"
                    },
                    // ТОЛСТОВКИ, СВІТШОТИ, КОФТИ
                    {
                        name: "ТОЛСТОВКИ, \nСВІТШОТИ, КОФТИ",
                        link: "sweatshirts",
                        type: "category"
                    },
                    // БОДІ
                    {
                        name: "БОДІ",
                        link: "bodies",
                        type: "category"
                    },
                    // ШТАНИ
                    {
                        name: "ШТАНИ",
                        link: "pants",
                        type: "category"
                    },
                    // ТОПИ І ФУТБОЛКИ
                    {
                        name: "ТОПИ І ФУТБОЛКИ",
                        link: "tops_and_t-shirts",
                        type: "category"
                    },
                    // СПОРТИВНІ КОСТЮМИ
                    {
                        name: "СПОРТИВНІ КОСТЮМИ",
                        link: "track-suits",
                        type: "category"
                    },
                    // ЛІТНІ КОМПЛЕКТИ
                    {
                        name: "ЛІТНІ КОМПЛЕКТИ",
                        link: "summer-sets",
                        type: "category"
                    },
                    // ПЛАТТЯ
                    {
                        name: "ПЛАТТЯ",
                        link: "dresses",
                        type: "category"
                    },
                    // ШОРТИ
                    {
                        name: "ШОРТИ",
                        link: "shorts",
                        type: "category"
                    },
                    // КУПАЛЬНИКИ
                    {
                        name: "КУПАЛЬНИКИ",
                        link: "swimwear",
                        type: "category"
                    },
                    // КОСТЮМИ
                    {
                        name: "КОСТЮМИ",
                        link: "suits",
                        type: "category"
                    },
                    // БІЛИЗНА
                    {
                        name: "БІЛИЗНА",
                        link: "underwear",
                        type: "category"
                    },
                ]
            },
            // shoes
            {
                name: "shoes",
                title: "Взуття",
                categories: [
                    {
                        name: "ЗИМОВЕ ВЗУТТЯ",
                        link: "winter-shoes",
                        type: "category"
                    },
                    {
                        name: "КРОСІВКИ, КЕДИ",
                        link: "sneakers",
                        type: "category"
                    },
                ]
            },
            // Аксесуари
            {
                name: "accessories",
                title: "Аксесуари",
                categories: [
                    {
                        name: "РЮКЗАКИ",
                        link: "backpacks",
                        type: "category"
                    },
                    {
                        name: "СУМКИ НА ПОЯС",
                        link: "belt-bags",
                        type: "category"
                    },
                    {
                        name: "СУМКИ ЧЕРЕЗ ПЛЕЧЕ",
                        link: "shoulder-bags",
                        type: "category"
                    },
                    {
                        name: "РЕМЕНІ, ШКАРПЕТКИ,\n ОКУЛЯРИ, РУКАВИЧКИ",
                        link: "belts_glasses_stickers_wallets",
                        type: "category"
                    },
                    {
                        name: "ЗИМОВІ ШАПКИ, ШАРФИ",
                        link: "winter-hats_and_scarves",
                        type: "category"
                    },
                ]
            },
        ]
    }
];


export type linkType = "outerwear" |"jackets_and_wind-jackets" | "autumn-spring-parks" | "winter-jackets" | "sweatshirts"
    | "pants" | "jeans" | "sport-pants" | "cargos_joggers_chinos" | "track-suits" | "polo_and_t-shirts" | "shorts"
    | "underwear" | "winter-shoes" | "sneakers" | "backpacks" | "belt-bags" | "shoulder-bags" | "caps_and_panamas"
    | "winter-hats" | "scarves_and_gloves" | "socks" | "belts_glasses_stickers_wallets" | "coats" | "bodies"
    | "tops_and_t-shirts" | "summer-sets" | "dresses" | "swimwear" | "suits" | "winter-hats_and_scarves";

export type DropMenuListSubItem = {
 name: string,
 link: linkType,
 type: string,
}
export type DropMenuListItem = {
    name: DropDownValue,
    title: string,
    categories: DropMenuListSubItem[],
}
export type DropMenuGenderList = {
    gender: Gender,
    clothList: DropMenuListItem[],
}
