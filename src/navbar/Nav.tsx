import React, { useEffect, useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleSticky = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleSticky);

    return () => window.removeEventListener("scroll", handleSticky);
  }, []);

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let scrollY = window.scrollY + 150;
      let sections = document.querySelectorAll("section");
      let navLinks = document.querySelectorAll("header nav a");

      sections.forEach((sec) => {
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (scrollY >= offset && scrollY < offset + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
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
            className={activeSection === "portfolio" ? "active" : ""}
          >
            Services
          </a>
          <a
            href="#portfolio"
            className={activeSection === "contact" ? "active" : ""}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className={activeSection === "portfolio" ? "active" : ""}
          >
            Contact
          </a>
          {/* darkmode icon */}
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
