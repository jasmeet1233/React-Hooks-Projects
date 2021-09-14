import React, { useState } from "react";
import textData from "./data";
import Form from "./Form";

function App() {
  const [paragraphCount, setParagraphCount] = useState("");
  const [displayParagraph, setDisplayParagraph] = useState([]);

  const handleParaCountChange = (e) => {
    const number = Number(e.target.value);
    setParagraphCount(number);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (paragraphCount > 0) {
      const newArr = textData.slice(0, paragraphCount);
      setDisplayParagraph(newArr);
    } else {
      setDisplayParagraph([textData[0]]);
    }
  };

  return (
    <article>
      <Form
        handleParaCountChange={handleParaCountChange}
        submitHandler={submitHandler}
        paragraphCount={paragraphCount}
      />
      {displayParagraph.map((para, i) => (
        <p key={i}>{para}</p>
      ))}
    </article>
  );
}

export default App;
