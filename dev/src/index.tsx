import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

ReactDOM.render(
  // TODO: Implement web application.
  <StyledDiv id="application">Hello, world!!!!</StyledDiv>,
  document.getElementById('root')
);
