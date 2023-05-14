import React from "react"
import MovieHero from "../components/MovieHero/MovieHero.component"
import { BiMoviePlay} from "react-icons/bi"
import { CastPosterSlider } from "../components/PosterSlider/PosterSlider.component"
import { CastImages,CrewImages } from "../config/MoviePageImages"

const launchRazorPay = () => {
    let options = {
        key:"rzp_test_0okJmrQXTgewSY",
        amount:500,
        currency:"USD",
        name:"Book My Show Clone",
        description:"Movie Purchase on Rental",
        image:"https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
        handler: () => {
            alert('Payment Done')
        },
        theme: {color:"#c4242d"}
    }

    let rzp = new window.Razorpay(options);
    rzp.open();
}
const MoviePage= () =>  {
    
return(
    <>
    <MovieHero/>
    <div className="my-12 ml-16 container mx-auto px-4 lg:w-4/6">
        <div className="flex flex-col items-start gap-3">
            <h1 className="text-gray-800 font-bold text-2xl">About the movie</h1>
            <p className="font-sm">Our beloved band of misfits are settling into life on Knowhere. But it isn`t long before their lives are upended by the echoes of Rocket`s turbulent past. Peter Quill, still reeling from the loss of Gamora, must rally his team around him on a dangerous mission to save Rocket`s life - a mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.</p>
        </div>
    

        <div className="py-4">
            <hr />
        </div>

        <div>
            <h1 className="text-gray-800 font-bold text-2xl py-4 ">Top Offers for you</h1>
            <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 border-2 border-dashed rounded-md p-3 w-96">
                <div className="w-8 h-8">
                    <BiMoviePlay className="w-full h-full"/>
                </div>
                <div className="flex flex-col px-4 items-start">
                    <h3 className="text-gray-800 text-lg font-normal">10% Off on movie munchies!</h3>
                    <p className="text-gray-700 font-light">Tap to view details</p>
                </div>
            </div>
        </div>

        <div className="py-4">
            <hr />
        </div>

        <div>
            <div>
            <CastPosterSlider images={CastImages} title="Cast" />
            </div>
        </div>

        <div className="py-4">
            <hr />
        </div>

        <div>
            <div className="ml-0">
            <CastPosterSlider images={CrewImages} title="Crew" />
            </div>
        </div>
    </div>
    </>
)

}

export default MoviePage;