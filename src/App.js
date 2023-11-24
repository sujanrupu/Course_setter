import React, { useState } from "react";
import data from './data'
import Tours from "./components/Tours";
import './App.css'

const App = () => {

  const [tours, setTours] = useState(data);

  const resetState = () => {
    setTours(data);
  };

  function removeTour0(id) {
    resetState();
  }
  function removeTour1(id) {
    const tours1 = data;
    const newTours1 = tours1.filter(tour => tour.id === 1 || tour.id === 2 || tour.id === 3 || tour.id === 4 || tour.id === 5);
    setTours(newTours1);
  }
  function removeTour2(id) {
    const tours1 = data;
    const newTours2 = tours1.filter(tour => tour.id === 6 || tour.id === 7 || tour.id === 8 || tour.id === 9 || tour.id === 10);
    setTours(newTours2);
  }
  function removeTour3(id) {
    const tours1 = data;
    const newTours3 = tours1.filter(tour => tour.id === 11 || tour.id === 12 || tour.id === 13 || tour.id === 14);
    setTours(newTours3);

  }
  function removeTour4(id) {
    const tours1 = data;
    const newTours4 = tours1.filter(tour => tour.id === 15 || tour.id === 16 || tour.id === 17);
    setTours(newTours4);
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour0={removeTour0} removeTour1={removeTour1} removeTour2={removeTour2} removeTour3={removeTour3} removeTour4={removeTour4}></Tours>
    </div>
  )
};

export default App;
