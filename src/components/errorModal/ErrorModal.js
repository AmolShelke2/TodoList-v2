import React from 'react';

import './ErrorModal.css';

const ErrorModal = props => {
  return (
    <React.Fragment>
      <div className="overlay" onClick={props.onErrorConfirm} />
      <div className="error-modal">
        <h2>{props.title}</h2>
        <p>{props.errorMessage}</p>
        <button className="close-error-modal" onClick={props.onErrorConfirm}>
          Try Again
        </button>
      </div>
    </React.Fragment>
  );
};

export default ErrorModal;
