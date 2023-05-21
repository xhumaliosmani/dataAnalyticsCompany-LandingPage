import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="uppercase  font-bold p-2 md:text-2xl sm:text-xl text-sm ">
          Growing With Data{" "}
          <span className="underline hover:text-[#35dc83]">Analytics</span>
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow With Data
        </h1>
        <div className="flex justify-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Fast, Flexible Financing for{" "}
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold underline underline-offset-4 text-gray-200/80 pl-4"
            strings={["BTB", "SAAS", "BTC"]}
            typeSpeed={80}
            backSpeed={90}
            loop
          />
        </div>
        <p className="pt-4 font-semibold md:text-2xl text-gray-500 pl-8 pr-8">
          Monitor your Data Analytics to increase revenue for BTB, BTC and SAAS
          Platforms.
        </p>
        <div className="flex mx-auto">
          <button className="w-[200px] bg-[#ededed] text-black hover:bg-[#cccccc] mx-4 rounded-md font-medium my-6 py-3">
            Learn More
          </button>
          <button className="w-[200px] bg-[#00df9a] hover:bg-[#00f2a5] rounded-md font-medium my-6 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
