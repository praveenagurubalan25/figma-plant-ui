import "./TopSelling.css";
import { FiShoppingBag } from "react-icons/fi";
import { topSellingPlants } from "../data/plants";

export default function TopSelling() {
  return (
    <section className="selling">

      <h2 className="selling-title">
        Our Top Selling Plants
      </h2>

      <div className="selling-grid">

        {topSellingPlants.map((plant) => (

          <div className="selling-card" key={plant.id}>

            <img
  src={plant.image}
  alt={plant.name}
  className="selling-image"
  draggable="false"
/>

            <div className="selling-content">

              <h3>{plant.name}</h3>

              <p>{plant.description}</p>

              <div className="selling-bottom">

                <h4>{plant.price}</h4>

                <button>
                  <FiShoppingBag/>
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}