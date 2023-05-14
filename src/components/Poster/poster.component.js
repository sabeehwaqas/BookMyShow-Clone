import React from "react";

export const Poster = (props) => {
  return (
    <div className="flex flex-col items-start gap-1 px-3">
      <div className="h-100">
        <img className="w-full h-full rounded-md" src={`http://image.tmdb.org/t/p/original${props.poster_path}`}
        alt={props.title} />
      </div>
      <h3 className={`text-lg font-bold ${props.isDark ? "text-white" : "text-gray-700"}`}>
        {props.original_title}
      </h3>
      <p
        className={`text-lg ${
          props.isDark ? "text-white" : "text-gray-700"
        } overflow-hidden`}
        style={{ maxWidth: "80%" }}
      >
        {props.subtitle}
      </p>
    </div>
  );
};

export const CastPoster = (props) => {
  return (
    <>
    <div className="flex flex-col items-center gap-1 px-3">
      <div className="h-32">
        <img className="w-full h-full rounded-full" src={props.src} alt={props.title} />
      </div>

      <h3 className={`text-md font-medium justify-self-center ${props.isDark ? "text-white" : "text-gray-700"}`}>
        {props.title}
      </h3>

      <p
        className={`text-lg pl-2 ${
          props.isDark ? "text-white" : "text-gray-700"
        } overflow-hidden justify-self-center`}
        style={{ maxWidth: "80%" }}>
        {props.subtitle}
      </p>
      </div>

    </>
  )
}


export const SimplePoster = (props) => {
  return (
    <div className="flex flex-col items-start gap-1 px-3">
      <div className="h-full">
        <img className="w-full h-full rounded-xl" src={`http://image.tmdb.org/t/p/original${props.poster_path}`}
        alt={props.original_title} />
      </div>
      <h3 className={`text-lg font-bold ${props.isDark ? "text-white" : "text-gray-700"}`}>
        {props.title}
      </h3>
      <p
        className={`text-lg ${
          props.isDark ? "text-white" : "text-gray-700"
        } overflow-hidden`}
        style={{ maxWidth: "80%" }}
      >
        {props.subtitle}
      </p>
    </div>
  );
};


export default Poster;