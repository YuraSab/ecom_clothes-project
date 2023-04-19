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
                    <Route index element={<Male/>}/>

                    <Route path={'/male'} element={<Male/>}>
                        {/* Male pages */}
                    </Route>

                    <Route path={'/female'} element={<Female/>}>
                        {/* Female pages */}
                    </Route>
                </Route>
            </Routes>
        </div>
    );
};

export default MainLayout;