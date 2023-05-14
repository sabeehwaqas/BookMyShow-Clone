import React, { useEffect } from "react";
import { useState,UseEffect } from "react";
import axios from "axios"

import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";

import {Premier,PremierNew}  from "../components/Premier/Premier.component";

import PosterSlider from "../components/PosterSlider/PosterSlider.component";

import {PremiersImages,NewPremiersImages} from "../config/tempPoster.config"

const HomePage = () => {

    const [popularMovies,setPopularMovies] = useState([]);

    useEffect(() => {
        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get('/movie/popular');
            setPopularMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();

    },[])

    //console.log(popularMovies)

    const [upComingrMovies,setUpComingMovies] = useState([]);

    useEffect(() => {
        const requestUpComingrMovies = async () => {
            const getUpComingMovies = await axios.get('/movie/upcoming');
            setUpComingMovies(getUpComingMovies.data.results);
        };
        requestUpComingrMovies();

    },[])

    //top rated

    const [topRatedMovies,setTopRatedMovies] = useState([]);

    useEffect(() => {
        const requestTopRatedMovies = async () => {
            const getTopRatedMovies = await axios.get('/movie/upcoming');
            setTopRatedMovies(getTopRatedMovies.data.results);
        };
        requestTopRatedMovies();

    },[])

    const [airingTodayTv,setAiringTodayTv] = useState([]);

    useEffect(() => {
        const requestAiringTodayTv = async () => {
            const getAiringTodayTv = await axios.get('/tv/airing_today');
            setAiringTodayTv(getAiringTodayTv.data.results);
        };
        requestAiringTodayTv();

    },[])

    console.log(airingTodayTv)

    
    const [onTheAirTv,setOnTheAirTv] = useState([]);

    useEffect(() => {
        const requestOnTheAirTv = async () => {
            const getOnTheAirTv = await axios.get('/tv/airing_today');
            setOnTheAirTv(getOnTheAirTv.data.results);
        };
        requestOnTheAirTv();

    },[])

 


    return (
    <>
    <div className="flex flex-col gap-10 ">
        <div className="container mx-auto px-4">
            <div>
            <PosterSlider images={topRatedMovies} title="Top Rated Movies" />
            </div>
            <div>
                <img className="py-20" src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png" alt="endless entertainment any time"/>
            </div>
            <div>
                <h1 className ="text-2xl font-bold text-gray-800 mb-4">The Best of Live Events</h1>
                <EntertainmentCardSlider/>
            </div>

        </div>
        <div className="bg-butcolor-200 py-16">
            
            <div className="container mx-auto px-4">
            <div className="flex">
                <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" alt="rupay" className="px-5 w-full h-full"/>
            </div>
            <PosterSlider images={popularMovies} title="Popular Movies" subtitle="The Most liked Movies by the loyal viewers" isDark="True"/>
            </div>
        </div>

            
        <div className="container mx-auto px-4">
        <PosterSlider images={upComingrMovies} title="Up Coming Movies"/>
        </div>
                    
        <div className="container mx-auto px-4">
        <PosterSlider images={airingTodayTv} title="TV Series Airing Today"/>
        </div>
                    
        <div className="container mx-auto px-4">
        <PosterSlider images={onTheAirTv} title="TV Series On The Air"/>
        </div>
                    
        <div className="container mx-auto px-4">
        <PosterSlider images={popularMovies} title="Must Watch Movies"/>
        </div>
                    

    </div>
    </>
    )
}

export default HomePage;