import React, { useState } from "react";
import Container from "./Container";
import Input from "./Form/Input";
import CopyToClipboard from "./CopyToClipboard";

function Example() {
  const [value, setValue] = useState("");
  return (
    <Container>
      <div className="field">
        <Input value={value} onChange={e => setValue(e.target.value)} />
      </div>
      <div className="field">
        <CopyToClipboard value={value}>Copy to clipboard</CopyToClipboard>
      </div>
    </Container>
  );
}
export default Example;
