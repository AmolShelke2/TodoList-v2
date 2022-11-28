import React, { useState } from 'react';

import './ErrorModal.css';

const ErrorModal = () => {
  const [errorModalActive, setErrorModalActive] = useState(true);

  return (
    <div className={errorModalActive ? 'error-modal active' : 'error-modal'}>
      <p>Add a valid todo item</p>
      <button
        className="close-error-modal"
        onClick={() => setErrorModalActive(false)}
      >
        try again
      </button>
    </div>
  );
};

export default ErrorModal;
