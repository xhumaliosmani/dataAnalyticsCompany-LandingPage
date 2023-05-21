import React from 'react'
import Single from '../images/single.png'
import Double from "../images/double.png";
import Tripple from "../images/triple.png";


const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full">
          <img src={Single} alt="single" />
        </div>
        <div className="w-full">
          <img src={Double} alt="double" />
        </div>
        <div className="w-full">
          <img src={Tripple} alt="triple" />
        </div>
      </div>
    </div>
  );
}

export default Cards