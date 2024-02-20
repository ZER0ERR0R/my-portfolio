import React, { useContext, useRef, useState } from "react";
import { DataContext } from "../Context/DataContext";
import { motion } from "framer-motion";

const SidebarBtn = () => {
  const { openSidebar, toggleSidebar, conRef } = useContext(DataContext);

  return (
    <motion.div
      className="fixed z-40 right-5 md:right-20 xl:right-48"
      // drag
      // dragConstraints={conRef}
      // dragMomentum={false}
    >
      <motion.button
        onClick={toggleSidebar}
        className={` relative z-40 cursor-pointer overflow-hidden rounded-full border   bg-lightGray p-2  transition-all ease-in after:absolute after:-left-full after:top-0 after:z-[1] after:h-full after:w-full after:rounded-[50%] after:duration-300 hover:border hover:border-lightGray hover:text-white  hover:shadow-tealBlue hover:after:left-0 hover:after:bg-tealBlue  dark:bg-gray-900  hover:dark:border-gray-900 hover:dark:text-gray-900 hover:dark:shadow-lightBlue hover:after:dark:bg-lightBlue ${openSidebar ? "bg-tealBlue text-lightGray dark:bg-lightBlue dark:text-gray-900 border-tealBlue dark:border-lightBlue" : "text-tealBlue dark:text-lightBlue border-transparent"}`}
      >
        <span className="relative z-10">
          <svg
            width={40}
            height={40}
            viewBox="0 0 137 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M0 0H127C132.523 0 137 4.47715 137 10V10H10C4.47715 10 0 5.52285 0 0V0Z"
              className={` fill-current duration-300 ${openSidebar && "-translate-y-6 translate-x-5 rotate-[45deg]"} `}
            />
            <motion.path
              d={`${!openSidebar ? "M0 45H100C105.523 45 110 49.4772 110 55V55H10C4.47715 55 0 50.5228 0 45V45Z" : "M0 45H100C105.523 45 137 49.4772 137 55V55H10C4.47715 55 0 50.5228 0 45V45Z"}`}
              className={` fill-current duration-300 ${openSidebar && "-translate-x-2 translate-y-10 -rotate-[45deg]"} `}
            />
          </svg>
        </span>
      </motion.button>
    </motion.div>
  );
};

export default SidebarBtn;
