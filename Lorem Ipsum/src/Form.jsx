import React from "react";

const Form = ({submitHandler, handleParaCountChange, paragraphCount}) => {
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="paragraph"></label>
      <input
        type="number"
        name="paragraph"
        value={paragraphCount}
        onChange={handleParaCountChange}
      />
      <button type="submit">Generate</button>
    </form>
  );
};

export default Form;
