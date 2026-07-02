import "./Hero.css";

import heroPlant from "../assets/plants/agi.png";

import { FaPlay, FaStar } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay">

        {/* LEFT SIDE */}

        <div className="hero-left">

          <h1>Earth's Exhale</h1>

          <p>
            Earth Exhale symbolizes the purity and vitality of nature,
            bringing fresh greenery into your home while creating a
            healthier and more peaceful environment.
          </p>

          <div className="hero-buttons">

            <button className="buy-btn">
              Buy Now
            </button>

            <button className="play-btn">
              <FaPlay />
            </button>

            <span>Live Demo</span>

          </div>

          {/* Review Card */}

          <div className="review-card">

            <img
              src="https://randomuser.me/api/portraits/women/45.jpg"
              alt="Customer"
            />

            <div>

              <h4>Ronnie Hamill</h4>

              <div className="stars">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              <p>
                I can't express how thrilled I am with my new natural
                plants. They instantly made my home feel fresh and
                relaxing.
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="hero-right">

          <div className="product-card">

            {/* Top Avatars */}

            

            {/* Plant */}

            <img
              src={heroPlant}
              alt="Aglaonema Plant"
              className="hero-plant"
            />

            {/* Product Details */}

            <div className="product-info">

              <span>Indoor Plant</span>

              <h2>Aglaonema Plant</h2>

              <button className="card-btn">
                Buy Now
              </button>

            </div>

            {/* Slider */}

            <div className="slider">

              <span className="active"></span>

              <span></span>

              <span></span>

            </div>

            {/* Arrow */}

            <FiChevronRight className="arrow" />

          </div>

        </div>

      </div>

    </section>
  );
}