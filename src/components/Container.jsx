import React, { useContext } from "react";
import { DataContext } from "./Context/DataContext";
import { motion } from "framer-motion";

const Container = ({ children }) => {
  const { conRef } = useContext(DataContext);

  return (
    <div
      className=" relative px-5 sm:px-12 md:px-28 lg:px-32 xl:px-40 2xl:px-64"
      ref={conRef}
    >
      {children}
    </div>
  );
};

export default Container;
