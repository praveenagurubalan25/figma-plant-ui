const reviews = [
  {
    id: 1,
    name: "Emma Watson",
    review:
      "The plants arrived fresh and healthy. My living room looks amazing now!",
    rating: "★★★★★",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "John Smith",
    review:
      "Excellent quality and fast delivery. Highly recommend FloraVision.",
    rating: "★★★★★",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Sophia Lee",
    review:
      "Beautiful plants with great customer service. Will definitely order again.",
    rating: "★★★★★",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

function Reviews() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        💚 Customer Reviews
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-[#13261c] rounded-3xl p-8 text-center hover:scale-105 transition duration-300"
          >
            <img
              src={review.image}
              alt={review.name}
              className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-green-500"
            />

            <h3 className="text-2xl font-semibold mt-5">
              {review.name}
            </h3>

            <p className="text-yellow-400 text-xl mt-2">
              {review.rating}
            </p>

            <p className="text-gray-300 mt-5 leading-7">
              "{review.review}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;