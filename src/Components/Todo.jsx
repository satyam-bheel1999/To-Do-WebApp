import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

function Todo() {
  const [input, setInput] = useState("");

  const [array, setArray] = useState([]);

  let time = new Date();

  let day = time.toLocaleDateString();


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
      <div className="h-2/3 w-80 border rounded-md shadow-xl relative top-8 right-36 p-7 bg-white flex flex-col ">
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

          <button
            onClick={HandleSubmit}
            className="relative top-8 border border-yellow-300 rounded-3xl p-2 text-base font-bold hover:bg-yellow-200 "
          >
            Add
          </button>

          
        </form>
        <div className="relative top-24 text-center p-5 text-xl font-bold">{day}</div>
      </div>

      <div className="left-32 h-screen relative w-2/4 flex flex-col">
        <h1 className="text-center font-extrabold text-2xl"> Today's Task </h1>
        <ul className="">
          {array.map((item, index) => (
            <li
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
              key={index}
              className="flex justify-between bg-orange-200 p-3 text-2xl w-3/4 m-3 relative left-8 top-6 shadow-2xl border rounded-full" 
            >
              {item.text}
              <div className="">
                <button onClick={() => HandleComplete(index)}>
                  <FontAwesomeIcon icon={faCheck} className="h-8 mr-6" />
                </button>
                <button onClick={() => HandleRemove(index)}>
                  <FontAwesomeIcon icon={faCircleXmark} className="h-8 mr-4" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todo;
