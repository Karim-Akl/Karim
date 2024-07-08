import Lottie from "lottie-react";
import lapAnimation from "../../../public/Animation/Animation-1.json";
import "./hero.css";
const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <img src="./images/me.png" className="avatar" alt="" />
          {/* <div className="icon-verified"></div> */}
        </div>

        <h1 className="title">Full Stack Web Developer</h1>
        <div id="About"></div>

        <p className="sub-title">
          {`Hi, I'm Karim Akl. I am a passionate Full Stack Web Developer with a love for building diverse and innovative products. My recent projects have involved developing web applications using ReactJS on the front end and Node.js on the back end. I thrive on learning new technologies and applying them to create cool products that bring new ideas to life in various fields.

Skills:

Front-End Technologies: ReactJS, Redux, JavaScript, Tailwind, Bootstrap
Back-End Technologies: Node.js, Express.js
Databases: SQL
APIs: RESTful API, GraphQL
Programming Concepts: Object-Oriented Programming (OOP), Data Structures, Algorithms
`}
        </p>
        <div className="all-icons flex">
          <a href="https://x.com/KARIMAKL0">
            <div className="icon icon-x1"></div>
          </a>
          <a href="https://wa.me/+201093378681">
            <div className="icon icon-whatsapp"></div>
          </a>
          <a href="https://github.com/Karim-Akl">
            <div className="icon icon-github"></div>
          </a>
          <a href="https://linkedin.com/in/karim-akl-front-end">
            <div className="icon icon-linkedin"></div>
          </a>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie style={{ width: "300px" }} animationData={lapAnimation} />
      </div>
    </section>
  );
};

export default Hero;
