import me from '../assets/home-image.png';

const About = () => {
  return (
    <div>
      {/* about section */}
      <section
        id="about"
        className="about"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          gap: "0",
          fontSize: "1.7rem",
        }}
      >
     
        <div style={{ marginTop: "4rem", marginBottom: '4rem' }}
       data-aos="zoom-out-down">
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
              style={{
                position: "absolute",
                top: "1rem",
                right: "17rem",
                lineHeight: "1.36",
              }}
            >
              <p>
                Name: <span>Rukundo Bahati</span>
              </p>
              <p>
                Job Role: <span>Frontend Developer</span>
              </p>
              <p>
                Experience: <span>3+ years</span>
              </p>
              <p>
                Address: <span>Kigali, Rwanda</span>
              </p>
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
                <div style={{ marginBottom: "2rem" }}>
                  <span
                    style={{
                      display: "block",
                      fontWeight: "600",
                      color: "#333",
                    }}
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
                      marginTop: "0.4rem",
                    }}
                  >
                    <span
                      className="skill-per"
                      style={{
                        position: "relative",
                        display: "block",
                        height: "100%",
                        width: "90%",
                        background: "var(--main-color)",
                        borderRadius: "6px",
                        animation: "progress 0.4s ease-in-out forwards",
                      }}
                    >
                      <span
                        className="tooltip"
                        style={{
                          position: "absolute",
                          right: "-14px",
                          top: "-30px",
                          color: "#fff",
                          padding: "2px 3px",
                          background: "#4070fa",
                          borderRadius: "3px",
                        }}
                      >
                        90%
                      </span>
                    </span>
                  </div>
                </div>
                <div style={{ marginBottom: "2rem" }}>
                  <span
                    style={{
                      display: "block",
                      fontWeight: "600",
                      color: "#333",
                    }}
                  >
                    TAILWIND CSS
                  </span>
                  <div
                    className="skill-bar"
                    style={{
                      width: "100%",
                      height: "8px",
                      background: "rgba(0, 0, 0, 0.1)",
                      borderRadius: "6px",
                      marginTop: "0.4rem",
                    }}
                  >
                    <span
                      className="skill-per"
                      style={{
                        position: "relative",
                        display: "block",
                        height: "100%",
                        width: "90%",
                        background: "var(--main-color)",
                        borderRadius: "6px",
                        animation: "progress 0.4s ease-in-out forwards",
                      }}
                    >
                      <span
                        className="tooltip"
                        style={{
                          position: "absolute",
                          right: "-14px",
                          top: "-30px",
                          color: "#fff",
                          padding: "2px 3px",
                          background: "#4070fa",
                          borderRadius: "3px",
                        }}
                      >
                        90%
                      </span>
                    </span>
                  </div>
                </div>
                <div style={{ marginBottom: "2rem" }}>
                  <span
                    style={{
                      display: "block",
                      fontWeight: "600",
                      color: "#333",
                    }}
                  >
                    REACT JS
                  </span>
                  <div
                    className="skill-bar"
                    style={{
                      width: "100%",
                      height: "8px",
                      background: "rgba(0, 0, 0, 0.1)",
                      borderRadius: "6px",
                      marginTop: "0.4rem",
                    }}
                  >
                    <span
                      className="skill-per"
                      style={{
                        position: "relative",
                        display: "block",
                        height: "100%",
                        width: "90%",
                        background: "var(--main-color)",
                        borderRadius: "6px",
                        animation: "progress 0.4s ease-in-out forwards",
                      }}
                    >
                      <span
                        className="tooltip"
                        style={{
                          position: "absolute",
                          right: "-14px",
                          top: "-30px",
                          color: "#fff",
                          padding: "2px 3px",
                          background: "#4070fa",
                          borderRadius: "3px",
                        }}
                      >
                        90%
                      </span>
                    </span>
                  </div>
                </div>
                <div style={{ marginBottom: "2rem" }}>
                  <span
                    style={{
                      display: "block",
                      fontWeight: "600",
                      color: "#333",
                    }}
                  >
                    NODE JS
                  </span>
                  <div
                    className="skill-bar"
                    style={{
                      width: "100%",
                      height: "8px",
                      background: "rgba(0, 0, 0, 0.1)",
                      borderRadius: "6px",
                      marginTop: "0.4rem",
                    }}
                  >
                    <span
                      className="skill-per"
                      style={{
                        position: "relative",
                        display: "block",
                        height: "100%",
                        width: "90%",
                        background: "var(--main-color)",
                        borderRadius: "6px",
                        animation: "progress 0.4s ease-in-out forwards",
                      }}
                    >
                      <span
                        className="tooltip"
                        style={{
                          position: "absolute",
                          right: "-14px",
                          top: "-30px",
                          color: "#fff",
                          padding: "2px 3px",
                          background: "#4070fa",
                          borderRadius: "3px",
                        }}
                      >
                        90%
                      </span>
                    </span>
                  </div>
                </div>
         
              </div>
            </div>
          </div>
        </div>
        <div data-aos="zoom-out-up">
          <div>
            <h1 className="heading" style={{ textAlign: "center" }}>
              About <span>Me</span>
            </h1>
            <p style={{ margin: "1rem", lineHeight: "1.6" }}>
              I am a Skilled Designer with over 3 years of experience in the
              industry. My Passion lies in creating captivating website designs
              and implementing them through both frontend Development and
              Backend Development. I take pride in staying up-to-date with
              current design trends and leveraging my creativity to produce
              visually appealing and user-friendly websites.
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
              Job: <span>Full stack developer</span>
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
