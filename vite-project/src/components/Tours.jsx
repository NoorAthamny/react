import { tours } from "../data";
const Tours = () => {
  return (
    <article className="section" id="tours">
      <h2 className="section-title">
        featured <span>tours</span>
      </h2>

      <section className="section-center featured-center">
        {tours.map((tour, id) => (
          <article key={id} className="tour-card">
            <section className="tour-img-container">
              <img src={tour.imgSrc} className="tour-img" alt={tour.title} />
              <p className="tour-date">{tour.date}</p>
            </section>
            <section className="tour-info">
              <h4>{tour.title}</h4>
              <p>{tour.description}</p>
              <section className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{" "}
                  {tour.location}
                </p>
                <p>{tour.duration}</p>
                <p>{tour.price}</p>
              </section>
            </section>
          </article>
        ))}
      </section>
    </article>
  );
};

export default Tours;
