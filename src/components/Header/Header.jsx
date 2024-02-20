import React, { useContext } from "react";
import Container from "../Container";
import Logo from "./Logo";
import DarkModeBtn from "./DarkModeBtn";
import { DataContext } from "../Context/DataContext";
import SidebarBtn from "../Sidebar/SidebarBtn";

const Header = () => {
  const { isDarkMode } = useContext(DataContext);
  return (
    <header className=" relative h-[80px] border-tealBlue/20 dark:border-lightBlue/20">
      <div className=" flex h-full items-center justify-between py-4">
        <h1
          className="relative z-40 select-none"
          // onContextMenu={(e) => e.preventDefault()}
        >
          <Logo />
        </h1>

        <SidebarBtn/>
      </div>
    </header>
  );
};

export default Header;
