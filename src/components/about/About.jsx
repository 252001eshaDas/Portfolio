import "./about.css";
import Farmer from "../../img/farmer.jpg";
import SkillsSection from '../Skills';

const About = () => {
  return (
    <div className="a" id="about">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Farmer}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        
        <p className="a-desc">
          Nomoskar...!! Myself Esha Das. I lives in West Bengal. 
          I am an Web Developer as well as an Artist. If you want your personal website you can contact me.
          You can buy crafts.You can contact me for paid Commission artworks, Price just starts with 
          500 plus shipping charges. So hurry up and get your orders..!
        </p>
        <div className="">
          {/* <img src={Farmer} alt="" className="a-award-img" /> */}
          <div className="skills-container">
            <p className="a-sub">Technical Skills</p>
            <SkillsSection skill={'PHP'} progress={'60%'} width={'60%'} />
            <SkillsSection skill={'React Js'} progress={'70%'} width={'70%'} />
            <SkillsSection skill={'MERN Stack'} progress={'80%'} width={'80%'} />
            <SkillsSection skill={'Java'} progress={'80%'} width={'80%'} />
            <SkillsSection skill={'Android Studio'} progress={'25%'} width={'25%'} />
            <SkillsSection skill={'UI/Ux Design'} progress={'76%'} width={'76%'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;