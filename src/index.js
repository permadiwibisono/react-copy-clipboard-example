import React from "react";
import ReactDOM from "react-dom";
import Title from "./components/Typos/Title";
import SubTitle from "./components/Typos/SubTitle";
import Section from "./components/Section";
import Container from "./components/Container";

function App() {
  return (
    <Section>
      <Container>
        <Title>Copy to Clipboard</Title>
        <SubTitle>
          This is how to copy to clipboard using button in reactjs.
        </SubTitle>
      </Container>
    </Section>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
