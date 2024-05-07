import React, { useState, useEffect } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleSticky = () => {
      setIsSticky(window.scrollY > 100);
    };

    const handleScroll = () => {
      let scrollY = window.scrollY + 150;
      let sections = document.querySelectorAll("section");

      sections.forEach((sec) => {
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (scrollY >= offset && scrollY < offset + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleSticky);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleSticky);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const inputs = document.querySelectorAll("input");
    const textArea = document.querySelector("textarea");

    inputs.forEach((input) => {
      input.classList.toggle("bg-field", isDarkMode);
    });

    if (textArea) {
      textArea.classList.toggle("bg-field", isDarkMode);
    }

    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  return (
    <div style={{width: '100%'}}>
      {/* header design */}
      <header className={`header  ${isSticky ? "sticky" : ""}`}>
        <a href="#" className="logo">
          Portfolio.
        </a>
        <nav className={`navbar ${isMenuOpen ? "active" : ""} `}>
          <a href="#home" className={activeSection === "home" ? "active" : ""}>
            Home
          </a>
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
          >
            About
          </a>
          <a
            href="#services"
            className={activeSection === "services" ? "active" : ""}
          >
            Services
          </a>
          <a
            href="#portfolio"
            className={activeSection === "portfolio" ? "active" : ""}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
          >
            Contact
          </a>

          {/* darkmode icon */}
          <div className={isDarkMode ? "dark-mode" : ""}>
            {isDarkMode ? (
              <BsSun onClick={toggleDarkMode} id="darkmode-icon" />
            ) : (
              <BsMoon onClick={toggleDarkMode} id="darkmode-icon" />
            )}
          </div>
        </nav>
        <div className="icons">
          <div
            className={`bx ${isMenuOpen ? "bx-x" : "bx-menu"}`}
            id="menu-icon"
            onClick={toggleMenu}
          />
        </div>
      </header>
    </div>
  );
};

export default Nav;
