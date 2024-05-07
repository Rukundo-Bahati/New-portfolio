import {
  html,
  css,
  node,
  express,
  tailwind,
  bootstrap,
  c,
  react,
} from "../assets";
import Testimonial from "../testimonial/Testimonial";

const Experience = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }} data-aos='fade-down-right'>
        <h1
          style={{ color: "#754ef9", fontSize: "4rem", marginBottom: "1rem" }}
        >
          Experience
        </h1>
        <h2>These are Technologies I've worked with</h2>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "1rem",
        }}
      >
        <div>
          <Testimonial bg="orangered">
            <img src={html} style={{ width: "50%" }} />
            <h1>HTML</h1>
          </Testimonial>
          <Testimonial bg="blue">
            <img src={css} style={{ width: "50%" }} />
            <h1>Css</h1>
          </Testimonial>
        </div>
        <div>
          <Testimonial bg="#0ea">
            <img src={react} style={{ width: "50%" }} />
            <h1>React js</h1>
          </Testimonial>
          <Testimonial bg="green">
            <img src={node} style={{ width: "50%" }} />
            <h1>Node js</h1>
          </Testimonial>
        </div>
        <div>
          <Testimonial bg="purple">
            <img src={express} style={{ width: "50%" }} />
            <h1>Express js</h1>
          </Testimonial>
          <Testimonial bg="#0ef">
            <img src={tailwind} style={{ width: "50%" }} />
            <h1>Tailwind</h1>
          </Testimonial>
        </div>
        <div>
          <Testimonial bg="">
            <img src={c} style={{ width: "50%" }} />
            <h1>C</h1>
          </Testimonial>
          <Testimonial bg="#754ef9">
            <img src={bootstrap} style={{ width: "50%" }} />
            <h1>Bootstrap</h1>
          </Testimonial>
        </div>
      </div>
    </div>
  );
};

export default Experience;
