const Service = () => {
  return (
    <section className="services" id="services">
      <h2 className="heading" style={{ textAlign: "center", fontSize: "3rem" }}>
        My <span>Services</span>
      </h2>
      <div className="services-container">
        <div className="services-box" data-aos="zoom-in-right">
          {/* <i class='bx bxl-react'></i> */}
          <i className="bx bx-code-alt" />
          <h3>Front End Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            exercitationem maxime ipsum accusamus.
          </p>
          <a
            href="https://github.com/rukundo-bahati"
            className="btn"
            target="_blank"
          >
            Read More
          </a>
        </div>
        <div className="services-box" data-aos="zoom-in-right">
          {/* <i class='bx bxl-nodejs'></i> */}
          <i className="bx bx-code-alt" />
          <h3>Backend Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            exercitationem maxime ipsum accusamus.
          </p>
          <a
            href="https://github.com/rukundo-bahati"
            className="btn"
            target="_blank"
          >
            Read More
          </a>
        </div>
        <div className="services-box" data-aos="zoom-in-right">
          <i className="bx bx-paint" />
          <h3>Web Design (UI/UX)</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            exercitationem maxime ipsum accusamus.
          </p>
          <a
            href="https://github.com/rukundo-bahati"
            className="btn"
            target="_blank"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Service;
