import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.css";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import {
  featuredPortfolio,
  webPortfolio,
  CraftsPortfolio,
  mobPortfolio 
} from "../../data2";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    
    {
      id: "crafts",
      title: "Crafts",
    },
    {
      id: "photography",
      title: "Photography",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "crafts":
        setData(CraftsPortfolio);
        break;
      case "photography":
        setData(mobPortfolio); 
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio" style={{ backgroundColor: darkMode ? "#222" : "white",
    color: darkMode && "white"}} >
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img 
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}