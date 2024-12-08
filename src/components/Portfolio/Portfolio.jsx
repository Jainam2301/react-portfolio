import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Drum from "../../img/Drum.png";
import Fish from "../../img/Aquarium.png"
import { themeContext } from "../../Context";
import Simon from "../../img/Game-1.png";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="portfolio">
      {/* Heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* Slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://live-aquaria.onrender.com">
            <img src={Fish} alt="Aquarium" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://jainam2301.github.io/Simon-Game/">
            <img src={Simon} alt="Simon Game" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://jainam2301.github.io/Drum-Kit/">
            <img src={Drum} alt="Drum Kit" />
          </a>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Portfolio;
