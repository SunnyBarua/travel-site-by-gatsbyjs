import React from "react"
import "./HeroSection.css"
import video from "../../images/videoo.mp4"
import { Button } from "../ButtonElement"

const HeroSection = () => {
  return (
    <div className="hero__container">
      <video src={video} loop autoPlay muted></video>
      <div className="overlay"></div>
      <div className="hero__details">
        <h1>Travel More</h1>
        <p>Plan your nest trip today</p>

        <div className="hero__btns">
          <Button fontBig big primary>
            Get Started
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
