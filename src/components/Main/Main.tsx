import React from 'react';
import {Outlet} from "react-router-dom";

const Main = () => {
    return (
        <div>
            {/*<div style={{height: 900}}>*/}
            {/*    pa*/}
            {/*</div>*/}
            <Outlet/>
        </div>
    );
};

export default Main;