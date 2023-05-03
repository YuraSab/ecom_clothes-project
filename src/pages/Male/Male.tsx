import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

const Male: FC = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default Male;