import { buildQueries } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';
import './App.css';

const Otsikko2 = styled.h2`
  background-color: blue;
`;

const otsikko3 = { backgroundColor: 'blue' };

const App = () => {
  return (
    <div>
      <h2 className="otsikko">hei</h2>
      <Otsikko2>hei</Otsikko2>
      <h2 style={otsikko3}>hei</h2>
    </div>
  );
};

export default App;
