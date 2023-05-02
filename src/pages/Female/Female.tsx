import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

const Female: FC = () => {
    return (
        <div>
            {/*Female*/}
            <Outlet/>
        </div>
    );
};

export default Female;