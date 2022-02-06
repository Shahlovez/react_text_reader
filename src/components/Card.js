import React from "react";
import Slider from "react-slick";
import { useSpeechSynthesis} from "react-speech-kit";
import LeftArrow from "../assets/left-arrow.svg"
import RightArrow from "../assets/right-arrow.svg"
 


export default function Card({title,data}) {

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      prevArrow: <SlickArrowLeft />,
      nextArrow: <SlickArrowRight />,
    };
    const{speak}=useSpeechSynthesis();
    return (
    <div className="card__container">
    <h1>{title}</h1>
    <Slider {...settings} className="card__container--inner">
          {data.map((item, index) => {
            return (
              <div
              className="card__container--inner--card"
              key={index}
                onClick={()=> speak({text: item.message})}>
                <img src={item.url} alt="hero_img" /> 
              <h2>{item.message}</h2> 
              </div>
            );
          })}
    </Slider>
    </div>
      
    );
  }