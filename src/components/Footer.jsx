import "./Footer.css";
import { FiSend } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left */}

        <div className="footer-left">

          <div className="logo">

            <img
              src="https://cdn-icons-png.flaticon.com/512/628/628324.png"
              alt="logo"
            />

            <h2>FloraVision.</h2>

          </div>

          <p>
            "From lush indoor greens to vibrant outdoor blooms,
            our plants are crafted to thrive and elevate your
            living environment."
          </p>

          <div className="social">

            <a href="#">FB</a>

            <a href="#">TW</a>

            <a href="#">LI</a>

          </div>

        </div>

        {/* Middle */}

        <div className="footer-middle">

          <h3>Quick Link's</h3>

          <a href="#">Home</a>

          <a href="#">Type's Of plant's</a>

          <a href="#">Contact</a>

          <a href="#">Privacy</a>

        </div>

        {/* Right */}

        <div className="footer-right">

          <h3>For Every Update.</h3>

          <div className="subscribe">

            <input
              type="email"
              placeholder="Enter Email"
            />

            <button>

              SUBSCRIBE

            </button>

          </div>

          <p>

            FloraVision © all right reserve

          </p>

        </div>

      </div>

    </footer>
  );
}