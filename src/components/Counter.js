import { useState, useRef } from 'react';

export const Counter = () => {
    const inputRef = useRef(null);
    const [charCount, setCharCount] = useState(0);
    const [wordCount, setWordCount] = useState(0);

  function clearText() {
    inputRef.current.value = "";
    setCharCount(0);
    setWordCount(0);
  }

  function handleChange(e) {
    setCharCount(e.target.value.length);
    setWordCount(e.target.value.trim().split(" ").length);
  }

  return (
    <section className="counter">
        <textarea ref={inputRef} onChange={handleChange} data-testid="textArea" placeholder="Type or paste your text"></textarea>
        <button onClick={clearText} className="btn btn-danger" data-testid="clearBtn" disabled={charCount === 0 ? "disabled" : ""}>Clear</button>
        <p className="result">
            <span data-testid="charCount">Character: {charCount}</span>
            <span data-testid="wordCount">Word: {wordCount}</span>
        </p>
    </section>
  )
}
