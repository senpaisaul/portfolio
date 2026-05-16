import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://linkedin.com/in/abhaysengar2109"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — abhaysengar2109
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.Tech Computer Science Engineering, VIT Bhopal University —
              2022–2026
            </p>
            <h4>Email</h4>
            <p>
              <a
                href="mailto:sengarabhay03@gmail.com"
                data-cursor="disable"
              >
                sengarabhay03@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/senpaisaul"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://linkedin.com/in/abhaysengar2109"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://skill-assessment-agent-one.vercel.app"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Live Project <MdArrowOutward />
            </a>
            <a
              href="https://abhaysengar.vercel.app"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Portfolio <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Built with passion <br /> by <span>Abhay Singh Sengar</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
