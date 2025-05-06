import React, { useEffect, useRef, useState } from "react";
import TranslateButton from "./TranslateButton.jsx";

function Textfield() {
  const [text, setText] = useState("");
  const [submittedMessages, setSubmittedMessages] = useState([]);
  const messagesEndRef = useRef(null);

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

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [submittedMessages]);

  return (
    <div className="flex flex-col justify-center h-screen px-4 bg-white">
      <div className="max-w-3xl w-full mx-auto">
        {/* bericht geschiedenis */}
        <div className="max-h-64 overflow-y-auto p-4 mb-6 rounded">
          {submittedMessages.map((msg, index) => (
            <p key={index} className="text-3xl mb-2 break-words m-2 bg-[#F5EEDC] pb-2">
              {msg}
            </p>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* text invoer */}
        <div className="flex">
          <input
            type="text"
            placeholder="type uw text hier"
            className="border-[2px] border-[#F5EEDC] p-2 rounded mr-2 w-full"
            onChange={(e) => setText(e.target.value)}
            value={text}
            onKeyDown={handleKeyDown}
          />
          <TranslateButton onClick={handleTranslate} />
        </div>
      </div>
    </div>
  );
}

export default Textfield;
