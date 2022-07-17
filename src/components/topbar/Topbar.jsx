import "./topbar.css";


export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
        <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
          
        </div>
        <div className="right">
        <a href="#intro" className="logo">
            Nama-stay
          </a>
          <div className="itemContainer">
            <span>+917449849325</span>
          </div>
          <div className="itemContainer">
            <span>mailforesha@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}