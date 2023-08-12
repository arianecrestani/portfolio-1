// import React, { useState, useEffect } from "react";

const Navbar = () => {
  // const [sticky, setSticky] = useState(false);

  // useEffect(() => {
  //   const navbarElement = document.getElementById("navbar");
  //   const stickyOffsetTop = navbarElement ? navbarElement.offsetTop : 0;

  //   const handleScroll = () => {
  //     setSticky(window.pageYOffset >= stickyOffsetTop);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  return (
    // <nav>
    //   <a href="https://shop.braun.de/emailVerificationSent.account">
    //     LINK TEST
    //       </a>

    // </nav>
    <div id="navbar">
      <a href="#section1">Home</a>
      <a href="#section2">News</a>
      <a href="#section3">Contact</a>
      <a href="#section4">test</a>
    </div>
  );
};

export default Navbar;
