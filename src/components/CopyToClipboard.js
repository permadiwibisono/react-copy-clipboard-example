import React, { useRef } from "react";

const CopyToClipboard = props => {
  const input = useRef(null);
  return (
    <div className="field">
      <textarea
        style={{ position: "absolute", left: "-99999px" }}
        readOnly
        ref={input}
        value={props.value}
      />
      <button
        className="button"
        onClick={() => {
          input.current.select();
          document.execCommand("copy");
          alert("copied");
        }}
      >
        {props.children}
      </button>
    </div>
  );
};
export default CopyToClipboard;
