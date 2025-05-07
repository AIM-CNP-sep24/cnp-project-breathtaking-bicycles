import React, { useEffect, useRef, useState } from "react";
import TranslateButton from "./TranslateButton.jsx";

function Textfield() {
  const [text, setText] = useState("");
  const [submittedMessages, setSubmittedMessages] = useState([]);
  const messagesEndRef = useRef(null);
  const enLanguageCode = "en";
  const nlLanguageCode = "nl";

  const  handleTranslate = async () => {
    if (text.trim() !== "") {
      var detectionResponse = await fetch("http://127.0.0.1:5000/detect", {
        method: "POST",
        body: JSON.stringify({
          q: text
        }),
        headers: {
          "Content-type": "application/json"
        }
      });
    
      var [detectedLanguageObject] = await detectionResponse.json();
      var targetLanguage;
      if (detectedLanguageObject.language == "nl") {
        targetLanguage = enLanguageCode;
      } else if (detectedLanguageObject.language == "en") {
        targetLanguage = nlLanguageCode
      } else {
        console.log("This feature has only been worked out for nl en translation.")
      }

      var translationResponse = await fetch("http://127.0.0.1:5000/translate", {
        method: "POST",
        body: JSON.stringify({
          q: text,
          source: "auto",
          target: targetLanguage,
        }),
        headers: {
          "Content-type": "application/json"
        }
      });

      var translationObject = await translationResponse.json();

      console.log("detected language: " + detectedLanguageObject.language);
      console.log("transalted text: " + translationObject.translatedText)
      setSubmittedMessages((prev) => [...prev, translationObject.translatedText]);
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
