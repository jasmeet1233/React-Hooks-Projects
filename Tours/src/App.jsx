import React, { useState, useEffect } from "react";
import "./index.css";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const getPersonsData = async () => {
    setLoading(true); //for surity

    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setTours(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPersonsData()
  }, []);

  if (loading) {
    return <h1>loading...</h1>;
  }

  const deleteTour = (id) => {
    const updatedTourArr = tours.filter((tourObj) => tourObj.id !== id);
    setTours(updatedTourArr);
  }

  if(tours.length === 0) {
    return (  
      <>
    <h1>NO tours left</h1>
    <button onClick = {() => getPersonsData()}>refresh</button>
    </>
    )
  }

  return (
    <main>
      <Tours toursArr = {tours} deleteTour = {deleteTour}/>
    </main>
  );
}

export default App;
