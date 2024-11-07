import { services } from "../data";

const Services = () => {
  return (
    <article className="section services" id="services">
      <section className="section-title">
        <h2>
          our <span>services</span>
        </h2>
      </section>
      <section className="section-center services-center">
        {services.map((service, id) => (
          <article key={id} className="service">
            <span className="service-icon">
              <i className={service.iconClass}></i>
            </span>
            <section className="service-info">
              <h4 className="service-title">{service.title}</h4>
              <p className="service-text">{service.text}</p>
            </section>
          </article>
        ))}
      </section>
    </article>
  );
};

export default Services;
