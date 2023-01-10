import React, { useState, useRef } from "react";
import { createRoot } from "react-dom/client";
import { CSSTransition } from "react-transition-group";

export default function Example() {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const nodeRef = useRef(null);

  const keyFrames = `
    
  `;

  return (
    <div>
      {showButton && (
        <button onClick={() => setShowMessage(true)} size="lg">
          Show Message
        </button>
      )}
      <CSSTransition
        in={showMessage}
        nodeRef={nodeRef}
        timeout={300}
        classNames="slide"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <div ref={nodeRef} dismissible onClose={() => setShowMessage(false)}>
          <h1>Animated alert message</h1>
          <p>This alert message is being transitioned in and out of the DOM.</p>
          <button onClick={() => setShowMessage(false)}>Close</button>
        </div>
      </CSSTransition>
    </div>
  );
}

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(<Example />);
