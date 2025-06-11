import React, { useEffect, useRef, useState } from "react";
import TranslateButton from "./TranslateButton.jsx";
import MicrofoonButton from "./MicrofoonButton.jsx";

function Textfield({uiSettings, selectedLanguageZorgverlener, selectedLanguageZorgvrager}) {
  const [text, setText] = useState("");
  const [submittedMessages, setSubmittedMessages] = useState([]);
  const [recording, setRecording] = useState(true);
  const messagesEndRef = useRef(null);
  const shouldRestartRef = useRef(true);
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const taalHerkenning = new SpeechRecognition();
  
  //Spraakherkenning setup
  taalHerkenning.lang = 'nl-NL';
  taalHerkenning.continuous = true;


  function handleMicrophoneClick() {
    setRecording(!recording);
    if (recording){
      shouldRestartRef.current = true;
      console.log("start");
      taalHerkenning.start();
    } else {
      shouldRestartRef.current = false;
      console.log("stop");
      taalHerkenning.stop();
    }
    
    taalHerkenning.onresult = (event) => {
      const result = event.results[0][0].transcript;
      setText(result);
      handleTranslate();
    }

    taalHerkenning.onend = () => {
      if (shouldRestartRef.current == true){
        taalHerkenning.start();
      }
    }
  }


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
      if (detectedLanguageObject.language == selectedLanguageZorgvrager.code.toLowerCase()) {
        targetLanguage = selectedLanguageZorgverlener.code.toLowerCase();
      } else if (detectedLanguageObject.language == selectedLanguageZorgverlener.code.toLowerCase()) {
        targetLanguage = selectedLanguageZorgvrager.code.toLowerCase();
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
    <>
    <div className="flex flex-col justify-center pt-120 px-4 bg-white overflow-hidden">  
      <div className={`${uiSettings.font} w-full mx-auto`}>
        {/* Message History */}
        <div className="max-h-64 overflow-y-auto mb-6 rounded">
          {submittedMessages.map((msg, index) => (
            <div
              key={index}
              className={`pr-4 pl-4 mb-2 m-2 bg-[${uiSettings.colorPalette.colorOne}] pb-2 pt-2 rounded`}
            >
              <p className="text-md italic mb-1">{msg.original}</p>
              <p className="text-2xl break-words">{msg.translated}</p>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Text Input */}
        <textarea
          placeholder="Type uw text hier:"
          className="text-2xl resize-none border-2 border-[#F5EEDC] py-4 px-6 mb-10 rounded w-full"
          onChange={(e) => setText(e.target.value)}
          value={text}
          onKeyDown={handleKeyDown}
          id="textfield-textarea"
        />
        <div className="flex flex-row justify-center ml-[30%] mr-[30%]">
          <TranslateButton onClick={handleTranslate} uiSettings={uiSettings}/>
          <MicrofoonButton uiSettings={uiSettings} handleMicrophoneClick={handleMicrophoneClick} recording={recording}/>
        </div>
        {recording ? (<></>) : (
          <>
            <div className="text-3xl mt-20 text-center">
              <h1>Aan het luisteren...</h1>
            </div>
          </>
        )}
      </div>
    </div>
    </>
  );
}

export default Textfield;
