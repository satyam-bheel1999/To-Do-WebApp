import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

function Todo() {
  const [input, setInput] = useState("");

  const [array, setArray] = useState([]);

  const HandleSubmit = (e) => {
    e.preventDefault();

    if (input.trim()) {
      setArray([...array, { text: input, completed: false }]);
    }

    setInput("");
  };

  const HandleComplete = (indexToComplete) => {
    setArray((prevArray) =>
      prevArray.map((item, index) =>
        index == indexToComplete ? { ...item, completed: true } : item
      )
    );
  };

  const HandleRemove = (indexToRemove) => {
    setArray((prevArray) =>
      prevArray.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <>
      <div className="h-2/3 w-80 border rounded-md shadow-xl relative top-8 right-36 p-7 bg-white ">
        <form className="flex flex-col">
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder="Enter your Task"
            className="border p-3"
          ></input>

          <button onClick={HandleSubmit} className="relative top-8 border border-yellow-300 rounded-3xl p-2 text-base font-bold hover:bg-yellow-200 ">Add</button>
        </form>
      </div>

      <div className="relative top-8 left-32 h-96 w-80 ">
        <h1 className="text-center font-extrabold text-2xl">Your To-Do</h1>
        <ul className="p-5">
          {array.map((item, index) => (
            <li
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
              key={index} className="flex justify-between" 
            >
              {item.text}
              <button onClick={() => HandleComplete(index)}>
                <FontAwesomeIcon icon={faCheck} />
              </button>
              <button onClick={() => HandleRemove(index)}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todo;
