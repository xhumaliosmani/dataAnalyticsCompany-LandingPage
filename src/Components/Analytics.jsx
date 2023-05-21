import React from "react";
import Laptop from "../images/4955653.jpg";

const Analytics = () => {
  return (
    <div className="bg-white w-full py-16 px-4">
      <div className="mx-auto max-w-[1240px] grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" alt="laptop" src={Laptop} />
        <div className="justify-center flex flex-col mx-auto">
          <p className="justify-center flex mx-auto text-[#00df9a] font-bold">
            COSTUM DATA ANALYTICS DASHBOARD
          </p>
          <h1 className="py-2 justify-center flex mx-auto font-bold md:text-4xl sm:text-4xl text-2xl">
            Manage Data Analytics Centrally
          </h1>
          <p className="justify-center flex mx-auto text-center pt-6">
            Welcome to our data analytics company, where we transform raw
            information into actionable insights. With cutting-edge technology
            and a team of skilled analysts, we specialize in deciphering complex
            data sets to uncover valuable patterns and trends. Our data-driven
            solutions empower businesses to make informed decisions, optimize
            processes, and drive growth. Whether you need predictive modeling,
            data visualization, or performance tracking, our expertise in
            statistical analysis and machine learning ensures accurate and
            meaningful results. Trust us to unlock the power of your data and
            propel your organization towards success.
          </p>

          <button className="justify-center flex mx-auto w-[200px] bg-[#00df9a] hover:bg-[#00f2a5] rounded-md font-medium my-6 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
