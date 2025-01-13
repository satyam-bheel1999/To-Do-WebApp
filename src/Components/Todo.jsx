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
      <div className="h-4/5 lg:h-2/3 lg:w-1/4 w-screen
       border rounded-md shadow-xl 
       relative top-8 p-7 lg:right-16 
       bg-white flex flex-col
       transition-transform duration-200 ease-out hover:-translate-y-4">
        <form className="flex flex-row lg:flex lg:flex-col">
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder="Enter your Task"
            className="border p-3 w-11/12"
          ></input>

          <div className="flex justify-center">
          <button
            onClick={HandleSubmit}
            className="relative lg:top-8 border 
            border-violet-300 rounded-3xl p-2 
            text-base font-bold hover:bg-violet-300 
            w-28 "
          >
            Add
          </button>

          </div>

          
        </form>
        <div className="relative top-16 text-center p-5 text-xl font-bold">
          {day}
        </div>
        <h1 className="relative top-20 text-center 
        font-extrabold text-2xl lg:hidden block ">
          Today's Task
        </h1>
        <div className="h-screen relative w-11/12 
        flex flex-col lg:hidden top-24 ">
          <h1 className="text-center font-extrabold 
          text-2xl hidden lg:block">
            {" "}
            Today's Task{" "}
          </h1>

          <ul className="">
            {array.map((item, index) => (
              <li
                style={{
                  textDecoration: item.completed ? "line-through" : "none",
                }}
                key={index}
                className="flex justify-between 
                bg-white p-3 text-2xl m-3 
                relative top-6 shadow-2xl 
                border rounded-full
                transition-transform duration-200 ease-out hover:-translate-y-4"
              >
                {item.text}
                <div className="">
                  <button onClick={() => HandleComplete(index)}>
                    <FontAwesomeIcon icon={faCheck} className="h-8 mr-6" />
                  </button>
                  <button onClick={() => HandleRemove(index)}>
                    <FontAwesomeIcon
                      icon={faCircleXmark}
                      className="h-8 mr-4"
                    />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="left-32 h-screen relative w-2/4 lg:flex flex-col hidden ">
        <h1 className="text-center font-extrabold text-2xl hidden lg:block relative mt-3">
          {" "}
          Today's Task{" "}
        </h1>

        <ul className="">
          {array.map((item, index) => (
            <li
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
              key={index}
              className="flex justify-between 
              bg-white p-3 text-2xl w-3/4 
              m-3 relative left-8 top-6 shadow-2xl 
              border rounded-full
              transition-transform duration-400 ease-out hover:-translate-y-2"
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
