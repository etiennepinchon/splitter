import React from 'react';
import styled from 'styled-components';
import './App.css';

import Split from './Split';
// const PanelGroup = require('react-panelgroup').default;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: 800px;
  height: 300px;
  display: flex;
  justify-content: center;
  overflow: auto;
`;

/*
const Panel = styled.div`
  margin: 8px;
  width: 100%;
  height: 100%;
  padding: 30px;
  background: rgba(255, 0, 0, 0.15);
  overflow-y: auto;
`;
*/

const TextDiv = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;
`;

function App() {
  return (
    <Container>
      <Split>
        <TextDiv>
          {[...Array(30)].map(i => (
            <div key={Math.random()}>
              This is a left text
              <br/>
            </div>
          ))}
        </TextDiv>
        <div>Text 2</div>
        <div>Text 3</div>
        <div>Text 4</div>
        <div>Text 5</div>
      </Split>
      {/*
      <PanelGroup
        borderColor="green"
      >
        <Panel>panel</Panel>
        <PanelGroup
          direction="column"
          borderColor="green"
        >
          <Panel>panel</Panel>
          <PanelGroup
            borderColor="green"
          >
            <Panel>
              panel
              <br/>
            </Panel>
            <Panel>panel</Panel>
          </PanelGroup>
        </PanelGroup>
      </PanelGroup>
      */}
    </Container>
  );
}

export default App;
