import { FaEdit, FaTrash } from "react-icons/fa";
import React from "react";

const List = ({ list, deleteHandler, editHandler }) => {
  return (
    <>
      {list.map((itemObj) => {
        const { id, name } = itemObj;
        return (
          <div key={id}>
            {name}
            <button onClick= {() => editHandler(id)}>
              <FaEdit />
            </button>
            <button onClick = {() => deleteHandler(id)}>
              <FaTrash />
            </button>
          </div>
        );
      })}
    </>
  );
};

export default List;
