import React, { createContext, useEffect, useRef, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {

  // Dark Mode Context
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );

  const element = document.documentElement;

  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  useEffect(() => {
    const onDarkQueryChange = (e) => {
      if (!("theme" in localStorage)) {
        if (e.matches) {
          element.classList.add("dark");
        } else {
          element.classList.remove("dark");
        }
      }
    };

    darkQuery.addEventListener("change", onDarkQueryChange);

    return () => {
      darkQuery.removeEventListener("change", onDarkQueryChange);
    };
  }, []);

  useEffect(() => {
    switch (themeMode) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        if (darkQuery.matches) {
          element.classList.add("dark");
        } else {
          element.classList.remove("dark");
        }
        break;
    }
  }, [themeMode]);

  const toggleThemeMode = () => {
    if (themeMode === "light") {
      setThemeMode("dark");
    } else if (themeMode === "dark") {
      setThemeMode("system");
    } else {
      setThemeMode("light");
    }
  };

  const isDarkMode =
    themeMode === "dark" || (themeMode === "system" && darkQuery.matches);
    //////////////


    // Drag Constraint
    const conRef = useRef(null);
    /////////////

    // Toggle Sidebar
    const [openSidebar, setOpenSidebar] = useState(false);

    const toggleSidebar = () => {
      setOpenSidebar(!openSidebar);
    }

  return (
    <DataContext.Provider value={{ themeMode, toggleThemeMode, isDarkMode, conRef, openSidebar, setOpenSidebar, toggleSidebar }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
