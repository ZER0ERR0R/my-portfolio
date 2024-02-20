import React from "react";
import LandingImage from "./LandingImage";

const LandingPage = () => {
  return (
    <div>
      <div className="grid grid-cols-1 grid-rows-2 text-gray-900 dark:text-lightGray lg:grid-cols-2 lg:grid-rows-1 lg:gap-8 ">
        <div className=" order-2 flex h-full  flex-col justify-center text-center lg:order-1 lg:h-[650px] lg:text-left">
          <h1 className=" mb-3 text-3xl font-bold leading-relaxed md:mb-4 md:text-4xl lg:mb-2 lg:leading-loose xl:mb-4 xl:text-5xl">
            Hello, I'm{" "}
            <span className=" text-5xl text-tealBlue dark:text-lightBlue md:text-6xl xl:text-7xl">
              Adrian
            </span>
          </h1>
          <h2 className=" mb-3 text-2xl font-semibold leading-relaxed md:mb-4 md:text-3xl lg:mb-2 lg:leading-loose xl:mb-4 xl:text-4xl">
            <span className=" text-4xl text-tealBlue dark:text-lightBlue md:text-5xl xl:text-6xl ">
              Front-End
            </span>{" "}
            Developer
          </h2>

          <p className="mb-6 text-lg leading-[1.8] text-gray-900/60 dark:text-lightGray/60 md:px-20 lg:px-0">
            I'm a budding Web Developer with a passion for coding and
            creativity. Currently seeking opportunities to dive into the world
            of web development through internships, I'm eager to apply my skills
            and learn from seasoned professionals in the field.
          </p>
        </div>
        <div className=" order-1 flex h-[350px] lg:h-[500px] w-full items-center justify-center lg:order-2">
          {" "}
          <LandingImage />{" "}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
