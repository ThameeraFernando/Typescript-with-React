import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    notes?: string;
  }[];
}
function App() {
  // const [number, setNumber] = useState<number | string>(5);
  // const changeNumber = () => {
  //   setNumber("10");
  // };
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Thameera Fernando",
      url: "",
      age: 24,
      notes: "hello hello",
    },
  ]);

  // people.map((person) => {
  //   // console.log(person.name);
  // });

  return (
    <div className="App">
      <h1>People invited to our party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
