import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Main from "./Main.tsx";
import Male from "../../pages/Male/Male.tsx";
import Female from "../../pages/Female/Female.tsx";
import {DropMenuList} from "../Header/HeaderLinks/ElementList_DropDownMenu";
import CategoryList from "../../pages/Catalog/List/List/CategoryList";
import ChosenItem from "../../pages/Catalog/ChosenItem/ChosenItem";
import Likes from "../../pages/Likes/Likes";
import Cart from "../../pages/Cart/Cart";
import Search from "../../pages/Search/Search";
import MainPage from "../../pages/MainPage/MainPage";

const MainLayout = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Main/>}>
                    <Route index element={<Navigate to="/male" replace/>}/>

                    <Route path={'male/:id'} element={<ChosenItem/>}/>
                    <Route path={'female/:id'} element={<ChosenItem/>}/>

                    <Route path={'user/:userId/likes'} element={<Likes/>}/>
                    <Route path={'user/:userId/cart'} element={<Cart/>}/>

                    <Route path={'search/:genderOfLink/:searchingValue'} element={<Search/>}/>
                    <Route path={'search/:genderOfLink/'} element={<Search/>}/>

                    <Route path={'/male/*'} element={<Male/>}>
                        <Route index element={<MainPage propGender={"male"}/>}/>
                        {
                            DropMenuList[0].clothList.map(
                                el => {
                                    let masOfCategories = el.categories.map(el => el.link);
                                    let name = el.title;

                                    return(
                                        <Route
                                            path={`${el.name}`}
                                            element={<CategoryList
                                                category={masOfCategories}
                                                name={name}
                                            />}
                                            key={el.name}
                                        />
                                    )
                                }
                            )
                        }
                        {
                            DropMenuList[0].clothList.map(
                                el => el.categories.map(el =>
                                    <Route
                                        path={`${el.link}`}
                                        element={<CategoryList category={el.link} name={el.name}/>}
                                        key={el.name}
                                    />
                                )
                            )
                        }
                    </Route>

                    <Route path={'/female/'} element={<Female/>}>
                        <Route index element={<MainPage propGender={"female"}/>}/>
                        {
                            DropMenuList[1].clothList.map(
                                el => {
                                    let masOfCategories = el.categories.map(el => el.link);
                                    let name = el.title;

                                    return (
                                        <Route
                                            path={`${el.name}`}
                                            element={<CategoryList category={masOfCategories} name={name}/>}
                                            key={el.name}
                                        />
                                    )
                                }
                            )
                        }
                        {
                            DropMenuList[1].clothList.map(
                                el => el.categories.map(el =>
                                    <Route
                                        path={`${el.link}`}
                                        element={<CategoryList category={el.link} name={el.name}/>}
                                        key={el.name}
                                    />
                                )
                            )
                        }
                    </Route>
                </Route>
            </Routes>
        </div>
    );
};

export default MainLayout;