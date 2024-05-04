import React from 'react'

const Contact = () => {
  return (
    <div>
        {/* Contact section design */}
        <section className="contact" id="contact">
          <div className="contact-text">
            <h2 className="contact-heading">
              Contact <span>Me!</span>
            </h2>
            <h4>Let's work together</h4>
            <p>
              If you'd like to discuss a project, collaboration, or have any
              inquiries, feel free to reach out to me. I'm always excited to
              connect and explore new opportunities.
            </p>
            <div className="contact-list">
              <li>
                <a href="http://gmail.com" target="_blank">
                  <i className="bx bx-envelope" />
                  <p>rukundorca@gmail.com</p>
                </a>
              </li>
              <li>
                <i className="bx bx-phone" />
                <p>+250 790 052 180</p>
              </li>
            </div>
            <div className="contact-icons">
              <div className="social-media">
                <a
                  href="https://www.facebook.com/profile.php?id=61552645601283"
                  target="_blank"
                >
                  <i className="bx bxl-facebook" />
                </a>
                <a
                  href="https://www.instagram.com/accounts/edit/"
                  target="_blank"
                >
                  <i className="bx bxl-instagram" />
                </a>
                <a href="#">
                  <i className="bx bxl-linkedin" />
                </a>
                <a href="https://twitter.com/RUKUNDOBAH67947" target="_blank">
                  <i className="bx bxl-twitter" />
                </a>
              </div>
            </div>
          </div>
          <form action="#">
            <div className="input-box">
              <input type="text" placeholder="Full name" />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
              />
            </div>
            <div className="input-box">
              <input type="number" placeholder="Mobile Number" />
              <input type="text" placeholder="Email Subject" />
            </div>
            <textarea
              // name
              // id
              cols={30}
              rows={10}
              placeholder="Your Message"
              defaultValue={""}
            />
            <input
              type="submit"
              // name
              id="btn"
              className="btn"
              defaultValue="Send Message"
            />
          </form>
        </section>
    </div>
  )
}

export default Contact
