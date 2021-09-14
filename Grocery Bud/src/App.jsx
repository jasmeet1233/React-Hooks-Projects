import React, { useEffect, useState } from "react";
import Alert from "./Alert";
import List from "./List";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [alert, setAlert] = useState({ show: false, message: "" });
  const [editing, setEditing] = useState(false);
  const [editObjID, setEditObjID] = useState("");

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);


  const submitHandler = (e) => {
    e.preventDefault();
    if (editing && text) {
      const updatedList = list.map((itemObj) => {
        if (itemObj.id !== editObjID) return itemObj;
        else {
          itemObj.name = text;
          return itemObj;
        }
      });
      setList(updatedList);
      alertMessageDisplay(true, "Item UPdated");
      setEditing(false);
      setText("");
    } else if (!text) {
      alertMessageDisplay(true, "Please enter a value");
    } else {
      const groceryObj = { name: text, id: new Date().getTime().toString() };
      setList([...list, groceryObj]);
      setText("");
      alertMessageDisplay(true, "item Added");
    }
  };

  const deleteHandler = (id) => {
    const updatedList = list.filter((itemObj) => itemObj.id !== id);
    setList(updatedList);
    alertMessageDisplay(true, "item deleted");
  };

  const alertMessageDisplay = (show = false, message = "") => {
    setAlert({ show, message });
  };

  const editHandler = (id) => {
    setEditing(true);
    const editObj = list.find((itemObj) => itemObj.id === id);
    setText(editObj.name);
    setEditObjID(id);
  };

  return (
    <section>
      <h1>Grocery Bud</h1>
      {alert.show && (
        <Alert
          alertObj={alert}
          alertMessageDisplay={alertMessageDisplay}
          list={list}
        />
      )}
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onSubmit={submitHandler}>{editing ? "Update" : "Add"}</button>
      </form>
      <List
        list={list}
        deleteHandler={deleteHandler}
        editHandler={editHandler}
      />
      {list.length ? <button onClick={() => setList([])}>clear</button> : null}
    </section>
  );
}

export default App;
