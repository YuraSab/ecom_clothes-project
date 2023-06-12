import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

const Female: FC = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default Female;