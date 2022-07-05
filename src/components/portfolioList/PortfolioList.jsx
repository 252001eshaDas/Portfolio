import "./portfolioList.css";
import { useContext } from "react";
import { ThemeContext } from "../../context";

export default function PortfolioList({ id, title, active, setSelected }) {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <li style={{backgroundColor: darkMode && "#333"}} 
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}