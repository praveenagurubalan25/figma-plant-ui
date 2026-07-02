import "./Navbar.css";

import logo from "../assets/logo.png";

import {
  FiSearch,
  FiShoppingBag,
  FiMenu,
  FiChevronDown,
} from "react-icons/fi";

export default function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* Logo */}

        <div className="navbar-logo">

          <img
            src={logo}
            alt="FloraVision Logo"
          />

          <h1>FloraVision.</h1>

        </div>

        {/* Navigation */}

        <nav className="navbar-links">

          <a
            href="#"
            className="active"
          >
            Home
          </a>

          <a href="#">
            Plants Type

            <FiChevronDown className="nav-arrow" />

          </a>

          <a href="#">
            More
          </a>

          <a href="#">
            Contact
          </a>

        </nav>

        {/* Right Icons */}

        <div className="navbar-icons">

          <button
            aria-label="Search"
            className="icon-btn"
          >
            <FiSearch />
          </button>

          <button
            aria-label="Cart"
            className="icon-btn"
          >
            <FiShoppingBag />
          </button>

          <button
            aria-label="Menu"
            className="icon-btn menu-btn"
          >
            <FiMenu />
          </button>

        </div>

      </div>

    </header>
  );
}