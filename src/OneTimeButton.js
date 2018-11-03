import React, { useState } from 'react';

function OneTimeButton(props) {
  // Create new piece of state
  const [clicked, setClicked] = useState(false);

  function doClick() {
    props.onClick();
    setClicked(true);
  }

  return(
    <button 
      onClick={clicked ? undefined : doClick}
      disabled={clicked}
    >
      Click Me Once
    </button>
  );
}

export default OneTimeButton;