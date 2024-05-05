import me from "../assets/home-image.png";

const About = () => {
  return (
    <div>
      {/* about section */}
      <section
        id="about"
        className="about"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "0",
          fontSize: "1.7rem",
        }}
      >
        <div>
          <div style={{ position: "relative" }}>
            <img
              src={me}
              alt="My image"
              style={{
                width: "20%",
                height: "20%",
                borderRadius: "50%",
                background: "var(--main-color)",
              }}
            />
            <div
              className="info"
              style={{ position: "absolute", top: "1rem", right: "17rem" }}
            >
              <p>name: Rukundo Bahati</p>
              <p>Job Role: Frontend Developer</p>
              <p>Experience: 3+ years</p>
              <p>Address: Kigali, Rwanda</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <h3 style={{ textAlign: "center" }}>
              <span>Skills</span>
            </h3>
            <div
              style={{
                position: "relative",
                maxWidth: "500px",
                background: "var(--white-color)",
                margin: "0 15px",
                padding: "10px 20px",
                borderRadius: "7px",
              }}
            >
              <div style={{ width: "100%" }}>
                <span
                  style={{ display: "block", fontWeight: "600", color: "#333" }}
                >
                  HTML
                </span>
                <div
                  className="skill-bar"
                  style={{
                    width: "100%",
                    height: "8px",
                    background: "rgba(0, 0, 0, 0.1)",
                    borderRadius: "6px",
                  }}
                >
                  <span
                    className="skill-per"
                    style={{
                      position: "relative",
                      display: "block",
                      height: "100%",
                      width: "90%",
                      background: "blue",
                      borderRadius: "6px",
                    }}
                  >
                    <span
                      className="tooltip"
                      style={{
                        position: "absolute",
                        right: "-14px",
                        top: "-28px",

                      }}
                    >
                      90%
                    </span>
                  </span>
                </div>
                <span style={{}}>CSS</span>
                <div className="skill-bar" style={{}}>
                  <span className="skill-per"></span>
                  <span className="tooltip">90%</span>
                </div>
                <span style={{}}>React</span>
                <div className="skill-bar" style={{}}>
                  <span className="skill-per"></span>
                  <span className="tooltip">85%</span>
                </div>
                <span style={{}}>Node</span>
                <div className="skill-bar" style={{}}>
                  <span className="skill-per"></span>
                  <span className="tooltip">80%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h1 className="heading" style={{ textAlign: "center" }}>
              About <span>Me</span>
            </h1>
            <p style={{ margin: "1rem", lineHeight: "1.6" }}>
              I am a Skilled Frontend Developer, UI/UX Designer with over 3
              years of experience in the industry. My Passion lies in creating
              captivating website designs and implementing them through both
              frontend Development and Backend Development. I take pride in
              staying up-to-date with current design trends and leveraging my
              creativity to produce visually appealing and user-friendly
              websites.
            </p>
          </div>
          <div style={{ lineHeight: 1.6 }}>
            <p>
              Profile: <span>SOFTWARE ENGINEERING</span>
            </p>
            <p>
              Domain: <span>Software Development</span>
            </p>
            <p>
              Domain: <span>Full stack developer</span>
            </p>
            <p>
              Other Skills:<span>Excel, Git, MS Word, UI/UX Design</span>
            </p>
            <p>
              Interests: <span>Reading Books, Exploring New Things</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
