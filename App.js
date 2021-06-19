import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native';
import { width } from './common/tool';
import Main from './Main';

const Container = styled.View`
  width: ${width}px;
`;




export default function App() {
  return (
    <Container>
      <StatusBar style="auto" />
      <Main/>
    </Container>
  );
}


