import "./TrendyPlants.css";
import { FiShoppingBag } from "react-icons/fi";
import { trendyPlants } from "../data/plants";

export default function TrendyPlants() {
  return (
    <section className="trendy">

      <h2 className="trendy-heading">
        Our Trendy Plants
      </h2>

      {/* ---------- CARD 1 ---------- */}

      <div className="trend-card">

        <div className="plant-side">

          <img
            src={trendyPlants[0].image}
            alt={trendyPlants[0].name}
            className="plant-img"
          />

        </div>

        <div className="content-side">

          <span className="mini-title">
            Featured Plant
          </span>

          <h3>
            For Small Desk Decoration
          </h3>

          <p>
            Bring freshness to your workspace with this
            beautiful indoor plant. It purifies the air,
            reduces stress and creates a peaceful
            atmosphere around you.
          </p>

          <h4>Rs. 599/-</h4>

          <div className="buttons">

            <button className="explore-btn">
              Explore
            </button>

            <button className="bag-btn">

              <FiShoppingBag/>

            </button>

          </div>

        </div>

      </div>



      {/* ---------- CARD 2 ---------- */}



      <div className="trend-card reverse">

        <div className="content-side">

          <span className="mini-title">
            Premium Plant
          </span>

          <h3>
            Best Decoration For Your Room
          </h3>

          <p>
            A stylish plant that enhances every interior.
            Perfect for homes, offices and studios with
            minimal maintenance and maximum beauty.
          </p>

          <h4>Rs. 399/-</h4>

          <div className="buttons">

            <button className="explore-btn">

              Explore

            </button>

            <button className="bag-btn">

              <FiShoppingBag/>

            </button>

          </div>

        </div>



        <div className="plant-side">

          <img
            src={trendyPlants[1].image}
            alt={trendyPlants[1].name}
            className="plant-img second"
          />

        </div>

      </div>

    </section>
  );
}