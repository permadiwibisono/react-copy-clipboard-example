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
        This is how to copy to clipboard using button in reactjs.
      </SubTitle>
      <Example />
    </Container>
  </Section>
);
export default App;
