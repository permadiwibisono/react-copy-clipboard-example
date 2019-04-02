import React from "react";
import Title from "./Typos/Title";
import SubTitle from "./Typos/SubTitle";
import Section from "./Section";
import Container from "./Container";
import Example from "./Example";

const App = () => (
  <Section>
    <Container>
      <Title>Copy to Clipboard</Title>
      <SubTitle>
        This is how to copy to clipboard using button in reactjs.{" "}
        <i>No package required.</i>
      </SubTitle>
      <Example />
    </Container>
    <Container>
      <SubTitle>References:</SubTitle>
      <ul>
        <li>
          <a
            href="https://reactjs.org/docs/hooks-reference.html"
            className="button is-text"
          >
            React Hooks Docs
          </a>
        </li>
        <li>
          <a href="https://bulma.io/documentation" className="button is-text">
            Bulma.io
          </a>
        </li>
        <li>
          <a
            href="https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f"
            className="button is-text"
          >
            Copying text to clipboard with JavaScript
          </a>
        </li>
        <li>
          <a
            href="https://www.w3schools.com/howto/howto_js_snackbar.asp"
            className="button is-text"
          >
            How TO - Snackbar / Toast
          </a>
        </li>
      </ul>
    </Container>
  </Section>
);
export default App;
