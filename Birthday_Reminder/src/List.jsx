import React from "react";

function List({ persons }) {
  return (
    <>
      <h2>list component</h2>
      <div>
        {persons.map((person) => {
          const { name, age, id, image } = person;
          return (
            <article key={id} className="person">
              <img src={image} />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}

export default List;
