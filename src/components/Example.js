import React, { useState } from "react";
import Container from "./Container";
import SubTitle from "./Typos/SubTitle";
import Input from "./Form/Input";
import Label from "./Form/Label";
import Textarea from "./Form/Textarea";
import CopyToClipboard from "./CopyToClipboard";

function Example() {
  const [value, setValue] = useState("");
  const [valueResult, setValueResult] = useState("");
  const [website] = useState(
    "https://github.com/permadiwibisono/react-copy-clipboard-example"
  );
  return (
    <Container>
      <div>
        <div className="field">
          <Label>Input here</Label>
          <Input value={value} onChange={e => setValue(e.target.value)} />
        </div>
        <div className="field">
          <CopyToClipboard value={value}>Copy to clipboard</CopyToClipboard>
        </div>
      </div>
      <div style={{ marginTop: 15 }}>
        <div className="field">
          <Label>Try to paste</Label>
          <Textarea
            onFocus={e => e.target.select()}
            className="textarea"
            onChange={e => setValueResult(e.target.value)}
            value={valueResult}
          />
        </div>
      </div>
      <div style={{ marginTop: 15, marginBottom: 15 }}>
        <div className="content">
          <h6>REPO: (DONT FORGET TO FORK OR STAR IT)</h6>
          <div style={{ display: "flex", alignItems: "center" }}>
            <a className="button is-text" href={website}>
              Click here
            </a>
            <span style={{ marginRight: 15 }}>OR</span>
            <CopyToClipboard value={website}>Copy Link!</CopyToClipboard>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default Example;
