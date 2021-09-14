import React, { useState } from "react";
import List from "./List";
import "./index.css";
import data from './data.js';

function App() {

  const [persons, setPersons] = useState(data)

  return (
    <main>
      <section className="container">
        <h3>{persons.length} birthdays today</h3>
        <List persons = {persons}/>
        <button onClick={() => setPersons([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
