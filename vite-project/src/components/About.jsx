const About = () => {
  return (
    <article className="section" id="about">
      <h2 className="section-title">
        about <span>us</span>
      </h2>

      <section className="section-center about-center">
        <section className="about-img">
          <img
            src="./images/about.jpeg"
            className="about-photo"
            alt="awesome beach"
          />
        </section>
        <section className="about-info">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </section>
      </section>
    </article>
  );
};

export default About;
