import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { motion } from "framer-motion";
import SidebarBtn from "./SidebarBtn";
import Nav from "./Nav";

const Sidebar = () => {
  const { openSidebar } = useContext(DataContext);
  const sidebarVariant = {
    open: {
      clipPath: "circle(70% at 100% 50%)",
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 50,
      },
    },
    closed: {
      clipPath: "circle(0% at 100% 50%)",
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <>
      <motion.div
        className=" flex flex-col items-center font-sans justify-center text-lightGray dark:text-gray-900"
        animate={openSidebar ? "open" : "closed"}
      >
        <motion.div
          className=" fixed right-0 top-0 z-20 w-full overflow-hidden rounded-s-xl bg-tealBlue dark:bg-lightBlue md:w-[80%]"
          variants={sidebarVariant}
        >
          <Nav/>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Sidebar;
