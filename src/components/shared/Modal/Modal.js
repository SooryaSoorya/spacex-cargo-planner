import React from "react";
import Spinner from "../Spinner/Spinner";
import "./Modal.scss";

const Modal = (props) => {
  const renderActions = () => {
    if (!props.onDecline) {
      return (
        <div className="actions">
          <button className="confirm ok" onClick={props.onAgree}>
            OK
          </button>
        </div>
      );
    } else {
      return (
        <div className="actions">
          <button className="confirm decline" onClick={props.onDecline}>
            CANCEL
          </button>
          <button className="confirm ok" onClick={props.onAgree}>
            OK
          </button>
        </div>
      );
    }
  };

  return (
    <div className="modal-container" onClick={props.onDrop}>
      <div className="message-content" onClick={(e) => e.stopPropagation()}>
        {props.loading ? <Spinner /> : null}
        {props.error ? (
          <h1 style={{ color: "rgb(240, 82, 43)" }}>{props.error}</h1>
        ) : (
          <h1>{props.message}</h1>
        )}
        {renderActions()}
      </div>
    </div>
  );
};

export default Modal;
