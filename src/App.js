import './App.css';
import Header from "./UI/Header/Header";
import Footer from "./components/Footer/Footer";
import MainLayout from "./components/Main/MainLayout";

function App() {


    return (
        <div className={"pageDivineDiv"}>
                <header>
                    <Header/>
                </header>
                <main style={{background: "lightcyan"}}>
                    <MainLayout/>
                </main>
                <footer>
                    <Footer/>
                </footer>
        </div>
    );
}

export default App;
