import React, { useState } from "react";
import TranslateButton from "./TranslateButton.jsx";

function Textfield() {
  const [text, setText] = useState("");        
  const [submittedText, setSubmittedText] = useState("");  

  const handleTranslate = () => {
    setSubmittedText(text);  
  };

  return (
    <>
      <h1 className="text-3xl bg-[#F5EEDC] p-4">
        {submittedText}
      </h1>

      <input
        type="text"
        placeholder="type uw text hier"
        className="border-[2px] border-[#F5EEDC] p-2 rounded mr-2 w-full"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />

      <TranslateButton onClick={handleTranslate} />
    </>
  );
}

export default Textfield;
