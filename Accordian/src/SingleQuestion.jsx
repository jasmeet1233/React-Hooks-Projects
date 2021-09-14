import React, {useState} from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({ questionObj }) => {
  const { title, info } = questionObj;
  const [show, setShow] = useState(false)
  
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick = {() => setShow(curr => !curr)}>
          {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>   
      </header>
      {show && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;
