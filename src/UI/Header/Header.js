import React from 'react';
import TopHeaderMenu from "../../components/Header/TopHeaderMenu/TopHeaderMenu";
import BottomHeaderMenu from "../../components/Header/BottomHeaderMenu/BottomHeaderMenu";


const Header = () => {
    return (
        <div>
            <TopHeaderMenu/>
            <BottomHeaderMenu/>
        </div>
    );
};

export default Header;