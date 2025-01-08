import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

function Todo() {
  const [input, setInput] = useState("");

  const [array, setArray] = useState([]);

  const HandleSubmit = (e) => {
    e.preventDefault();

    if (input.trim()) {
      setArray([...array, input]);
    }

    setInput("");
  };

//   const HandleComplete = (indexToComplete) =>{
//     setArray((prevArray) => prevArray.map((index) => index == indexToComplete ?  ))
//   }

  const HandleRemove = (indexToRemove) =>{

    setArray((prevArray) => prevArray.filter((_, index) => index !== indexToRemove))
  }




  return (
    <>
      <form>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Enter your Task"
        ></input>

        <button onClick={HandleSubmit}>Add</button>
      </form>

      <ul>
        {array.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => HandleComplete(index)}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
            <button onClick={()=> HandleRemove(index)}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
