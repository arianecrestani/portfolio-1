import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__content">
        <h1>
          <span className="about__header-num">03.</span>Contact
        </h1>
        <br />
        <div>
          <FontAwesomeIcon
            icon={faEnvelope}
            size="2xl"
            style={{
              color: "gray",
              width: "2rem",
              height: "2rem",
              marginRight: "2rem",
            }}
          />{" "}
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2xl"
            style={{
              color: "gray",
              width: "2rem",
              height: "2rem",
              marginRight: "2rem",
            }}
          />
          <FontAwesomeIcon
            icon={faGithub}
            size="2xl"
            style={{
              color: "gray",
              width: "2rem",
              height: "2rem",
              marginRight: "2rem",
            }}
          />
        </div>

        <p className="contact__text-1">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or you want to say hi, I will try my best
          to get back to you!
        </p>
        <p className="contact__text-2"></p>
      </div>
      <a className="contact__link" href="mailto:ariane.mrv@gmail.com">
        Contact Me
      </a>
    </div>
  );
};

export default Contact;
