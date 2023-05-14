import React from "react"
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import Poster from "../components/Poster/poster.component";
import PlaysFilter from "../components/Playfilter/PlaysFilter.component";


const Plays = () => {
    return (
    <>
<div className=" container mx-auto px-4">
    <div className="lg:flex lg:flex-row-reverse my-8">

        <div className="w-full lg:w-8/5">
            <h2 className="text-2xl font-bold mb-4 ">Events in Islamabad</h2>
            <div className="flex flex-wrap">
                <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
                    <Poster
                        src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAxNiBNYXkgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00356255-pnvzzyhfgd-portrait.jpg"
                        title="The Sound of Music"
                        subtitle="English Rs1000"
                    />
                </div>
                <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
                    <Poster
                        src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAxNiBNYXkgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00356255-pnvzzyhfgd-portrait.jpg"
                        title="The Sound of Music"
                        subtitle="English Rs1000"
                    />
                </div>
                <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
                    <Poster
                        src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAxNiBNYXkgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00356255-pnvzzyhfgd-portrait.jpg"
                        title="The Sound of Music"
                        subtitle="English Rs1000"
                    />
                </div>
                <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
                    <Poster
                        src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAxNiBNYXkgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00356255-pnvzzyhfgd-portrait.jpg"
                        title="The Sound of Music"
                        subtitle="English Rs1000"
                    />
                </div>
                <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
                    <Poster
                        src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAxNiBNYXkgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00356255-pnvzzyhfgd-portrait.jpg"
                        title="The Sound of Music"
                        subtitle="English Rs1000"
                    />
                </div>
                <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
                    <Poster
                        src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAxNiBNYXkgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00356255-pnvzzyhfgd-portrait.jpg"
                        title="The Sound of Music"
                        subtitle="English Rs1000"
                    />
                </div>
                <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
                    <Poster
                        src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAxNiBNYXkgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00356255-pnvzzyhfgd-portrait.jpg"
                        title="The Sound of Music"
                        subtitle="English Rs1000"
                    />
                </div>
                <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
                    <Poster
                        src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAxNiBNYXkgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00356255-pnvzzyhfgd-portrait.jpg"
                        title="The Sound of Music"
                        subtitle="English Rs1000"
                    />
                </div>
            </div>
        </div>
        <div className="hidden lg:block lg:w-2/6 mr-4 ">
            <h2 className="text-2xl font-bold mb-4 k">Filters</h2>
            <div>
                <PlaysFilter title="Date" tags={["Today","Tomorrow","This Weekend"]}/>
                <PlaysFilter title="Language" tags={["English","Urdu","Punjabi","Arabic","Pashto","Sindhi"]}/>
                <PlaysFilter title="Category" tags={["Comedy","Music","Religious","Action","Adventure","Educational"]}/>
                <PlaysFilter title="More Filters" tags={["Out Door","Online","Kids"]}/>
                <PlaysFilter title="Prices" tags={["Free","0 - 1000","1000 - 2000","2000 - 3000","More than 3000"]}/>
            </div>
        </div>

    </div>





</div>

    </>
    )
}
export default Plays;