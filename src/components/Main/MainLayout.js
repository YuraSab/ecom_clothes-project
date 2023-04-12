import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "./Main";
import Male from "../../pages/male/Male";
import Female from "../../pages/Female/Female";

const MainLayout = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Main/>}>
                    {/*todo - by default */}
                    <Route index element={<Male/>}/>

                    <Route path={'/male'} element={<Male/>}>
                    {/*todo - products for boys*/}
                    </Route>

                    <Route path={'/female'} element={<Female/>}>
                        {/*todo - products for girls*/}
                    </Route>
                </Route>
            </Routes>
        </div>
    );
};

export default MainLayout;