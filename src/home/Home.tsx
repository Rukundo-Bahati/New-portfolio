import baba from "../assets/bahati.png";

const Home = () => {
  return (
    <div>
      <section id="home" className="home">
        <div className="home-content">
          <h3>Hello, It's Me</h3>
          <h1>RUKUNDO Bahati</h1>
          <h3>
            And I'm a <span className="text" />
          </h3>
          <p className="texts">
            I am a Fullstack Developer with over 3 years of extensive
            experience. <br />
            My expertise lies in creating website designs, front-end
            development, <br /> backend development, and many more aspects of
            web development.
          </p>
          <div className="social-media">
            <a
              href="https://www.facebook.com/profile.php?id=61552645601283"
              target="_blank"
            >
              <i className="bx bxl-facebook" />
            </a>
            <a href="https://www.instagram.com/accounts/edit/" target="_blank">
              <i className="bx bxl-instagram" />
            </a>
            <a href="https://www.linkedin.com" target="_blank">
              <i className="bx bxl-linkedin" />
            </a>
            <a href="https://twitter.com/RUKUNDOBAH67947" target="_blank">
              <i className="bx bxl-twitter" />
            </a>
          </div>
          <a href="./resume/RESUME.pdf" className="btn" download="RESUME.pdf">
            Download CV
          </a>
        </div>
      </section>
      <div className="profession-container">
        <div className="profession-box">
          <div className="profession" style={{}}>
            <i className="bx bxl-react" />
            <h3>Front End Developer</h3>
          </div>
          <div className="profession" style={{}}>
            <i className="bx bxl-nodejs" />
            <h3>Back End Developer</h3>
          </div>
          <div className="profession" style={{}}>
            <i className="bx bxl-adobe" />
            <h3>Web Designer</h3>
          </div>
          <div className="profession" style={{ zIndex: 3 }}>
            <i className="bx bxs-file-json" />
            <h3>MERN Stack</h3>
          </div>
          <div className="circle" />
        </div>
        <div className="overlay" />
      </div>
      <div className="home-img">
        <img src={baba} alt="Home image" />
      </div>
    </div>
  );
};

export default Home;
