import React, { useState } from "react";

const Form = (props) => {
  const [input, setInput] = useState("");
  const changeHandler = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.userProfile(input);
    console.log(input);
    setInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        onChange={changeHandler}
        type="text"
        placeholder="Github username"
        value={input}
      ></input>
    </form>
  );
};

export default Form;
