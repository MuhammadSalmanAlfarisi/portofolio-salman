import React from "react";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <div className="flex lg:border-r-gray-600 lg:border-r-4  lg:border-dashed bg-[#f9f9f9] scale-20 lg:scale-100 lg:p-3 p-0 m-0 lg:w-auto  justify-center items-center justify-items-center lg:grow  w-full">
      <div className="flex justify-center items-center justify-items-center w-[70%] align-middle content-center">
        <Cards />
      </div>
    </div>
  );
};

export default Home;
