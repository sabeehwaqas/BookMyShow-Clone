import React from "react";
import { GrNext } from "react-icons/gr";

export const NextArrow = (props) => {
  //const {className, style, onClick }= props;
  return (
    <>

   <div
   className={props.className}
   style={{ ...props.style, 
    backgroundColor: "gray",
    borderRadius:"3px",
    paddingTop:"2px", 
    paddingRight:"30px", 
    paddingLeft:"2px", 
    marginRight:"-40px",
    width:"55px" , 
    height:"50px", 
    display:"flex", 
    alignItems:"center", 
    opacity: 0.5,
    content: <GrNext/>}}

   onClick={props.onClick}
    />
    </>
  );
};

export const PrevArrow = (props) => {
  return (
    <>

   <div
   className={props.className}
   style={{ ...props.style, 
    backgroundColor: "gray",
    borderRadius:"3px",
    paddingTop:"2px", 
    paddingLeft:"30px", 
    paddingRight:"2px", 
    marginLeft:"-40px",
    width:"55px" , 
    height:"50px", 
    display:"flex", 
    alignItems:"center", 
    opacity: 0.5,
    content: <GrNext/>}}

   onClick={props.onClick}
    />
    </>
  );
};





////////////////////////

export const CardNextArrow = (props) => {
  //const {className, style, onClick }= props;
  return (
    <>
   <div
   className={props.className}
   style={{ ...props.style, 
    backgroundColor: "black",
    width:"0px" , 
    height:"15px", 
    opacity: 0.9,
    

}
}
   onClick={props.onClick}
    />
    </>
  );
};

export const CardPrevArrow = (props) => {
  return (
    <>
   <div
   className={props.className}
   style={{ ...props.style, 
    backgroundColor: "black",
    width:"0px" , 
    height:"15px", 
    opacity: 0.9,
}}
   onClick={props.onClick}
    />
    </>
  );
};