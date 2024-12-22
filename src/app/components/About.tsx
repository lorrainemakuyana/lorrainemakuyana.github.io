import React from "react";
import HeadingText from "./HeadingText";

const About: React.FC = () => {
  return (
    <section id="about" className="py-10">
      <HeadingText text="About Me" />
      <p>
        Hello! I'm Lorraine Makuyana, a passionate software engineer with a
        knack for developing innovative solutions to complex problems. With a
        strong foundation in both front-end and back-end technologies, I thrive
        in dynamic environments where I can continuously learn and grow.
      </p>
      <p>
        My expertise includes working with modern frameworks and libraries such
        as React, Angular, Node.js, and Express. I am also proficient in
        TypeScript, JavaScript, and Python. I enjoy collaborating with
        cross-functional teams to deliver high-quality software that meets user
        needs and business goals.
      </p>
      <p>
        When I'm not coding, you can find me exploring new technologies,
        contributing to open-source projects, or sharing my knowledge with the
        developer community through blogs and talks.
      </p>
    </section>
  );
};

export default About;
