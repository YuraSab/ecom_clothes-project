import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Main from "./Main.tsx";
import Male from "../../pages/Male/Male.tsx";
import Female from "../../pages/Female/Female.tsx";
import {DropMenuList} from "../Header/BottomHeaderMenu/ElementList_DropDownMenu";
import CategoryList from "../../pages/Catalog/List/CategoryList";

const MainLayout = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Main/>}>
                    <Route index element={<Navigate to="/male" replace/>}/>

                    <Route path={'/male'} element={<Male/>}>
                        {
                            DropMenuList[0].clothList.map(
                                el => {
                                    let masOfCategories = el.categories.map(el => el.link);

                                    return(
                                        <Route
                                            path={`${el.name}`}
                                            element={<CategoryList category={masOfCategories}/>}
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
                                        element={<CategoryList category={el.link}/>}
                                        key={el.name}
                                    />
                                )
                            )
                        }
                    </Route>

                    <Route path={'/female'} element={<Female/>}>
                        {
                            DropMenuList[1].clothList.map(
                                el => {
                                    let masOfCategories = el.categories.map(el => el.link);

                                    return(
                                        <Route
                                            path={`${el.name}`}
                                            element={<CategoryList category={masOfCategories}/>}
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
                                        element={<CategoryList category={el.link}/>}
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