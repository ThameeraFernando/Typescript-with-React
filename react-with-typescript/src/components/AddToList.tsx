import React, { useState } from "react";

import { IState as Props } from "../App";
interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}
const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    notes: "",
    img: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: [e.target.value],
    });
  };
  const handleClick = (): void => {
    if (!input.name || !input.age || !input.img) {
      return;
    }
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.img,
        notes: input.notes,
      },
    ]);
    setInput({ name: "", age: "", notes: "", img: "" });
  };
  return (
    <div className="AddToList">
      <input
        value={input.name}
        type="text"
        placeholder="Name"
        className="AddToList-input"
        name="name"
        onChange={handleChange}
      />
      <input
        value={input.age}
        type="text"
        placeholder="Age"
        name="age"
        className="AddToList-input"
        onChange={handleChange}
      />
      <input
        value={input.img}
        type="text"
        placeholder="Image"
        name="img"
        className="AddToList-input"
        onChange={handleChange}
      />
      <textarea
        value={input.notes}
        placeholder="Notes"
        name="notes"
        className="AddToList-input"
        onChange={handleChange}
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add to the list
      </button>
    </div>
  );
};

export default AddToList;
