import React from "react";
import Logo from "../img/logo.png";
import SearchIcon from "../img/search.png";

const navLinks = ["Home", "Studio", "Works", "Contact"];

const Nav = () => {
  return (
    <nav className="w-full snap-center mx-auto text-white flex items-center justify-between py-5 px-72">
      <div className="flex items-center gap-3 ">
        <img src={Logo} alt="" width={60} />
        {navLinks.map((navLink) => (
          <a key={navLink} href={`#${navLink}`} className="text-md">
            {navLink}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <img className="cursor-pointer" src={SearchIcon} alt="" width={22} />
        <button className="bg-orange-300 px-3 py-1 text-md rounded">
          Hire Now
        </button>
      </div>
    </nav>
  );
};

export default Nav;
