import React from "react"
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import { PremiersImages } from "../config/tempPoster.config";
import Poster from "../components/Poster/poster.component";
import { SimplePosterSlider } from "../components/PosterSlider/PosterSlider.component";

const Plays = () => {
    return (
        <>
    <div className="container mx-auto">
        <div className="flex mt-16">
            <div className="w-2/5">
                <h1 className="mx-10 font-bold text-3xl">Filters</h1>








            </div>

            <div className="w-4/6">
                <h1 className="font-bold text-3xl">Events in Islamabad</h1>

                <div className="lg:mt-10  ">
                    <h1 className="inline px-2 py-1  bg-gray-100 rounded-2xl text-red-500 font-light border-2">Workshops</h1>
                    <h1 className="inline mx-1 my-2 px-2 py-1  bg-gray-100 rounded-2xl text-red-500 font-light border-2">Comedy Shows</h1>

                    <h1 className="inline mx-1 my-2 px-2 py-1  bg-gray-100 rounded-2xl text-red-500 font-light border-2">Music Shows</h1>
                    <h1 className="inline mx-1 my-2 px-2 py-1  bg-gray-100 rounded-2xl text-red-500 font-light border-2">Kids</h1>
                    <h1 className="inline mx-1 my-2 px-2 py-1  bg-gray-100 rounded-2xl text-red-500 font-light border-2">Online Streaming Event</h1>
                    <h1 className="inline mx-1 my-2 px-2 py-1  bg-gray-100 rounded-2xl text-red-500 font-light border-2">Performances</h1>
                    <h1 className="inline mx-1 my-2 px-2 py-1  bg-gray-100 rounded-2xl text-red-500 font-light border-2">Screening</h1>
                    <h1 className="inline mx-1 px-2 py-1  bg-gray-100 rounded-2xl text-red-500 font-light border-2">Exhibitions</h1>
                    <h1 className="inline mx-1 px-2 py-1  bg-gray-100 rounded-2xl text-red-500 font-light border-2">Meetups</h1>
                    <h1 className="inline mx-1 px-2 py-1  bg-gray-100 rounded-2xl text-red-500 font-light border-2">Conferences</h1>
                    <h1 className="inline mx-1 px-2 py-1  bg-gray-100 rounded-2xl text-red-500 font-light border-2">Talks</h1>
                </div>

                <div>
                    <SimplePosterSlider images={PremiersImages}/>
                    
                </div>
                
                <div>
                    <SimplePosterSlider images={PremiersImages}/>
                </div>
                
                <div>
                    <SimplePosterSlider images={PremiersImages}/>
                </div>
                
                <div>
                    <SimplePosterSlider images={PremiersImages}/>
                </div>
                
                <div>
                    <SimplePosterSlider images={PremiersImages}/>
                </div>
                
                <div>
                    <SimplePosterSlider images={PremiersImages}/>
                </div>
                
                <div>
                    <SimplePosterSlider images={PremiersImages}/>
                </div>

            </div>
        </div>
        
    </div>
        </>
    )
}

export default Plays;