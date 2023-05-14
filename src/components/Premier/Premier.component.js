import React from "react"
import Slider from "react-slick"

import Poster from "../Poster/poster.component"

import {PremiersImages,NewPremiersImages} from "../../config/tempPoster.config"
import settings from "../../config/PosterCarousal.config"

export const Premier =() => {


    return (
        <>
        
        </>
    )
}

export const PremierNew =() => {

    
   

return (
    <>
    <div className="flex flex-col items-start py-4 px-4">
        <h3 className="text-white text-xl font-bold">Premiers</h3>
        <p className="text-white text-sm pl-2">Brand new release every Friday</p>
    </div>
    <Slider {...settings}>
        {NewPremiersImages.map((image) =>(
            <Poster {... image} isDark/>
        ))}
    </Slider>
    </>
)
}

