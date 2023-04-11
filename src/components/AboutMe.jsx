// import content
import { createElement, useState } from "react";
import { content } from "../Content";
// import modal package
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};
Modal.setAppElement("#root");

const AboutMe = () => {
  const { about } = content;
  return (
    <section className="min-h-fit " id="aboutme">

      {/* content */}
      <div className="md:container px-5  py-14">
        <h2 className="title" data-aos="fade-down">
          {about.title}
        </h2>
        <br />
          {about.about_content.map((info, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 400}
              className="bg-white  
               relative group w-full flex items-center
                gap-5 p-5 "
            >
              <div>
                <p className="italic">{info.para}</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default AboutMe;
