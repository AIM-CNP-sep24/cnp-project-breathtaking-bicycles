import React from "react"
import { useState } from 'react';
import TranslateButton from './translateButton.jsx';


function textfield() {
  const [text, settext] = useState("");
    return (
        <>
         <h1 className="text-3xl bg-[#F5EEDC]">
          {text}
        </h1>
        <input 
        type="text"
        placeholder="type uw text hier"
        className="border-[2px] border-[#F5EEDC] p-2 rounded mr-2 w-full"
        onChange={(e) => settext(e.target.value)}
        />
        <TranslateButton />
      </>
    );
};

export default textfield;