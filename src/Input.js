import React, { useState } from "react";

const Input = ({ sendMessage }) => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const trimmedText = text.trim();
    if (trimmedText === "") {
      return;
    }
    setText("");
    sendMessage(trimmedText);
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          className="input"
          onChange={onChange}
          value={text}
          type="text"
          autoFocus={true}
          placeholder="Start typing your message..."
        />
        <button className="button">Send</button>
      </form>
    </div>
  );
};

export default Input;


