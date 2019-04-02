import React, { useRef, useState, useEffect } from "react";
import Toast from "./Toast";

const EMPTY_STR_MSG = "Nothing to copy!";
const SUCCESS_COPIED_MSG = "Copied to clipboard!";

const handleCopy = () => {};
const CopyToClipboard = props => {
  const inputRef = useRef(null);
  const [isShowToast, toggleToast] = useState(false);
  const [messageToast, setMsgToast] = useState(EMPTY_STR_MSG);
  useEffect(
    () => {
      const timeout = setTimeout(() => toggleToast(false), 3000);
      return () => {
        clearInterval(timeout);
      };
    },
    [isShowToast]
  );
  return (
    <div className="field">
      <textarea
        style={{ position: "absolute", left: "-9999999px" }}
        // readOnly
        ref={inputRef}
        value={props.value}
      />
      <button
        className="button"
        onClick={() => {
          if (props.value !== "") {
            if (navigator.userAgent.match(/ipad|iphone/i)) {
              const range = document.createRange();
              console.log(range);
              range.selectNodeContents(inputRef.current);
              console.log(range);
              const selection = window.getSelection();
              selection.removeAllRanges();
              selection.addRange(range);
              console.log(selection);
              inputRef.current.setSelectionRange(0, 999999);
            } else {
              inputRef.current.select();
            }
            document.execCommand("copy");
            setMsgToast(SUCCESS_COPIED_MSG);
            toggleToast(true);
          } else {
            setMsgToast(EMPTY_STR_MSG);
            toggleToast(true);
          }
        }}
      >
        {props.children}
      </button>
      <Toast show={isShowToast}>{messageToast}</Toast>
    </div>
  );
};
export default CopyToClipboard;
