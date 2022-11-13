import React from "react";
import "./navbar.css";
import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import { BsBookshelf } from "react-icons/bs";
import { GrServices } from "react-icons/gr";
import { FcContacts } from "react-icons/fc";
import { useState } from "react";

const Navbar = () => {
  const [activeNav, setactiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        onClick={() => setactiveNav("#")}
      >
        <AiFillHome />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        onClick={() => setactiveNav("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
        onClick={() => setactiveNav("#experiene")}
      >
        <BsBookshelf />
      </a>
      <a href="#services">
        <GrServices />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        onClick={() => setactiveNav("#contact")}
      >
        <FcContacts />
      </a>
    </nav>
  );
};

export default Navbar;
