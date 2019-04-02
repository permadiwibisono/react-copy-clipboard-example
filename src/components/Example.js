import React, { useState } from "react";
import Container from "./Container";
import SubTitle from "./Typos/SubTitle";
import Input from "./Form/Input";
import CopyToClipboard from "./CopyToClipboard";

function Example() {
  const [value, setValue] = useState("");
  const [website] = useState(
    "https://github.com/permadiwibisono/react-copy-clipboard-example"
  );
  return (
    <Container>
      <SubTitle>With Input Text.</SubTitle>
      <div className="field">
        <Input value={value} onChange={e => setValue(e.target.value)} />
      </div>
      <div className="field">
        <CopyToClipboard value={value}>Copy to clipboard</CopyToClipboard>
      </div>
      <SubTitle>With Read Only Text.</SubTitle>
      <div className="level">
        <div className="level-item">
          <div>
            <p className="heading">Repo: (Dont forget to fork or star it)</p>
            <p className="title">
              <a className="button is-text" href={website}>
                Click here or copy the repo link.
              </a>
            </p>
          </div>
        </div>
        <div className="level-item">
          <CopyToClipboard value={website}>Copy Link!</CopyToClipboard>
        </div>
      </div>
    </Container>
  );
}
export default Example;
