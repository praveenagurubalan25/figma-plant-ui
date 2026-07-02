import "./CustomerReview.css";

const reviews = [
  {
    name: "Shelly Russel",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Just got my hands on some absolutely awesome plants, and I couldn't be happier!",
  },
  {
    name: "Lula Rolfson",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Each one has its own unique charm and personality, and they've already started brightening up my space.",
  },
  {
    name: "Carol Huels",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "It's like bringing a little piece of nature indoors. My plant collection has never looked better!",
  },
];

export default function CustomerReview() {
  return (
    <section className="review-section">

      <h2 className="review-title">
        Customer Review
      </h2>

      <div className="review-grid">

        {reviews.map((r, i) => (
          <div className="review-card" key={i}>

            <div className="review-top">

              <img
  src={r.image}
  alt={r.name}
  className="avatar"
/>

              <div>

                <h3>{r.name}</h3>

                <div className="stars">
                  ★ ★ ★ ★ ☆
                </div>

              </div>

            </div>

            <p>{r.text}</p>

          </div>
        ))}

      </div>

    </section>
  );
}