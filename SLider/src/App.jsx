import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
import "./index.css";

function App() {
  const [people, setPeople] = useState(data);
  const [index, Setindex] = useState(0);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, name, image, title, quote } = person;
          let position = 'nextSlide';
          if(personIndex === index){
            position = 'activeSlide'
          }

          return (
            <article key={id} className = {position}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <button className="prev">
                <FiChevronLeft />
              </button>
              <button className="next">
                <FiChevronRight />
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default App;
