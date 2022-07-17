import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import Portfolio  from "./components/portfolio/Portfolio";
import Menu from "./components/menu/Menu";
import Topbar from "./components/topbar/Topbar";
// import "./app.scss"
import { useState } from "react";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
       <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Portfolio/>
      <Contact />
    </div>
    </div>
  );
};

export default App;