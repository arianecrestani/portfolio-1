import "./AboutMe.css";

const About = () => {
  return (
    <>
      <h1 className="global-header" id="aboutMe">
        <span>02 . About</span>
      </h1>
      <div className="about">
        <div className="about__aboutRow">
          <div className="about__body">
          <p>
            Hey! I'm Ariane Crestani, a full stack developer based in Berlin.
            I've been working in tech since 2021, building websites,
            applications, and digital products, and I also work with freelance
            clients.
          </p>
            <br />
            <p>
              I enjoy creating interactive, user-friendly, and high-performance
              experiences, with a strong focus on aesthetics and user
              experience. I also have experience working with e-commerce
              businesses and small brands using Shopify, helping them redesign
              and improve their online stores.
            </p>
            <br />
            <p>
              My background is focused on full stack development, and these are
              some of the technologies I work with:
            </p>
            <br />

            <div className="about__body-skills">
              <ul className="about__body-skills-1">
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Git &#38; Github</li>
                <li>GraphQL</li>
                <li>Next.js</li>
                <li>Shopify Customization</li>
                <li>Apps</li>
              </ul>
              <ul className="about__body-skills-2">
                <li>React</li>
                <li>Node.js</li>
                <li>Typescript</li>
                <li>Firebase</li>
                <li>Mongo</li>
                <li>Express</li>
                <li>UX</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
