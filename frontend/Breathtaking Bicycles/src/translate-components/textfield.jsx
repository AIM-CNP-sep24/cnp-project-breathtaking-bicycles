import React, { useEffect, useRef, useState } from "react";
import TranslateButton from "./TranslateButton.jsx";

function Textfield() {
  const [text, setText] = useState("");
  const [submittedMessages, setSubmittedMessages] = useState([]);
  const messagesEndRef = useRef(null);
  const enLanguageCode = "en";
  const nlLanguageCode = "nl";

  const handleTranslate = async () => {
    if (text.trim() !== "") {
      const detectionResponse = await fetch("http://127.0.0.1:5000/detect", {
        method: "POST",
        body: JSON.stringify({ q: text }),
        headers: {
          "Content-type": "application/json",
        },
      });

      const [detectedLanguageObject] = await detectionResponse.json();
      let targetLanguage;

      if (detectedLanguageObject.language === "nl") {
        targetLanguage = enLanguageCode;
      } else if (detectedLanguageObject.language === "en") {
        targetLanguage = nlLanguageCode;
      } else {
        console.log("This feature has only been worked out for nl en translation.");
        return;
      }

      const translationResponse = await fetch("http://127.0.0.1:5000/translate", {
        method: "POST",
        body: JSON.stringify({
          q: text,
          source: "auto",
          target: targetLanguage,
          alternatives: 3,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });

      const translationObject = await translationResponse.json();

      console.log("detected language: " + detectedLanguageObject.language);
      console.log("translated text: " + translationObject.translatedText);

      setSubmittedMessages((prev) => {
        const newMessages = [...prev, {
          original: text,
          translated: translationObject.translatedText,
        }];
        return newMessages.slice(-2);
      });

      setText("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleTranslate();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [submittedMessages]);

  return (
    <div className="flex flex-col justify-center h-screen px-4 bg-white">
      <div className=" w-full mx-auto">
        {/* Message History */}
        <div className="max-h-64 overflow-y-auto  mb-6 rounded">
          {submittedMessages.map((msg, index) => (
            <div
              key={index}
              className="pr-4 pl-4 mb-2 m-2 bg-[#F5EEDC] pb-2 pt-2 rounded"
            >
              <p className="text-md text-gray-500 italic mb-1">{msg.original}</p>
              <p className="text-2xl break-words">{msg.translated}</p>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Text Input */}
        <textarea
          placeholder="type uw text hier"
          className="resize-none border-2 border-[#F5EEDC] pb-15 mb-15 pl-2 rounded mr-10 w-full"
          onChange={(e) => setText(e.target.value)}
          value={text}
          onKeyDown={handleKeyDown}
        />
        <TranslateButton onClick={handleTranslate} />
      </div>
    </div>
  );
}

export default Textfield;
