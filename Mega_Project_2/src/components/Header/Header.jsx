import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import { Link,NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className=" fixed top-0 left-0 z-50 w-full bg-gradient-to-br from-yellow-50 to-zinc-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-19 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-3xl font-bold">
            Brightmatter.io
          </a>

          <nav className="hidden md:flex items-center gap-8 font-semibold">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/work">Our Work</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </nav>

          <button
      onClick={() => navigate("/contact")}
      className="hidden md:flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 font-semibold transition-colors duration-200 hover:bg-yellow-300"
    >
      Contact Me
      <FaArrowRightLong />
    </button>

          <button
            className="md:hidden text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {open && (
          <div className="mt-4 flex flex-col gap-4 md:hidden font-semibold">
             <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/work">Our Work</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>

            <button onClick={() => navigate("/contact")} className="mt-2 flex w-fit items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 font-semibold">
              Contact Me
              <FaArrowRightLong />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}