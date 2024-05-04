import homeImg  from '../assets/home-image.png'

const About = () => {
  return (
    <div>
          {/* about section */}
          <section id="about" className="about">
          <div className="about-img">
            <div className="image">
              <img src={homeImg} alt="About image" />
            </div>
          </div>
          <div className="about-content">
            <h2 className="heading">About <span>Me</span></h2>
            <h3>Hi, I am here To Help Your Next Project.</h3>
            <h3>A Fullstack Developer</h3>
            <p>
              I am a Skilled Designer with over 3 years of experience in the
              industry. My Passion lies in creating captivating website designs and
              implementing them through both frontend Development and Backend
              Development. I take pride in staying up-to-date with current design
              trends and leveraging my creativity to produce visually appealing and
              user-friendly websites.
            </p>
            <a href="#" className="btn" id="about-button">Read More</a>
          </div>
        </section>
    </div>
  )
}

export default About
