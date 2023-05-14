import React from "react"
import {Poster, CastPoster,SimplePoster} from "../Poster/poster.component"
import {settings,Simplesettings} from "../../config/PosterCarousal.config"
import Castsettings from "../../config/CastCarousal.config"

import Slider from "react-slick"
export const PosterSlider = (props) => {
    
    return(
        <>
        <div className="flex flex-col items-start py-4">
        <h1 className={
        `font-bold text-2xl p-4 ${props.isDark ? "text-white" : "text-gray-700"}`
        }
        >{props.title}</h1>
        <p className={
            `${props.isDark ? "text-white" : "text-gray-700"} text-sm"`}>{props.subtitle}</p>
        </div>
        <Slider {...settings}>
            {props.images.map((image) =>(
                <Poster {... image} isDark={props.isDark}/>
            ))}
        </Slider>       
        
        </>
    )
}

export const SimplePosterSlider = (props) => {
    
    return(
        <>
        <div className="flex flex-col items-start py-4">
        <h1 className={
        `font-bold text-2xl p-4 ${props.isDark ? "text-white" : "text-gray-700"}`
        }
        >{props.title}</h1>
        <p className={
            `${props.isDark ? "text-white" : "text-gray-700"} text-sm"`}>{props.subtitle}</p>
        </div>
        <Slider {...Simplesettings}>
            {props.images.map((image) =>(
                <SimplePoster {... image} isDark={props.isDark}/>
            ))}
        </Slider>       
        
        </>
    )
}

export const CastPosterSlider = (props) => {
    
    return(
        <>
        <div className="flex flex-col items-start py-4">
            
        <h1 className={
        `font-bold text-2xl p-4 ${props.isDark ? "text-white" : "text-gray-700"}`
        }
        >{props.title}</h1>
        <p className={
            `${props.isDark ? "text-white" : "text-gray-700"} text-sm"`}>{props.subtitle}</p>
        </div>
        <Slider {...Castsettings}>
            {props.images.map((image) =>(
                <CastPoster {... image} isDark={props.isDark}/>
            ))}
        </Slider>       
        
        </>
    )
}

export default PosterSlider;
