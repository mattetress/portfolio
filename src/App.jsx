import { useState } from "react";
import Contact from "./components/contact/Contact";
import Info from "./components/info/Info";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Projects from "./components/projects/Projects";
import "./app.scss";

function App() {
    const [menuActive, setMenuActive] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(1);

    return (
        <div className="App">
            <Navbar menuActive={menuActive} setMenuActive={setMenuActive} />
            <Menu menuActive={menuActive} setMenuActive={setMenuActive} />
            <div className="sections">
                <Info />
                <Portfolio setCurrentSlide={setCurrentSlide} />
                <Projects
                    currentSlide={currentSlide}
                    setCurrentSlide={setCurrentSlide}
                />
                <Contact />
            </div>
        </div>
    );
}

export default App;
