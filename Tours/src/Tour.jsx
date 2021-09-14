import React, { useState } from "react";

function Tour({ tourObj, deleteTour}) {
  const [readmore, setReadmore] = useState(false);
  const { image, price, info, name, id } = tourObj;

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-prize ">{price}</h4>
        </div>
        <p>
          {readmore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadmore(!readmore)}>
            {readmore ? "read less" : "show less"}
          </button>
        </p>
        <button className="delete-btn" onClick = {() => deleteTour(id)}>not interested</button>
      </footer>
    </article>
  );
}

export default Tour;
