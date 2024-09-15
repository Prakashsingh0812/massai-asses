// src/UseRefExamples.js

import React, { useRef, useEffect } from 'react';

const UseRefExamples = () => {
  // Step 1: Creating a Focusable Input Field
  const focusableInputRef = useRef(null);

  useEffect(() => {
    // Automatically focus on input field when component mounts
    focusableInputRef.current.focus();
  }, []);

  // Step 2: Managing Uncontrolled Component
  const uncontrolledInputRef = useRef(null);

  const handleInputChange = () => {
    console.log(uncontrolledInputRef.current.value);
  };

  // Step 3: Interacting with a DOM Element
  const divRef = useRef(null);

  const handleDivClick = () => {
    divRef.current.style.backgroundColor = 'lightblue';
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Step 1: Focusable Input Field */}
      <div style={{ marginBottom: '20px' }}>
        <h2>Focusable Input Field</h2>
        <input ref={focusableInputRef} type="text" placeholder="Focus on mount" />
      </div>

      {/* Step 2: Uncontrolled Component */}
      <div style={{ marginBottom: '20px' }}>
        <h2>Uncontrolled Input Field</h2>
        <input
          ref={uncontrolledInputRef}
          type="text"
          placeholder="Type here"
          onChange={handleInputChange}
        />
        <p>Current Input: {uncontrolledInputRef.current?.value}</p>
      </div>

      {/* Step 3: Interacting with a DOM Element */}
      <div style={{ marginBottom: '20px' }}>
        <h2>Change Background Color</h2>
        <div
          ref={divRef}
          onClick={handleDivClick}
          style={{
            width: '200px',
            height: '100px',
            backgroundColor: 'lightgray',
            cursor: 'pointer',
            textAlign: 'center',
            lineHeight: '100px',
          }}
        >
          Click me to change color
        </div>
      </div>
    </div>
  );
};

export default UseRefExamples;
