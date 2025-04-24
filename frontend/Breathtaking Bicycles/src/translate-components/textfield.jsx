import React, { useState } from "react";
import TranslateButton from "./TranslateButton.jsx";

function Textfield() {
  const [text, setText] = useState("");
  const [submittedMessages, setSubmittedMessages] = useState([]); // store all messages

  const handleTranslate = () => {
    if (text.trim() !== "") {
      setSubmittedMessages((prev) => [...prev, text]);
      setText("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleTranslate();
    }
  };

  return (
    <>
      {submittedMessages.map((msg, index) => (
        <p key={index} className="text-3xl bg-[#F5EEDC] p-4 mb-2">
          {msg}
        </p>
      ))}

      <input
        type="text"
        placeholder="type uw text hier"
        className="border-[2px] border-[#F5EEDC] p-2 rounded mr-2 w-full"
        onChange={(e) => setText(e.target.value)}
        value={text}
        onKeyDown={handleKeyDown}
      />

      <TranslateButton onClick={handleTranslate} />
    </>
  );
}

export default Textfield;
