import './App.css';
import Footer from "./components/Footer/Footer.tsx";
import MainLayout from "./components/Main/MainLayout";
import TopHeaderMenu from "./components/Header/TopHeaderMenu/TopHeaderMenu";
import BottomHeaderMenu from "./components/Header/BottomHeaderMenu/BottomHeaderMenu";
import React from "react";

function App(){

    return (
        <div className={"pageDivineDiv"}>
                <header>
                    <TopHeaderMenu/>
                    <BottomHeaderMenu/>
                </header>
                <main>
                    <MainLayout/>
                </main>
                <footer>
                    <Footer/>
                </footer>
        </div>
    );
}

export default App;
