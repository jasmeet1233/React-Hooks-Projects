import React, { useState } from "react";
import "./index.css";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

function App() {
  const [index, setIndex] = useState(0)
  const {id,name,job,image,text} = reviews[index]

  const checkNumber = (number) => {
     if (number >= reviews.length) {
       return 0;
     } else if(number < 0){
       return (reviews.length-1);
     } else {
       return number;
     }
  }

  const nextBtnHandler = () => {
    const newIndex = index + 1
    setIndex(checkNumber(newIndex))
  }

  const prevBtnHandler = () => {
    const newIndex = index - 1;
    setIndex(checkNumber(newIndex));
  };
  
  const supriseBtnHandler = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if(randomNumber === index){
      randomNumber = randomNumber + 1
    }
    setIndex(checkNumber(randomNumber))
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button onClick = {prevBtnHandler}>
          <FaChevronLeft />
        </button>
        <button onClick = {nextBtnHandler}>
          <FaChevronRight />
        </button>
      <button className = 'random-btn' onClick = {supriseBtnHandler}>Suprise me</button>
      </div>
    </article>
  );
}

export default App;
