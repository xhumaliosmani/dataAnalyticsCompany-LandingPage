import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240] mx-auto grid md:grid-cols-3">
        <div className="lg:col-span-2 ">
          <h1 className="md:text4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & Tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4 ">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black "
              type="email"
              placeholder="Enter your E-Mail"
            />
            <button className="sm:mx-4 w-[200px] bg-[#00df9a] hover:bg-[#00f2a5] rounded-md font-medium my-6 py-3">
              Sign Up
            </button>
          </div>
          <p className="text-sm mx-10 flex-col justify-center text-center">
            Wee care about the protection of your data. Read our{" "}
            <span className="underline cursor-pointer text-[#00df9a]">
              Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
