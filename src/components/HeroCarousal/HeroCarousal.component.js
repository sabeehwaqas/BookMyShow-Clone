import React from "react";
import {useState,useEffect} from "react"
import HeroSlider from "react-slick"
import { NextArrow,PrevArrow } from "./Arrow.component";
import axios from "axios"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const HeroCaraousal= ()=>{

    const [images, setImages] = useState([]);
    
    useEffect(() => {
        const requestNoWPlayingMovies = async() => {
            const getImages = await axios.get("/movie/now_playing");
            setImages(getImages.data.results);
        };
        requestNoWPlayingMovies();
    },[]);
    const settings = {
        arrows:true,
        autoplay:true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
      };

      const settingsLg= {
        autoplay:true,
        autoplaySpeed: 2000,
        arrows:true,
        centerMode: true,
        slidesToShow:1,
        slidesToScroll:1,
        ceterPadding:"300px",
        infinite:true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,

      }


      return (
        <>

        <div className="lg:hidden">
        <HeroSlider {...settings}>
            
            { 
                images.map((image) =>(
                    <div  className="w-25 h-64 md:h-80 py-3">
                        <img src={`http://image.tmdb.org/t/p/original${image.backdrop_path}`} 
                        alt="image" className="w-full h-full rounded-md"/>
                    </div>
                ))
            }

        </HeroSlider>
        </div>
        <div className="hidden lg:block">
        <HeroSlider {...settingsLg}>
            
            { 
                images.map((image) =>(
                    <div  className="w-full h-96 md:64 py-3 px-3">
                         <img src={`http://image.tmdb.org/t/p/original${image.backdrop_path}`} 
                        alt="image" className="w-full h-full rounded-md"/>
                    </div>
                ))
            }

        </HeroSlider>
        </div>
        </>
      )
}

export default HeroCaraousal;