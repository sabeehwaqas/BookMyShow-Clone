import React from "react";
import {AiFillStar} from "react-icons/ai";
import { BiChevronRight} from "react-icons/bi";
import {AiOutlineShareAlt} from "react-icons/ai"


const launchRazorPay = () => {
    let options = {
        key:"rzp_test_0okJmrQXTgewSY",
        amount:2500,
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

const MovieHero = () => {
    return (
        <>
        <div className="md:hidden">
            <img
            src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/guardians-of-the-galaxy-vol-3-et00310794-1683529214.jpg"
            alt="poster"
            />
        </div>    
            



        <div className="hidden md:block lg:hidden">
        <img
            src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/guardians-of-the-galaxy-vol-3-et00310794-1683529214.jpg"
            alt="poster"
            />
        </div>    

        <div className="relative hidden lg:block" style={{height:"30rem"}}>
            <div className="absolute h-full w-full z-10" 
            style={{backgroundImage: "linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%)"}}
            />
        <div className="absolute z-30 w-full h-96 left-20 top-10 flex gap-10">
            <img 
            src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/guardians-of-the-galaxy-vol-3-et00310794-1683529214.jpg"
            alt=""
            className="h-full w-64 rounded-md w-2/5 h-full "
            />
            <div className="w-5/6">
            <div className="flex-col w-full">
                <div className="flex justify-end">
                    <h1 className="font-bold text-4xl text-white w-full py-2">Guardians of the Gallaxy Vol. 3</h1>
                    <AiOutlineShareAlt className="text-white "/>
                </div>
                <div className="text-white flex gap-3 items-end text-2xl py-3">
                    <div className="text-red-500 w-8 h-8" ><AiFillStar className="w-full h-full"/></div>
                    <div className="font-bold"><h1>9.3/10</h1></div>
                    <div className="flex items-end ">
                        <h1 className="text-sm">31.K votes</h1>
                        <BiChevronRight className="w-4 h-4"/>
                    </div>
                    
                </div>
                <div className="w-2/5 rounded-lg flex bg-gray-700 h-20 items-center gap-3 justify-around">
                        <div className="text-white">
                            <h1 className=" font-bold" >Add your rating & review</h1>
                            <h1 className="text-gray-400 font-sm">Your ratings matter</h1>
                        </div>
                        <div className="text-white font-medium">
                            <button className="h-10 bg-white text-black border-2 rounded-md px-2">Rate Now</button>
                        </div>
                </div>
                <div className="w-2/5 my-4 px-2 py-1 bg-gray-200 font-normal">
                    <div >
                        <h1 className="inline hover:underline underline-offset-2">2D,</h1>
                        <h1 className="inline hover:underline underline-offset-2 pl-1">MX4D 3D,</h1>
                        <h1 className="inline hover:underline underline-offset-2 pl-1">IMAX 2D,</h1>
                        <h1 className="inline hover:underline underline-offset-2 pl-1">3D,</h1>
                        <h1 className="inline hover:underline underline-offset-2 pl-1">4DX 3D,</h1>ICE 3D,
                        <h1 className="inline hover:underline underline-offset-2 pl-1">IMAX 3D,</h1>
                        <h1 className="inline hover:underline underline-offset-2 pl-1">3D SCREEN X</h1>
                    </div>
                </div>
                <div className="w-2/5 my-4 px-2 py-1 bg-gray-200 font-normal">
                    <div >
                        <h1 className="inline hover:underline underline-offset-2">English,</h1>
                        <h1 className="inline hover:underline underline-offset-2 pl-1">Hindi,</h1>
                        <h1 className="inline hover:underline underline-offset-2 pl-1">French</h1>

                    </div>
                </div>
                <div>
                    <h1 className="font-normal text-white">2h 30min . Action, Adventure, Comedy, Sci-Fi . UA . 5 May, 2023</h1>
                </div>
                <div>
                    <button onClick={launchRazorPay} className="my-6 bg-red-500 px-12 py-3 text-white font-bold rounded-md">Book tickets</button>
                </div>
            </div>
            </div>
            
        </div>
            <img
                src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/guardians-of-the-galaxy-vol-3-et00310794-1683529214.jpg"
                alt="poster"
                className="w-full h-full"
                />
         
        </div>
        </>
    )

}


export default MovieHero;