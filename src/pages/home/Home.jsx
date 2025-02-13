import Profile from "../../assets/home.jpg"
import {Link} from "react-router-dom";
import {FaArrowRight} from 'react-icons/fa';
import"./home.css"


const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Ayenor Christopher.</span> Electrical and Computer Engineer
          </h1>
          <p className="home__description">
          I’m an Electrical and Computer Engineer with a strong foundation in Software Development and Embedded Systems. I design and optimize electrical circuits, communication networks, and embedded systems, while also developing software applications. My expertise spans hardware components like circuit boards and sensors, as well as software development for control systems and network solutions. This combination of skills allows me to bridge the gap between hardware and software, delivering innovative solutions for modern communication systems, smart devices, and software applications.
          </p>
          <Link to='/about' className="button buttonl">
            More About Me <span className="button__icon">  <FaArrowRight/>     
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block">
        
      </div>
    </section>
  );
}

export default Home