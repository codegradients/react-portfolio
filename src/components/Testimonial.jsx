import React from "react";
import data from "../assets/data.json";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>
      <section>
        {data.testmonial.map((i) => (
          <TestimonialCard
            name={i.name}
            feedback={i.feedback}
            imgSrc={i.imgSrc}
            key={i.name}
          />
        ))}
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback, imgSrc }) => (
  <article>
    <img src={imgSrc} alt={name} />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;

/*
  <TestimonialCard
    name={"JavaScript"}
    feedback={"JavaScript is a lightweight programming language."}
    imgSrc={"https://cdn-icons-png.flaticon.com/128/5968/5968292.png"}
  />
 <TestimonialCard
    name={"React JS"}
    feedback={"ReactJS is a JavaScript front-end library."}
    imgSrc={"https://cdn-icons-png.flaticon.com/512/875/875209.png"}
  />
  <TestimonialCard
    name={"Node Js"}
    feedback={"NodeJS is a backend framework of JavaScript."}
    imgSrc={"https://cdn-icons-png.flaticon.com/256/919/919825.png"}
  />
*/
