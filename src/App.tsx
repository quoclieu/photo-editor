import React from 'react';
import './App.css';
import { ThemeProvider, theme, CSSReset } from '@chakra-ui/core';
import { Editor } from './components/Editor';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Editor />
    </ThemeProvider>
  );
}

export default App;
