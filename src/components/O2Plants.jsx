import "./O2Plants.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { heroPlant } from "../data/plants";

export default function O2Plants() {

  return (

    <section className="o2-section">

      <h2 className="o2-title">
        Our Best O2
      </h2>

      <div className="o2-card">

        <div className="o2-image">

          <img
            src={heroPlant}
            alt="Plant"
          />

        </div>

        <div className="o2-content">

          <h3>
            We Have Small And Best O2 Plants Collection's
          </h3>

          <p>
            Oxygen-producing plants, often referred to as "O2 plants,"
            release oxygen into the atmosphere through photosynthesis.
          </p>

          <p>
            Many plants help filter toxins like formaldehyde,
            benzene and trichloroethylene, improving indoor air quality.
          </p>

          <div className="o2-bottom">

            <button>
              Explore
            </button>

            <div className="slider">

              <FiChevronLeft/>

              <span>
                01/04
              </span>

              <FiChevronRight/>

            </div>

          </div>

        </div>

      </div>

      <div className="dots">

        <span className="active"></span>

        <span></span>

        <span></span>

      </div>

    </section>

  );

}