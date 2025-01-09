import React from "react";
import { Link } from "react-router-dom";
import Button from "../../common/Button";
import "./style.css";
import {motion} from "framer-motion";
import phone from "../../../assets/phone.png";
import gradient from "../../../assets/gradient.png";
function HeroSection() {
  return (
    <div className="heroSection">
      <div className="hero-div1">
        <motion.h1 initial={{opacity:0,y:80}} animate={{opacity:1,y:0}} transition={{duration:0.3}} className="hero-head1">Track Crypto</motion.h1>
        <motion.h1 initial={{opacity:0,y:80}} animate={{opacity:1,y:0}} transition={{duration:0.3,delay:0.3}} className="hero-head2">Real Time.</motion.h1>
        <motion.p initial={{opacity:0,y:80}} animate={{opacity:1,y:0}} transition={{duration:0.3,delay:0.6}} className="hero-para">
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div initial={{opacity:0,x:100}} animate={{opacity:1,x:0}} transition={{duration:0.3,delay:0.9}} className="hero-btns">
          <Link to="/dashboard">
            <Button text="Dashboard" name="btn1" />
          </Link>
          <Link to="/dashboard">
            <Button text="Share" name="btn2" />
          </Link>
        </motion.div>
      </div>
      <div className="hero-div2">
          <motion.img initial={{y:15}} animate={{y:-15}} transition={{duration:1.5,repeat:Infinity,type:"smooth",repeatType:"mirror"}}  className="img1" src={phone} alt="Image fail to load"/>
          <img className="img2" src={gradient} alt="Image fail to load"/>
      </div>
    </div>
  );
}

export default HeroSection;
