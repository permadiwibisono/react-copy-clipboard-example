import React, { useRef, useState, useEffect } from "react";
import Toast from "./Toast";

const EMPTY_STR_MSG = "Nothing to copy!";
const SUCCESS_COPIED_MSG = "Copied to clipboard!";

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
        // onFocus={e => e.preventDefault()}
        // onClick={e => e.preventDefault()}
        // onTouchStart={e => e.preventDefault()}
        style={{ position: "absolute", left: "-9999999px" }}
        readOnly
        ref={inputRef}
        value={props.value}
      />
      <button
        className="button"
        onClick={async () => {
          if (props.value !== "") {
            if (navigator.userAgent.match(/ipad|iphone/i)) {
              await setMsgToast("Your devices maybe not supported.");
              await toggleToast(true);

              const range = document.createRange();
              const oldReadOnly = inputRef.current.readOnly;
              inputRef.current.readOnly = false;
              range.selectNodeContents(inputRef.current);
              const selection = window.getSelection();
              selection.removeAllRanges();
              selection.addRange(range);
              inputRef.current.setSelectionRange(0, props.value.length);
              inputRef.current.readOnly = oldReadOnly;
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
