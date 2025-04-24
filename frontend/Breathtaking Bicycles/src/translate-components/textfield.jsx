import React from "react"
import { useState } from 'react';

function textfield() {
  const [text, settext] = useState("");
    return (
        <>
        <input 
        type="text"
        placeholder="type uw text hier"
        className="border p-2 rounded mr-2"
        onChange={(e) => settext(e.target.value)}
        />
        <h1 class="text-3xl font-bold">
          {text}
        </h1>
      </>
    );
};

export default textfield;