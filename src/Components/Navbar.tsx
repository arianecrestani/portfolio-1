import React, { useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  console.log("Active link:", activeLink);

  return (
    <div id="navbar">
      <a
        href="#section1"
        className={activeLink === "home" ? "active-link" : ""}
        onClick={() => {
          setActiveLink("home");
        }}
      >
        Home
      </a>
      <a
        href="#section2"
        className={activeLink === "about" ? "active-link" : ""}
        onClick={() => setActiveLink("about")}
      >
        About Me
      </a>
      <a
        href="#section3"
        className={activeLink === "services" ? "active-link" : ""}
        onClick={() => setActiveLink("services")}
      >
        Projects
      </a>
      <a
        href="#section4"
        className={activeLink === "contact" ? "active-link" : ""}
        onClick={() => setActiveLink("contact")}
      >
        Contact
      </a>
    </div>
  );
};

export default Navbar;
