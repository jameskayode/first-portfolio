

import { useContext } from "react";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Intro from "./Components/intro/Intro";
import ProductList from "./Components/ProductList/ProductList";
import Toogle from "./Components/toggle/Toogle";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
    <Toogle />
     <Intro/>
     <About/>
    <ProductList/>
    <Contact/>
    
    </div>
  );
};

export default App;
