import React from "react";

const Nav = () => {
  const items = [
    {
      name: "Home Page",
      id: "home",
    },
    {
      name: "About",
      id: "about",
    },
    {
      name: "Skills",
      id: "skills",
    },
    {
      name: "Projects",
      id: "projects",
    },
    {
      name: "Contact",
      id: "contact",
    },
  ];
  return (
    <div className=" flex h-screen w-full flex-col items-center justify-center gap-6 text-2xl ">
      {items.map(({name, id}) => <a key={id} href={`#${id}`}>{name}</a>)}
    </div>
  );
};

export default Nav;
