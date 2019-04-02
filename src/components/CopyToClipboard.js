import React, { useState, useEffect } from "react";
import Toast from "./Toast";

const EMPTY_STR_MSG = "Nothing to copy!";
const SUCCESS_COPIED_MSG = "Copied to clipboard!";

const CopyToClipboard = props => {
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
      <button
        className="button"
        onClick={async () => {
          if (props.value !== "") {
            let selection = null, mark = null;

            mark = document.createElement('span');
            mark.textContent = props.value;
            // reset user styles for span element
            mark.style.all = 'unset';
            // prevents scrolling to the end of the page
            mark.style.position = 'fixed';
            mark.style.top = 0;
            mark.style.clip = 'rect(0, 0, 0, 0)';
            // used to preserve spaces and line breaks
            mark.style.whiteSpace = 'pre';
            // do not inherit user-select (it may be `none`)
            mark.style.webkitUserSelect = 'text';
            mark.style.MozUserSelect = 'text';
            mark.style.msUserSelect = 'text';
            mark.style.userSelect = 'text';
            const range = document.createRange();
            document.body.appendChild(mark);
            range.selectNode(mark);
            selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            const success = document.execCommand("copy");
            if(success){
              if(selection) selection.removeAllRanges();
              if(mark) document.body.removeChild(mark);
              setMsgToast(SUCCESS_COPIED_MSG);
              toggleToast(true);
            }
            else{
              setMsgToast(EMPTY_STR_MSG);
              toggleToast(true);
            }
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
