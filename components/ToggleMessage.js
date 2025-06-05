//component that uses state to toggle if you can see message, conditional render based on state.
import { useState } from 'react';

export default function ToggleMessage() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <button onClick={() => setShowMessage(!showMessage)}>
        {showMessage ? 'Hide Message' : 'Show Message'}
      </button>
      {showMessage && <p>This is a toggled message!</p>}
    </div>
  );
}
