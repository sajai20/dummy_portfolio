import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import instagram from '../../img/instagram.png'
import Linkedin from '../../img/linkedin.png'
import vector1 from '../../img/Vector1.png'
import vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hi! I Am </span>
                    <span>Sajai</span>
                    <span>Full Stack Developer with High level of experience
                        in web designing and web development,producting the quality work </span>
                </div>
                <button className=" button i-button">Hire me</button>
                <div className="i-icons">
                    <img src={Github} alt="github icon" />
                    <img src={Linkedin} alt="Linkedin icon" />
                    <img src={instagram} alt=" instagram icon" />
                </div>
            </div>
            <div className="i-right">
                i am right side
            </div>
        </div>
    )
}

export default Intro